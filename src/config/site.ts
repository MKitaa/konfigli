export const site = {
  name: 'MKode',
  tagline: 'Konfiguratory 3D i strony internetowe dla firm produkcyjnych',
  description:
    'Buduję konfiguratory produktów z podglądem 3D i strony internetowe dla producentów garaży, wiat, pergoli i innych konstrukcji. Bezpłatna wycena w 24h.',
  url: 'https://mkode.pl',
  author: 'Mateusz Kita',
  locale: 'pl_PL',

  contact: {
    email: 'kontakt@mkode.pl',
  },

  nav: [
    { label: 'Usługi', href: '#uslugi' },
    { label: 'Realizacje', href: '#realizacje' },
    { label: 'Jak działam', href: '#proces' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Kontakt', href: '#kontakt' },
  ],

  configuratorProducts: [
    'Garaże blaszane',
    'Wiaty śmietnikowe',
    'Kojce dla psów',
    'Pergole',
    'Carporty',
    'Hale i magazyny',
    'Ogrodzenia',
    'Domki narzędziowe',
  ],

  services: [
    {
      title: 'Konfiguratory produktów 3D',
      badge: 'Główna specjalizacja',
      description:
        'Twój klient wchodzi na stronę, sam dobiera wymiary, kolor i wariant — i widzi gotowy produkt w 3D. Zamiast odbierać telefony z pytaniami, dostajesz gotowe zapytania ofertowe z kompletną specyfikacją.',
      highlights: [
        'Mniej telefonów — klient odpowiada sobie sam',
        'Zapytania ofertowe z gotową konfiguracją na maila',
        'Podgląd 3D na żywo — na telefonie i komputerze',
        'Dopasowany do Twojego produktu i cennika',
      ],
      icon: 'cube',
    },
    {
      title: 'Strony internetowe',
      badge: null,
      description:
        'Profesjonalna wizytówka Twojej firmy w internecie. Szybka, czytelna i widoczna w Google. Idealna gdy potrzebujesz stronę sprawnie i w rozsądnym budżecie.',
      highlights: [
        'Gotowa w 1–2 tygodnie',
        'Samodzielna edycja tekstów i zdjęć',
        'Dopasowana do telefonów i komputerów',
        'Formularz kontaktowy i mapa dojazdu',
      ],
      icon: 'globe',
    },
    {
      title: 'Strony dedykowane',
      badge: null,
      description:
        'Strona projektowana i budowana od zera pod Twoje potrzeby. Unikatowy wygląd, szybsze ładowanie, lepsze pozycjonowanie. Gdy chcesz się wyróżnić na tle konkurencji.',
      highlights: [
        'Projekt graficzny robiony pod Twoją firmę',
        'Szybsza od szablonowych stron — lepsze SEO',
        'Nietypowe funkcje i integracje',
        'Pełna kontrola nad każdym elementem',
      ],
      icon: 'custom',
    },
    {
      title: 'Aplikacje webowe',
      badge: null,
      description:
        'Narzędzia w przeglądarce, które automatyzują to, co teraz robisz ręcznie. Panel klienta, system zamówień, kalkulator wycen — co Twoja firma potrzebuje.',
      highlights: [
        'Rozwiązanie szyte na miarę Twojego problemu',
        'Dostęp z telefonu i komputera',
        'Koniec z Excelem i kartkami',
        'Łatwo rozbudować gdy firma rośnie',
      ],
      icon: 'app',
    },
  ],

  liveDemo: {
    title: 'Przetestuj konfigurator na żywo',
    subtitle: 'Na żywo',
    description: 'Nie musisz mi wierzyć na słowo. Poniżej jest działający konfigurator garaży, który zbudowałem. Wybierz wymiary, kolor, typ dachu — i zobacz efekt w 3D. Dokładnie takie narzędzie mogę zbudować dla Twojego produktu.',
    url: 'https://mkitaa.github.io/garage-configurator-core/',
    cta: 'Chcesz taki konfigurator dla swojego produktu?',
  },

  caseStudies: [
    {
      title: 'KaEm-Stal',
      subtitle: 'Producent garaży blaszanych',
      description:
        'Dla firmy KaEm-Stal zbudowałem konfigurator 3D garaży blaszanych. Klient sam dobiera wymiary, kolor ścian i typ dachu, widzi efekt na żywo i wysyła zapytanie ofertowe z gotową specyfikacją — bez telefonu do producenta.',
      results: [
        'Konfigurator 3D wbudowany w stronę producenta',
        'Klienci sami konfigurują garaż i wysyłają zapytania',
        'Podgląd na żywo działa na telefonach i komputerach',
        'Automatyczne zapytania ofertowe z wybraną konfiguracją',
      ],
      url: 'https://kaem-stal.pl',
      image: '/images/portfolio/kaem-stal.png',
      active: true,
    },
    {
      title: 'Holz-Stal',
      subtitle: 'Producent garaży drewnopodobnych',
      description:
        'Dla Holz-Stal zbudowałem rozszerzoną wersję konfiguratora 3D z większą liczbą opcji wykończenia. Garaże drewnopodobne wymagały dodatkowych wariantów — rynny, kolory paneli, otoczenie budynku.',
      results: [
        'Więcej wariantów produktu w jednym konfiguratorze',
        'Czytelne etykiety wymiarów nawet na małym ekranie',
        'Klient nie potrzebuje instrukcji — interfejs prowadzi za rękę',
        'Jedno narzędzie zamiast PDF-owego cennika',
      ],
      url: '#',
      image: '/images/portfolio/holz-stal.png',
      active: false,
      badge: 'Wkrótce',
    },
  ],

  testimonials: [
    {
      quote: 'Konfigurator zmienił sposób w jaki pracujemy z klientami. Zamiast tłumaczyć przez telefon jak wygląda garaż w danym kolorze, klient sam to sprawdza i wysyła gotowe zapytanie. Oszczędzamy mnóstwo czasu.',
      author: 'KaEm-Stal',
      role: 'Producent garaży blaszanych',
    },
  ],

  process: [
    {
      step: 1,
      title: 'Bezpłatna rozmowa',
      description: 'Opowiedz mi o swoim produkcie i o tym jak teraz obsługujesz klientów. Powiem Ci co mogę zrobić, ile to kosztuje i jak długo potrwa. Bez zobowiązań.',
    },
    {
      step: 2,
      title: 'Projekt do akceptacji',
      description: 'Widzisz jak będzie wyglądać strona i konfigurator zanim zacznę budować. Zmiany na tym etapie są łatwe i nic nie kosztują.',
    },
    {
      step: 3,
      title: 'Budowa z podglądem',
      description: 'Na bieżąco pokazuję postępy. Masz uwagę? Reaguję od razu. Nie czekasz miesiąc — widzisz jak projekt rośnie tydzień po tygodniu.',
    },
    {
      step: 4,
      title: 'Uruchomienie i wsparcie',
      description: 'Podpinam domenę, publikuję stronę, sprawdzam wszystko. Po starcie nie znikam — masz gwarancję poprawek i wsparcie gdy coś trzeba zmienić.',
    },
  ],

  faq: [
    {
      question: 'Ile kosztuje konfigurator 3D?',
      answer: 'Każdy produkt jest inny, dlatego konfigurator wyceniam indywidualnie. Cena zależy od liczby opcji konfiguracji, złożoności modelu 3D i integracji z Twoją stroną. Napisz do mnie z opisem produktu — wycenę dostajesz bezpłatnie w ciągu 24 godzin.',
    },
    {
      question: 'Ile kosztuje strona internetowa?',
      answer: 'Strona firmowa zaczyna się od ok. 2 000 zł. Strona dedykowana, projektowana od zera pod Twoją firmę — od ok. 4 000 zł w górę. Dokładna cena zależy od zakresu. Bezpłatna wycena w 24h.',
    },
    {
      question: 'Czym różni się strona firmowa od dedykowanej?',
      answer: 'Strona firmowa to sprawdzone, gotowe rozwiązanie — wygląda profesjonalnie, szybko powstaje i mieści się w mniejszym budżecie. Strona dedykowana jest projektowana od zera specjalnie dla Ciebie — unikatowy wygląd, szybsze działanie, lepsze pozycjonowanie w Google i możliwość nietypowych funkcji.',
    },
    {
      question: 'Jak długo trwa realizacja?',
      answer: 'Strona firmowa — 1–2 tygodnie. Strona dedykowana — 3–5 tygodni. Konfigurator 3D — 4–8 tygodni, zależnie od złożoności produktu. Termin ustalamy przed startem i go dotrzymuję.',
    },
    {
      question: 'Nie mam logo, tekstów ani zdjęć. Mogę zacząć?',
      answer: 'Tak. Wystarczy, że opiszesz czym się zajmujesz i jaki masz produkt. Pomogę dobrać zdjęcia, napiszę teksty i zaproponuję spójny wygląd. Nie musisz przychodzić z gotowymi materiałami.',
    },
    {
      question: 'Czy konfigurator będzie działał na telefonach?',
      answer: 'Tak. Konfigurator działa w przeglądarce na każdym urządzeniu — telefonie, tablecie i komputerze. Twoi klienci nie muszą niczego instalować.',
    },
    {
      question: 'Czy pomagasz z domeną i hostingiem?',
      answer: 'Tak, zajmuję się wszystkim od A do Z. Rejestruję domenę, konfiguruję hosting, certyfikat SSL. Dostajesz gotowe, działające rozwiązanie.',
    },
    {
      question: 'Co jeśli po wdrożeniu potrzebuję zmian?',
      answer: 'Po uruchomieniu masz okres gwarancyjny na poprawki w cenie. Potrzebujesz nowych wariantów w konfiguratorze albo nowej podstrony? Mogę to dołożyć. Nie jesteś przywiązany żadną umową.',
    },
  ],

  whyMe: [
    {
      title: 'Specjalizacja w konfiguratorach',
      description: 'Nie robię "wszystkiego dla wszystkich". Znam branżę produkcyjną i wiem czego potrzebują Twoi klienci.',
    },
    {
      title: 'Pracujesz ze mną, nie z firmą',
      description: 'Jeden człowiek, szybkie decyzje. Piszesz — odpowiadam. Bez przekazywania między działami.',
    },
    {
      title: 'Wycena z góry, bez niespodzianek',
      description: 'Zanim zacznę, wiesz dokładnie ile zapłacisz i co dostaniesz. Bez dopłat za poprawki i drobnego druku.',
    },
    {
      title: 'Nie znikam po publikacji',
      description: 'Nowy wariant produktu? Zmiana cennika? Pomogę z rozwojem strony i konfiguratora po wdrożeniu.',
    },
  ],

  // SEO keywords for meta and structured data
  seo: {
    keywords: [
      'konfigurator 3D',
      'konfigurator produktów',
      'konfigurator garaży',
      'konfigurator online',
      'strona internetowa dla firmy',
      'strona internetowa producent',
      'strona firmowa',
      'tworzenie stron internetowych',
      'aplikacja webowa na zamówienie',
      'konfigurator wiat',
      'konfigurator pergoli',
      'konfigurator carportów',
      'wizualizacja 3D produktu',
      'strona dla producenta',
      'strona dedykowana',
    ],
  },
} as const;
