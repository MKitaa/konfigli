export const site = {
  name: 'Konfigli',
  tagline: 'Konfiguratory 3D dla producentów garaży, hal i konstrukcji stalowych',
  description:
    'Konfiguratory 3D na zamówienie — klient sam dobiera wariant i wysyła zapytanie z gotową specyfikacją. Automatyczne rysunki techniczne. Bezpłatna wycena w 24h.',
  url: 'https://konfigli.pl',
  author: 'Mateusz Kita',
  locale: 'pl_PL',

  contact: {
    email: 'biuro@konfigli.pl',
    phone: '+48 512 020 894',
    apiUrl: 'https://konfigli.pl',
  },

  nav: [
    { label: 'Demo', href: '#konfigurator' },
    { label: 'Na zamówienie', href: '#uslugi' },
    { label: 'Realizacje', href: '#realizacje' },
    { label: 'Jak działam', href: '#proces' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Kontakt', href: '#kontakt' },
  ],

  configuratorProducts: [
    'Garaże blaszane',
    'Hale stalowe',
    'Wiaty garażowe',
    'Carporty',
    'Konstrukcje stalowe',
    'Ogrodzenia panelowe',
    'Wiaty śmietnikowe',
    'Magazyny blaszane',
  ],

  services: [
    {
      title: 'Konfigurator 3D na zamówienie',
      badge: 'Dowolny produkt',
      description:
        'Hale, wiaty garażowe, carporty, ogrodzenia — zbuduję konfigurator dla każdego producenta. Model 3D, interfejs i automatyczna oferta z rysunkami technicznymi.',
      highlights: [
        'Dowolna złożoność — od wyboru koloru po pełną konfigurację techniczną',
        'Automatyczna oferta z rysunkami technicznymi generowana w sekundy',
        'Działa na każdym urządzeniu, bez instalacji',
        'Wdrożenie na Twojej stronie lub budowa nowej',
      ],
      icon: 'cube' as const,
      cta: 'Powiedz mi co produkujesz',
    },
    {
      title: 'Strona internetowa',
      badge: null,
      description:
        'Strona dla producenta, który chce być widoczny w Google i budować zaufanie zanim klient zadzwoni.',
      highlights: [
        'Gotowa w 1–2 tygodnie',
        'Sam edytujesz treści bez programisty',
        'SEO, szybkość ładowania, dane strukturalne',
        'Formularz kontaktowy, galeria realizacji, mapa dojazdu',
      ],
      icon: 'globe' as const,
      cta: 'Chcę stronę dla mojej firmy',
    },
  ],

  configurator: {
    title: 'Gotowe konfiguratory — wypróbuj przed zakupem',
    subtitle: 'Gotowe rozwiązania',
    description:
      'Trzy sprawdzone produkty gotowe do osadzenia na Twojej stronie. Szybciej i taniej niż budowa od zera.',
    stats: [
      { value: 60, suffix: 's', label: 'Do pierwszej konfiguracji' },
      { value: 100, suffix: '%', label: 'Działa na każdym ekranie' },
      { value: 3, suffix: '', label: 'Gotowe dema do wdrożenia' },
    ],
    demos: [
      {
        title: 'Garaż blaszany',
        description:
          'Wymiary, kolor ścian, typ bramy i dachu. Model 3D na żywo, automatyczna oferta.',
        url: 'https://konfigli.pl/konfigurator-garazy-v2/',
        badge: 'Najnowszy',
      },
      {
        title: 'Garaż blaszany (wersja podstawowa)',
        description:
          'Uproszczona wersja — wybór wymiarów, koloru i dachu. Dobra dla mniejszego asortymentu.',
        url: 'https://konfigli.pl/konfigurator-garazy-v1/',
        badge: 'Wersja podstawowa',
      },
      {
        title: 'Wiata śmietnikowa',
        description:
          'Liczba boksów, wymiary, kolory profili, pokrycie dachowe, ścianki. Oferta z rysunkami technicznymi.',
        url: 'https://konfigli.pl/wiaty-smietnikowe/',
        badge: 'Nowość na rynku',
      },
    ],
  },

  painPoints: {
    title: 'Znasz to?',
    problems: [
      {
        icon: 'phone',
        title: '„Jaki macie kolor? A wymiary?"',
        description:
          'Handlowiec tłumaczy kolory z palety RAL przez telefon, zamiast domykać sprzedaż.',
      },
      {
        icon: 'pdf',
        title: 'Cennik PDF, którego nikt nie czyta',
        description:
          'Klient scrolluje 12 stron, gubi się w tabelkach — i trafia do konkurencji z prostszą ofertą.',
      },
      {
        icon: 'clock',
        title: 'Wieczorem ogląda, rano kupuje u innych',
        description:
          'O 21:00 nie może sprawdzić konfiguracji na Twojej stronie. Rano kupuje tam, gdzie jest konfigurator.',
      },
    ],
  },

  caseStudies: [
    {
      title: 'KaeMSTAL',
      subtitle: 'Producent garaży blaszanych — przejście 2D → 3D',
      description:
        'Klienci przestali dzwonić z pytaniami — zaczęli przysyłać gotową konfigurację. Oferta generuje się automatycznie z szablonu konfiguratora.',
      results: [
        'Konkretniejsze zapytania — klient przysyła pełną specyfikację',
        'Oferta w minuty zamiast 30 minut ręcznie',
        'Zapytania spływają wieczorami i w weekendy',
        'Mniej telefonów o kolory i wymiary',
      ],
      url: 'https://kaemstal-konfigurator.pl/',
      image: '/images/portfolio/kaem-stal.png',
      active: true,
    },
    {
      title: 'Holz-Stal',
      subtitle: 'Producent garaży drewnopodobnych — pełna konfiguracja',
      description:
        'Klient konfiguruje wszystko sam: wymiary, bramy, okna, orynnowanie, kolory obróbek. Oferta z rysunkami technicznymi gotowa bez udziału handlowca.',
      results: [
        'Klient konfiguruje od A do Z bez pomocy',
        'Rysunki techniczne generowane automatycznie',
        'Klient wie dokładnie co kupuje — mniej negocjacji',
      ],
      url: 'https://www.holz-stal.pl/konfigurator/',
      image: '/images/portfolio/holz-stal.png',
      active: true,
    },
    {
      title: 'Wiaty śmietnikowe',
      subtitle: 'Pierwszy taki konfigurator na rynku',
      description:
        'Klient sam konfiguruje liczbę boksów, wymiary i kolory — i pobiera ofertę z wizualizacjami. Nowy kanał sprzedaży przez Google.',
      results: [
        'Klient pobiera ofertę samodzielnie — zero angażowania handlowca',
        'Wizualizacja z każdej strony — decyzja bez wątpliwości',
        'Nowy kanał sprzedaży przez Google',
      ],
      url: 'https://konfigli.pl/wiaty-smietnikowe/',
      image: '/images/portfolio/wiaty-smietnikowe.png',
      active: true,
      badge: 'Nowość na rynku',
    },
    {
      title: 'Twoja firma?',
      subtitle: 'Następna realizacja',
      description:
        'Produkujesz garaże, hale, wiaty lub carporty? Zbuduję konfigurator dopasowany do Twojego asortymentu.',
      results: [
        'Konfigurator 3D Twojego produktu',
        'Automatyczne oferty z rysunkami technicznymi',
        'Wdrożenie na Twojej stronie',
        'Wsparcie po starcie',
      ],
      url: '#kontakt',
      image: '',
      active: true,
      isPlaceholder: true,
      badge: 'Wolne miejsce',
    },
  ],

  testimonials: [
    {
      quote:
        'Mieliśmy konfigurator 2D, ale klienci i tak dzwonili bo nie widzieli jak garaż wygląda. Po przejściu na 3D klient sam obraca model, zmienia kolory i od razu widzi efekt. Zapytania są konkretniejsze, a ofertę generujemy prosto z konfiguratora — szybciej i profesjonalniej niż kiedykolwiek.',
      author: 'KaeMSTAL',
      role: 'Producent garaży blaszanych',
    },
    {
      quote:
        'Klient sam składa praktycznie całą konfigurację — wymiary, bramy, okna, kolory obróbek, orynnowanie. Wcześniej ustalaliśmy to telefonicznie. Teraz dostajemy gotowe zapytanie z rysunkami technicznymi. Oferta robi się sama.',
      author: 'Holz-Stal',
      role: 'Producent garaży drewnopodobnych',
    },
  ],

  process: [
    {
      step: 1,
      title: 'Rozmowa o produkcie',
      description:
        'Opisujesz co sprzedajesz. W 30 minut wiesz co zbuduję, za ile i kiedy. Zero zobowiązań.',
    },
    {
      step: 2,
      title: 'Model 3D i projekt',
      description:
        'Buduję model i projektuję interfejs. Widzisz efekt zanim zacznę kodować. Zmiany bez dopłat.',
    },
    {
      step: 3,
      title: 'Budowa — raport co tydzień',
      description:
        'Nie czekasz miesiąc na efekt. Co tydzień dostajesz działającą wersję do sprawdzenia.',
    },
    {
      step: 4,
      title: 'Wdrożenie i wsparcie',
      description:
        'Osadzam konfigurator na Twojej stronie, testuję na każdym urządzeniu. Poprawki w gwarancji.',
    },
  ],

  faq: [
    {
      question: 'Ile kosztuje konfigurator 3D?',
      answer:
        'Wyceniam indywidualnie — cena zależy od liczby opcji i złożoności modelu. Opisz produkt, bezpłatną wycenę dostaniesz w 24h.',
    },
    {
      question: 'Jak długo trwa realizacja?',
      answer:
        'Konfigurator 3D: 4–8 tygodni. Strona internetowa: 1–3 tygodnie. Termin ustalamy przed startem.',
    },
    {
      question: 'Nie mam plików 3D — to problem?',
      answer:
        'Nie. Buduję modele od zera na podstawie Twoich rysunków, katalogów lub zdjęć. Wystarczy to, co masz.',
    },
    {
      question: 'Czy to działa na telefonach?',
      answer:
        'Tak, w przeglądarce — bez instalacji. Projektuję mobile-first, działa płynnie nawet na starszym smartfonie.',
    },
    {
      question: 'Mam już stronę — mogę dodać konfigurator?',
      answer:
        'Tak. Osadzam jako widget na dowolnej stronie — WordPress, własny CMS, landing page.',
    },
    {
      question: 'Czy konfigurator może od razu wyceniać?',
      answer:
        'Tak. Klient widzi szacunkową cenę w czasie rzeczywistym, a Ty dostajesz zapytanie z rozbiciem na elementy.',
    },
    {
      question: 'Co jeśli po starcie potrzebuję zmian?',
      answer:
        'Poprawki w gwarancji w cenie. Potem rozliczamy za konkretne zlecenia. Bez abonamentu.',
    },
    {
      question: 'Czy konfigurator generuje rysunki techniczne?',
      answer:
        'Tak — oferta z wizualizacjami i rysunkami generuje się automatycznie. Klient dostaje profesjonalny dokument, Ty oszczędzasz czas.',
    },
  ],

  whyMe: [
    {
      title: 'Wyceny przez całą dobę',
      description:
        'Klient konfiguruje o każdej porze. Ty rano odbierasz gotowe zlecenia — bez telefonu, bez tłumaczenia.',
      icon: 'target',
    },
    {
      title: 'Mniej błędów w zamówieniach',
      description:
        'Klient sam dobiera opcje, system pilnuje logiki. Koniec z pomyłkami w wymiarach i kolorach.',
      icon: 'trending',
    },
    {
      title: 'Szybsza decyzja zakupowa',
      description:
        'Klient widzący swój produkt w 3D decyduje szybciej. Mniej „zastanowię się", więcej zamkniętych sprzedaży.',
      icon: 'zap',
    },
    {
      title: 'Oferta bez ręcznej roboty',
      description:
        'Rysunki techniczne i wycena generują się automatycznie. Handlowiec zamyka sprzedaż, nie przepisuje tabelek.',
      icon: 'support',
    },
  ],

  // SEO keywords for meta and structured data
  seo: {
    keywords: [
      'konfigurator 3D',
      'konfigurator produktów',
      'konfigurator garaży',
      'konfigurator garaży blaszanych',
      'konfigurator garaży online',
      'konfigurator online',
      'konfigurator konstrukcji stalowych',
      'konfigurator hal stalowych',
      'konfigurator wiat',
      'konfigurator wiat garażowych',
      'konfigurator wiat śmietnikowych',
      'konfigurator carportów',
      'konfigurator ogrodzenia',
      'konfigurator ogrodzenia panelowego',
      'konfigurator magazynów blaszanych',
      'konfigurator produktów 3D na zamówienie',
      'wizualizacja 3D produktu',
      'wizualizacja garażu blaszanego',
      'zaprojektuj garaż online',
      'strona internetowa dla producenta',
      'strona dla producenta konstrukcji stalowych',
      'strona www producent garaży',
      'automatyzacja wycen producent',
      'konfigurator z cenami',
    ],
  },
} as const;
