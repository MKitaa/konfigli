import * as THREE from 'three';

export function initHeroScene(canvas: HTMLCanvasElement): void {
  const gl = canvas.getContext('webgl2') || canvas.getContext('webgl');
  if (!gl) throw new Error('WebGL not supported');

  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setClearColor(0x000000, 0);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
  camera.position.set(5.5, 3.5, 7);
  camera.lookAt(0, 0.7, 0);

  // Lights
  scene.add(new THREE.AmbientLight(0x404060, 0.5));
  const dirLight = new THREE.DirectionalLight(0xfff5e6, 0.9);
  dirLight.position.set(5, 8, 5);
  scene.add(dirLight);
  const fillLight = new THREE.DirectionalLight(0xf97316, 0.15);
  fillLight.position.set(-3, 2, 4);
  scene.add(fillLight);

  // --- Garage ---
  const garageGroup = new THREE.Group();
  scene.add(garageGroup);

  const accentColor = new THREE.Color(0xf97316);
  const edgeMaterial = new THREE.LineBasicMaterial({
    color: accentColor,
    transparent: true,
    opacity: 1.0,
  });

  const isLightTheme = document.documentElement.getAttribute('data-theme') === 'light';
  const solidMaterial = new THREE.MeshStandardMaterial({
    color: isLightTheme ? 0xe8ecf0 : 0x1e2333,
    transparent: true,
    opacity: 0,
    side: THREE.DoubleSide,
  });

  // --- Dimensions (wider garage) ---
  const gW = 4.5;   // width (X)
  const gD = 3;     // depth (Z)
  const gH = 2.0;   // wall height
  const hW = gW / 2;
  const hD = gD / 2;
  const wallT = 0.03;

  // Ground grid
  const gridSize = 7;
  const gridDiv = 14;
  const gridPoints: THREE.Vector3[] = [];
  const gridStep = gridSize / gridDiv;
  const gridHalf = gridSize / 2;
  for (let i = 0; i <= gridDiv; i++) {
    const p = -gridHalf + i * gridStep;
    gridPoints.push(
      new THREE.Vector3(p, -0.01, -gridHalf),
      new THREE.Vector3(p, -0.01, gridHalf),
      new THREE.Vector3(-gridHalf, -0.01, p),
      new THREE.Vector3(gridHalf, -0.01, p),
    );
  }
  const gridGeo = new THREE.BufferGeometry().setFromPoints(gridPoints);
  const gridMaterial = new THREE.LineBasicMaterial({
    color: accentColor,
    transparent: true,
    opacity: 0.06,
  });
  garageGroup.add(new THREE.LineSegments(gridGeo, gridMaterial));

  // Helper: add mesh + edges
  function addBox(w: number, h: number, d: number, x: number, y: number, z: number) {
    const geo = new THREE.BoxGeometry(w, h, d);
    const mesh = new THREE.Mesh(geo, solidMaterial);
    mesh.position.set(x, y, z);
    garageGroup.add(mesh);
    const edges = new THREE.LineSegments(new THREE.EdgesGeometry(geo), edgeMaterial);
    edges.position.set(x, y, z);
    garageGroup.add(edges);
  }

  // Floor
  addBox(gW, 0.05, gD, 0, 0, 0);

  // Left wall
  addBox(wallT, gH, gD, -hW, gH / 2, 0);

  // Right wall
  addBox(wallT, gH, gD, hW, gH / 2, 0);

  // Back wall
  addBox(gW, gH, wallT, 0, gH / 2, -hD);

  // --- Front wall (pillars + lintel around door) ---
  const doorWidth = 3.2;
  const doorHeight = 1.6;
  const doorZ = hD;
  const pillarW = (gW - doorWidth) / 2;

  // Left pillar
  if (pillarW > 0.05) addBox(pillarW, gH, wallT, -hW + pillarW / 2, gH / 2, doorZ);
  // Right pillar
  if (pillarW > 0.05) addBox(pillarW, gH, wallT, hW - pillarW / 2, gH / 2, doorZ);
  // Lintel above door
  const lintelH = gH - doorHeight;
  if (lintelH > 0.05) addBox(doorWidth, lintelH, wallT, 0, doorHeight + lintelH / 2, doorZ);

  // --- Garage door (brama) ---
  const dz = doorZ + 0.01;
  const doorPts = [
    new THREE.Vector3(-doorWidth / 2, 0.025, dz),
    new THREE.Vector3(doorWidth / 2, 0.025, dz),
    new THREE.Vector3(doorWidth / 2, 0.025, dz),
    new THREE.Vector3(doorWidth / 2, doorHeight, dz),
    new THREE.Vector3(doorWidth / 2, doorHeight, dz),
    new THREE.Vector3(-doorWidth / 2, doorHeight, dz),
    new THREE.Vector3(-doorWidth / 2, doorHeight, dz),
    new THREE.Vector3(-doorWidth / 2, 0.025, dz),
  ];
  // Panel dividers (3 panels = 2 lines)
  for (let i = 1; i < 3; i++) {
    const y = 0.025 + (doorHeight - 0.025) * (i / 3);
    doorPts.push(
      new THREE.Vector3(-doorWidth / 2, y, dz),
      new THREE.Vector3(doorWidth / 2, y, dz),
    );
  }
  garageGroup.add(new THREE.LineSegments(
    new THREE.BufferGeometry().setFromPoints(doorPts), edgeMaterial
  ));

  // --- Side door on right wall ---
  const sdW = 0.7;
  const sdH = 1.4;
  const sdX = hW + 0.03;
  const sdZ = -0.4;
  const sdPts = [
    new THREE.Vector3(sdX, 0.025, sdZ - sdW / 2),
    new THREE.Vector3(sdX, 0.025, sdZ + sdW / 2),
    new THREE.Vector3(sdX, 0.025, sdZ + sdW / 2),
    new THREE.Vector3(sdX, sdH, sdZ + sdW / 2),
    new THREE.Vector3(sdX, sdH, sdZ + sdW / 2),
    new THREE.Vector3(sdX, sdH, sdZ - sdW / 2),
    new THREE.Vector3(sdX, sdH, sdZ - sdW / 2),
    new THREE.Vector3(sdX, 0.025, sdZ - sdW / 2),
    // Handle
    new THREE.Vector3(sdX + 0.01, 0.75, sdZ + sdW / 2 - 0.08),
    new THREE.Vector3(sdX + 0.01, 0.75, sdZ + sdW / 2 - 0.2),
  ];
  garageGroup.add(new THREE.LineSegments(
    new THREE.BufferGeometry().setFromPoints(sdPts), edgeMaterial
  ));

  // --- Window on left wall ---
  const wS = 0.6;
  const wX = -hW - 0.03;
  const wZ = 0.2;
  const wY = 1.1;
  const winPts = [
    new THREE.Vector3(wX, wY - wS / 2, wZ - wS / 2),
    new THREE.Vector3(wX, wY - wS / 2, wZ + wS / 2),
    new THREE.Vector3(wX, wY - wS / 2, wZ + wS / 2),
    new THREE.Vector3(wX, wY + wS / 2, wZ + wS / 2),
    new THREE.Vector3(wX, wY + wS / 2, wZ + wS / 2),
    new THREE.Vector3(wX, wY + wS / 2, wZ - wS / 2),
    new THREE.Vector3(wX, wY + wS / 2, wZ - wS / 2),
    new THREE.Vector3(wX, wY - wS / 2, wZ - wS / 2),
    // Cross
    new THREE.Vector3(wX, wY, wZ - wS / 2),
    new THREE.Vector3(wX, wY, wZ + wS / 2),
    new THREE.Vector3(wX, wY - wS / 2, wZ),
    new THREE.Vector3(wX, wY + wS / 2, wZ),
  ];
  garageGroup.add(new THREE.LineSegments(
    new THREE.BufferGeometry().setFromPoints(winPts), edgeMaterial
  ));

  // --- Roof (gable with overhang) ---
  const roofOH = 0.15;
  const roofHalfW = hW + 0.15 + roofOH;
  const roofPeak = 0.9;
  const roofShape = new THREE.Shape();
  roofShape.moveTo(-roofHalfW, 0);
  roofShape.lineTo(0, roofPeak);
  roofShape.lineTo(roofHalfW, 0);
  roofShape.lineTo(-roofHalfW, 0);

  const roofDepth = gD + roofOH * 2;
  const roofGeo = new THREE.ExtrudeGeometry(roofShape, { depth: roofDepth, bevelEnabled: false });
  const roof = new THREE.Mesh(roofGeo, solidMaterial);
  roof.position.set(0, gH, -hD - roofOH);
  garageGroup.add(roof);
  const roofEdges = new THREE.LineSegments(new THREE.EdgesGeometry(roofGeo), edgeMaterial);
  roofEdges.position.copy(roof.position);
  garageGroup.add(roofEdges);

  // Position
  garageGroup.position.set(1.8, -0.3, 0);

  // --- Morph animation ---
  const morphDuration = 2.5;
  let morphProgress = 0;
  function easeOutCubic(t: number): number { return 1 - Math.pow(1 - t, 3); }

  function updateMorph(delta: number): void {
    if (morphProgress >= 1) return;
    morphProgress = Math.min(morphProgress + delta / morphDuration, 1);
    const t = easeOutCubic(morphProgress);
    solidMaterial.opacity = t * 0.25;
    edgeMaterial.opacity = 1.0 - t * 0.3;
    gridMaterial.opacity = 0.06 + t * 0.02;
  }

  // --- Particles ---
  const isMobile = window.innerWidth < 768;
  const particleCount = isMobile ? 30 : 80;
  const particlesGeo = new THREE.BufferGeometry();
  const positions = new Float32Array(particleCount * 3);
  const velocities = new Float32Array(particleCount * 3);

  for (let i = 0; i < particleCount; i++) {
    const i3 = i * 3;
    positions[i3] = (Math.random() - 0.5) * 14;
    positions[i3 + 1] = (Math.random() - 0.5) * 10;
    positions[i3 + 2] = (Math.random() - 0.5) * 10;
    velocities[i3] = (Math.random() - 0.5) * 0.003;
    velocities[i3 + 1] = (Math.random() - 0.5) * 0.003;
    velocities[i3 + 2] = (Math.random() - 0.5) * 0.003;
  }
  particlesGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  const particleMat = new THREE.PointsMaterial({
    color: accentColor, size: 0.03, transparent: true, opacity: 0.5, sizeAttenuation: true,
  });
  scene.add(new THREE.Points(particlesGeo, particleMat));

  // --- Mouse tracking ---
  const mouse = { x: 0, y: 0 };
  const targetRot = { x: 0, y: 0 };
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
    (entries) => { for (const e of entries) scrollOpacity = e.intersectionRatio; },
    { threshold: Array.from({ length: 20 }, (_, i) => i / 20) }
  );
  if (heroSection) scrollObserver.observe(heroSection);

  // --- Visibility pause ---
  let isVisible = true;
  const visibilityObserver = new IntersectionObserver(
    (entries) => { isVisible = entries[0].isIntersecting; },
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

    const delta = clock.getDelta();
    const elapsed = clock.getElapsedTime();

    updateMorph(delta);

    // Auto-rotate
    garageGroup.rotation.y = elapsed * 0.12;

    // Mouse parallax
    if (!isTouch) {
      targetRot.x = mouse.y * 0.12;
      targetRot.y = mouse.x * 0.12;
      garageGroup.rotation.x += (targetRot.x - garageGroup.rotation.x) * 0.04;
      garageGroup.rotation.y += targetRot.y * 0.25;
    }

    // Particles
    const posArr = particlesGeo.attributes.position.array as Float32Array;
    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      posArr[i3] += velocities[i3];
      posArr[i3 + 1] += velocities[i3 + 1];
      posArr[i3 + 2] += velocities[i3 + 2];
      for (let j = 0; j < 3; j++) {
        if (Math.abs(posArr[i3 + j]) > 7) posArr[i3 + j] *= -0.9;
      }
    }
    particlesGeo.attributes.position.needsUpdate = true;

    canvas.style.opacity = String(scrollOpacity);
    renderer.render(scene, camera);
  }
  animate();

  // Cleanup
  document.addEventListener('astro:before-swap', () => {
    cancelAnimationFrame(animationId);
    renderer.dispose();
    scrollObserver.disconnect();
    visibilityObserver.disconnect();
  }, { once: true });
}
