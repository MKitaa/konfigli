import * as THREE from 'three';

export function initHeroScene(canvas: HTMLCanvasElement): void {
  // Detect WebGL
  const gl = canvas.getContext('webgl2') || canvas.getContext('webgl');
  if (!gl) throw new Error('WebGL not supported');

  // Renderer
  const renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: true,
    alpha: true,
  });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setClearColor(0x000000, 0);

  // Scene & Camera
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
  camera.position.set(4, 3, 6);
  camera.lookAt(0, 0.5, 0);

  // Lights
  const ambientLight = new THREE.AmbientLight(0x404060, 0.6);
  scene.add(ambientLight);

  const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
  directionalLight.position.set(5, 8, 5);
  scene.add(directionalLight);

  // --- Procedural Garage Geometry ---
  const garageGroup = new THREE.Group();
  scene.add(garageGroup);

  const accentColor = new THREE.Color(0x3b82f6);
  const edgeMaterial = new THREE.LineBasicMaterial({
    color: accentColor,
    transparent: true,
    opacity: 0.6,
  });
  const solidMaterial = new THREE.MeshStandardMaterial({
    color: 0x12121a,
    transparent: true,
    opacity: 0.3,
    side: THREE.DoubleSide,
  });

  // Base/floor
  const floorGeo = new THREE.BoxGeometry(3, 0.05, 2);
  const floor = new THREE.Mesh(floorGeo, solidMaterial);
  floor.position.y = 0;
  garageGroup.add(floor);
  garageGroup.add(
    new THREE.LineSegments(new THREE.EdgesGeometry(floorGeo), edgeMaterial)
  );

  // Walls (left, right, back)
  const wallHeight = 1.8;
  const wallThickness = 0.03;

  // Left wall
  const leftWallGeo = new THREE.BoxGeometry(wallThickness, wallHeight, 2);
  const leftWall = new THREE.Mesh(leftWallGeo, solidMaterial);
  leftWall.position.set(-1.5, wallHeight / 2, 0);
  garageGroup.add(leftWall);
  garageGroup.add(
    new THREE.LineSegments(
      new THREE.EdgesGeometry(leftWallGeo),
      edgeMaterial
    )
  );
  leftWall.children = [];
  const leftEdges = new THREE.LineSegments(
    new THREE.EdgesGeometry(leftWallGeo),
    edgeMaterial
  );
  leftEdges.position.copy(leftWall.position);
  garageGroup.add(leftEdges);

  // Right wall
  const rightWallGeo = new THREE.BoxGeometry(wallThickness, wallHeight, 2);
  const rightWall = new THREE.Mesh(rightWallGeo, solidMaterial);
  rightWall.position.set(1.5, wallHeight / 2, 0);
  garageGroup.add(rightWall);
  const rightEdges = new THREE.LineSegments(
    new THREE.EdgesGeometry(rightWallGeo),
    edgeMaterial
  );
  rightEdges.position.copy(rightWall.position);
  garageGroup.add(rightEdges);

  // Back wall
  const backWallGeo = new THREE.BoxGeometry(3, wallHeight, wallThickness);
  const backWall = new THREE.Mesh(backWallGeo, solidMaterial);
  backWall.position.set(0, wallHeight / 2, -1);
  garageGroup.add(backWall);
  const backEdges = new THREE.LineSegments(
    new THREE.EdgesGeometry(backWallGeo),
    edgeMaterial
  );
  backEdges.position.copy(backWall.position);
  garageGroup.add(backEdges);

  // Roof (gable)
  const roofShape = new THREE.Shape();
  roofShape.moveTo(-1.65, 0);
  roofShape.lineTo(0, 0.8);
  roofShape.lineTo(1.65, 0);
  roofShape.lineTo(-1.65, 0);

  const extrudeSettings = {
    depth: 2.2,
    bevelEnabled: false,
  };
  const roofGeo = new THREE.ExtrudeGeometry(roofShape, extrudeSettings);
  const roof = new THREE.Mesh(roofGeo, solidMaterial);
  roof.position.set(0, wallHeight, -1.1);
  garageGroup.add(roof);
  const roofEdges = new THREE.LineSegments(
    new THREE.EdgesGeometry(roofGeo),
    edgeMaterial
  );
  roofEdges.position.copy(roof.position);
  garageGroup.add(roofEdges);

  // Center garage
  garageGroup.position.y = -0.3;

  // --- Particles ---
  const isMobile = window.innerWidth < 768;
  const particleCount = isMobile ? 30 : 80;
  const particlesGeo = new THREE.BufferGeometry();
  const positions = new Float32Array(particleCount * 3);
  const velocities = new Float32Array(particleCount * 3);

  for (let i = 0; i < particleCount; i++) {
    const i3 = i * 3;
    positions[i3] = (Math.random() - 0.5) * 12;
    positions[i3 + 1] = (Math.random() - 0.5) * 8;
    positions[i3 + 2] = (Math.random() - 0.5) * 8;
    velocities[i3] = (Math.random() - 0.5) * 0.003;
    velocities[i3 + 1] = (Math.random() - 0.5) * 0.003;
    velocities[i3 + 2] = (Math.random() - 0.5) * 0.003;
  }

  particlesGeo.setAttribute(
    'position',
    new THREE.BufferAttribute(positions, 3)
  );

  const particleMaterial = new THREE.PointsMaterial({
    color: accentColor,
    size: 0.03,
    transparent: true,
    opacity: 0.5,
    sizeAttenuation: true,
  });

  const particles = new THREE.Points(particlesGeo, particleMaterial);
  scene.add(particles);

  // --- Mouse tracking ---
  const mouse = { x: 0, y: 0 };
  const targetRotation = { x: 0, y: 0 };
  const isTouch = 'ontouchstart' in window;

  if (!isTouch) {
    window.addEventListener('mousemove', (e) => {
      mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.y = (e.clientY / window.innerHeight) * 2 - 1;
    });
  }

  // --- Scroll fade ---
  let scrollOpacity = 1;
  const heroSection = canvas.parentElement;

  const scrollObserver = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        scrollOpacity = entry.intersectionRatio;
      }
    },
    { threshold: Array.from({ length: 20 }, (_, i) => i / 20) }
  );

  if (heroSection) scrollObserver.observe(heroSection);

  // --- Visibility pause ---
  let isVisible = true;
  const visibilityObserver = new IntersectionObserver(
    (entries) => {
      isVisible = entries[0].isIntersecting;
    },
    { threshold: 0.01 }
  );
  visibilityObserver.observe(canvas);

  // --- Resize ---
  function handleResize() {
    const { clientWidth: w, clientHeight: h } = canvas;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  }

  handleResize();
  window.addEventListener('resize', handleResize);

  // --- Animation loop ---
  const clock = new THREE.Clock();
  let animationId: number;

  function animate() {
    animationId = requestAnimationFrame(animate);

    if (!isVisible) return;

    const elapsed = clock.getElapsedTime();

    // Auto-rotate garage
    garageGroup.rotation.y = elapsed * 0.15;

    // Mouse parallax (desktop only)
    if (!isTouch) {
      targetRotation.x = mouse.y * 0.15;
      targetRotation.y = mouse.x * 0.15;
      garageGroup.rotation.x +=
        (targetRotation.x - garageGroup.rotation.x) * 0.05;
      garageGroup.rotation.y +=
        targetRotation.y * 0.3;
    }

    // Animate particles
    const posArray = particlesGeo.attributes.position.array as Float32Array;
    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      posArray[i3] += velocities[i3];
      posArray[i3 + 1] += velocities[i3 + 1];
      posArray[i3 + 2] += velocities[i3 + 2];

      // Wrap around
      for (let j = 0; j < 3; j++) {
        if (Math.abs(posArray[i3 + j]) > 6) {
          posArray[i3 + j] *= -0.9;
        }
      }
    }
    particlesGeo.attributes.position.needsUpdate = true;

    // Scroll fade
    canvas.style.opacity = String(scrollOpacity);

    renderer.render(scene, camera);
  }

  animate();

  // Cleanup on page navigation
  document.addEventListener(
    'astro:before-swap',
    () => {
      cancelAnimationFrame(animationId);
      renderer.dispose();
      scrollObserver.disconnect();
      visibilityObserver.disconnect();
    },
    { once: true }
  );
}
