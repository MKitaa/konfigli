export const site = {
  name: 'Konfigli',
  tagline: 'Konfiguratory 3D na zamówienie dla producentów. Garaże, wiaty, hale i więcej',
  description:
    'Buduję konfiguratory 3D dla producentów. Gotowe rozwiązania: konfigurator garaży blaszanych od 499 PLN/msc, wiat śmietnikowych od 399 PLN/msc. Potrzebujesz czegoś innego? Zbuduję pod Twój produkt.',
  url: 'https://konfigli.pl',
  author: 'Mateusz Kita',
  locale: 'pl_PL',

  business: {
    fullName: 'Mateusz Kita',
    address: 'Makowica 57, 34-600 Limanowa',
    nip: '7372258508',
    regon: '544726632',
  },

  contact: {
    email: 'biuro@konfigli.pl',
    phone: '+48 512 020 894',
    apiUrl: 'https://konfigli.pl',
  },

  nav: [
    { label: 'Konfigurator garaży', href: '/konfigurator-garazy/' },
    { label: 'Konfigurator wiat', href: '/konfigurator-wiat-smietnikowych/' },
    { label: 'Na zamówienie', href: '/na-zamowienie/' },
    { label: 'Realizacje', href: '/#realizacje' },
    { label: 'Kontakt', href: '/#kontakt' },
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

  products: [
    {
      title: 'Konfigurator garaży blaszanych',
      description: 'Klient dobiera wymiary, kolor, typ dachu i bramy, widzi garaż w 3D i wysyła zapytanie.',
      price: 'od 499',
      unit: 'PLN/msc',
      highlights: [
        '6 typów dachów + blachodachówka i trapez',
        'Kolory RAL + drewnopodobne',
        'Bramy uchylne, dwuskrzydłowe, segmentowe',
        'Formularz ze zrzutami 3D i specyfikacją',
      ],
      href: '/konfigurator-garazy/',
      badge: '3 pakiety',
    },
    {
      title: 'Konfigurator wiat śmietnikowych',
      description: 'Klient dobiera boksy, wymiary i kolor wiaty, widzi efekt w 3D i wysyła zapytanie.',
      price: '399',
      unit: 'PLN/msc',
      highlights: [
        'Ścianka działowa, drzwi pojedyncze i dwuskrzydłowe',
        'Kolory RAL na konstrukcję i wypełnienie',
        'Panel, drewno lub blacha',
        'Formularz ze zrzutami 3D',
      ],
      href: '/konfigurator-wiat-smietnikowych/',
      badge: null,
    },
  ],

  customWork: {
    title: 'Konfigurator 3D na zamówienie',
    subtitle: 'Produkujesz coś innego?',
    description: 'Hale stalowe, carporty, ogrodzenia, pergole, magazyny blaszane. Zbuduję konfigurator 3D pod Twój produkt. Model 3D, automatyczna wycena i rysunki techniczne.',
    products: [
      'Hale stalowe',
      'Carporty i wiaty garażowe',
      'Ogrodzenia panelowe',
      'Pergole i zadaszenia',
      'Magazyny blaszane',
      'Kontenery',
      'Domki ogrodowe',
      'Kojce dla zwierząt',
    ],
    process: [
      { title: 'Rozmowa o produkcie', description: 'Opisujesz produkt, warianty i opcje. Ustalam zakres projektu.' },
      { title: 'Model 3D i projekt', description: 'Buduję model 3D i interfejs konfiguratora. Raportuję postępy co tydzień.' },
      { title: 'Testy i poprawki', description: 'Testujesz konfigurator, zgłaszasz uwagi. Poprawiam do skutku.' },
      { title: 'Wdrożenie i wsparcie', description: 'Osadzam konfigurator na Twojej stronie. Pomagam po wdrożeniu.' },
    ],
    faq: [
      { question: 'Ile kosztuje konfigurator na zamówienie?', answer: 'Wyceniam indywidualnie. Opisz produkt, a wycenę dostaniesz w 24h za darmo.' },
      { question: 'Jak długo trwa budowa?', answer: '4–8 tygodni, zależnie od złożoności modelu 3D i liczby opcji.' },
      { question: 'Nie mam plików 3D, to problem?', answer: 'Nie. Buduję modele od zera na podstawie rysunków, katalogów lub zdjęć.' },
      { question: 'Czy mogę rozbudować konfigurator później?', answer: 'Tak, nowe warianty, kolory, moduł cenowy. Rozliczamy za konkretne zlecenia.' },
      { question: 'Dla jakich produktów można zbudować konfigurator?', answer: 'Każda konstrukcja z wariantami: hale, carporty, ogrodzenia, pergole, kontenery. Jeśli produkt ma wymiary i opcje, konfigurator ma sens.' },
    ],
  },

  configurator: {
    title: 'Gotowe konfiguratory 3D online. Wypróbuj przed zakupem',
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
        pricingUrl: '/konfigurator-garazy/#cennik',
      },
      {
        title: 'Garaż blaszany (wersja podstawowa)',
        description:
          'Uproszczona wersja: wybór wymiarów, koloru i dachu. Dobra dla mniejszego asortymentu.',
        url: 'https://konfigli.pl/konfigurator-garazy-v1/',
        badge: 'Wersja podstawowa',
        pricingUrl: '/konfigurator-garazy/#cennik',
      },
      {
        title: 'Wiata śmietnikowa',
        description:
          'Liczba boksów, wymiary, kolory profili, pokrycie dachowe, ścianki. Oferta z rysunkami technicznymi.',
        url: 'https://konfigli.pl/wiaty-smietnikowe/',
        badge: 'Nowość na rynku',
        pricingUrl: '/konfigurator-wiat-smietnikowych/#cennik',
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
          'Klient dzwoni, opisuje garaż słowami. Ty próbujesz to zrozumieć i wycenić. 30 minut na jedno zapytanie.',
      },
      {
        icon: 'pdf',
        title: 'Cennik PDF, którego nikt nie czyta',
        description:
          '12 stron tabelek. Klient się gubi i idzie do konkurencji z konfiguratorem na stronie.',
      },
      {
        icon: 'clock',
        title: 'Wieczorem ogląda, rano kupuje u innych',
        description:
          'Klient szuka wieczorem. Twoja strona ma tylko telefon, więc zapytanie trafia do konkurencji.',
      },
    ],
  },

  caseStudies: [
    {
      title: 'KaeMSTAL',
      subtitle: 'Producent garaży blaszanych, przejście 2D → 3D',
      description:
        'Klienci przestali dzwonić z pytaniami i zaczęli przysyłać gotową konfigurację. Oferta generuje się automatycznie z szablonu konfiguratora.',
      results: [
        'Konkretniejsze zapytania, klient przysyła pełną specyfikację',
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
      subtitle: 'Producent garaży drewnopodobnych, pełna konfiguracja',
      description:
        'Klient konfiguruje wszystko sam: wymiary, bramy, okna, orynnowanie, kolory obróbek. Oferta z rysunkami technicznymi gotowa bez udziału handlowca.',
      results: [
        'Klient konfiguruje od A do Z bez pomocy',
        'Rysunki techniczne generowane automatycznie',
        'Klient wie dokładnie co kupuje, mniej negocjacji',
      ],
      url: 'https://www.holz-stal.pl/konfigurator/',
      image: '/images/portfolio/holz-stal.png',
      active: true,
    },
    {
      title: 'Wiaty śmietnikowe',
      subtitle: 'Pierwszy taki konfigurator na rynku',
      description:
        'Klient sam konfiguruje liczbę boksów, wymiary i kolory, a potem pobiera ofertę z wizualizacjami. Nowy kanał sprzedaży przez Google.',
      results: [
        'Klient pobiera ofertę samodzielnie, bez angażowania handlowca',
        'Wizualizacja z każdej strony, decyzja bez wątpliwości',
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
        'Mieliśmy konfigurator 2D, ale klienci i tak dzwonili bo nie widzieli jak garaż wygląda. Po przejściu na 3D klient sam obraca model, zmienia kolory i od razu widzi efekt. Zapytania są konkretniejsze, a ofertę generujemy prosto z konfiguratora. Szybciej i profesjonalniej niż kiedykolwiek.',
      author: 'KaeMSTAL',
      role: 'Producent garaży blaszanych',
    },
    {
      quote:
        'Klient sam składa praktycznie całą konfigurację: wymiary, bramy, okna, kolory obróbek, orynnowanie. Wcześniej ustalaliśmy to telefonicznie. Teraz dostajemy gotowe zapytanie z rysunkami technicznymi. Oferta robi się sama.',
      author: 'Holz-Stal',
      role: 'Producent garaży drewnopodobnych',
    },
  ],

  process: [
    { title: 'Konsultacja', description: 'Ustalamy asortyment, kolory i zakresy wymiarów.' },
    { title: 'Personalizacja', description: 'Konfiguruję logo, kolory i formularz pod Twoją firmę.' },
    { title: 'Testowanie', description: 'Dostajesz link do testowej wersji, sprawdzasz i zgłaszasz uwagi.' },
    { title: 'Wdrożenie', description: 'Osadzam konfigurator na Twojej stronie jako widget.' },
    { title: 'Wsparcie', description: 'Aktualizacje i pomoc techniczna przez cały czas abonamentu.' },
  ],

  faq: [
    {
      question: 'Ile kosztuje konfigurator?',
      answer:
        'Konfigurator garaży od 499 PLN/msc, wiat od 399 PLN/msc. Abonament bez opłaty wdrożeniowej. Hosting, SSL i aktualizacje w cenie.',
    },
    {
      question: 'Jak szybko dostanę konfigurator na swoją stronę?',
      answer:
        'Wdrożenie trwa 1–5 dni roboczych. Konfiguruję logo, kolory i formularz, a potem osadzam na Twojej stronie.',
    },
    {
      question: 'Czy to działa na telefonach?',
      answer:
        'Tak, w przeglądarce. Bez instalacji, działa na każdym urządzeniu.',
    },
    {
      question: 'Czy mogę osadzić konfigurator na istniejącej stronie?',
      answer:
        'Tak, osadzam jako widget na dowolnej stronie. WordPress, własny CMS, landing page.',
    },
    {
      question: 'Czy konfigurator automatycznie wycenia produkty?',
      answer:
        'Tak. Klient widzi szacunkową cenę w czasie rzeczywistym na podstawie wybranej konfiguracji.',
    },
    {
      question: 'Czy mogę zmienić pakiet w trakcie abonamentu?',
      answer:
        'Tak, możesz przejść na wyższy pakiet w dowolnym momencie.',
    },
    {
      question: 'Co jeśli zrezygnuję z abonamentu?',
      answer:
        'Konfigurator zostaje wyłączony z końcem opłaconego okresu. Dane przechowuję 90 dni.',
    },
    {
      question: 'Czy oferujecie konfigurator 2D?',
      answer:
        'Konfigurator 3D zawiera widok 2D z wymiarami. Nie budujemy osobnych konfiguratorów 2D.',
    },
  ],

  whyMe: [
    {
      title: 'Wyceny przez całą dobę',
      description:
        'Klient konfiguruje o każdej porze, a Ty rano odbierasz gotowe zlecenia.',
      icon: 'target',
    },
    {
      title: 'Mniej błędów w zamówieniach',
      description:
        'System pilnuje logiki, koniec z pomyłkami w wymiarach i kolorach.',
      icon: 'trending',
    },
    {
      title: 'Szybsza decyzja zakupowa',
      description:
        'Klient widzi produkt w 3D i decyduje szybciej.',
      icon: 'zap',
    },
    {
      title: 'Automatyczne rysunki techniczne i wycena',
      description:
        'Rysunki i wycena generują się z konfiguratora. Handlowiec zamyka sprzedaż, nie przepisuje tabelek.',
      icon: 'support',
    },
  ],

  // SEO keywords for meta and structured data
  seo: {
    keywords: [
      // Core generic
      'konfigurator 3D',
      'konfigurator produktów 3D',
      'konfigurator produktów online',
      'konfigurator 3D online',
      'konfigurator online',
      'konfigurator 2D',
      // B2B / dla producenta
      'konfigurator 3D dla producenta',
      'konfigurator 3D na zamówienie',
      'konfigurator na stronę producenta',
      'konfigurator na stronę www',
      'konfigurator na stronę internetową',
      'dedykowany konfigurator 3D',
      'dedykowany konfigurator produktu',
      'konfigurator produktu na zamówienie',
      'konfigurator B2B',
      'konfigurator z automatyczną wyceną',
      'konfigurator z rysunkami technicznymi',
      'konfigurator 3D SaaS',
      'konfigurator 3D abonament',
      // Garaże
      'konfigurator garaży blaszanych',
      'konfigurator garaży blaszanych 3D',
      'konfigurator garaży blaszanych online',
      'konfigurator garaży blaszanych z ceną',
      'konfigurator garaży 3D',
      'konfigurator garaży online',
      'kalkulator garaży blaszanych',
      'zaprojektuj garaż blaszany online',
      'wizualizacja 3D garażu blaszanego',
      'konfigurator garaży drewnopodobnych',
      'garaż blaszany konfigurator',
      'skonfiguruj garaż blaszany',
      'cennik garaży blaszanych',
      'konfigurator garaży abonament',
      // Wiaty
      'konfigurator wiat śmietnikowych',
      'konfigurator wiat śmietnikowych 3D',
      'konfigurator wiat śmietnikowych online',
      'wiata śmietnikowa konfigurator',
      'wiata śmietnikowa na wymiar',
      'wiata śmietnikowa cena',
      'wiata śmietnikowa producent',
      'konfigurator wiat online',
      // Hale / konstrukcje
      'konfigurator hal stalowych',
      'konfigurator hali stalowej',
      'konfigurator konstrukcji stalowych',
      // Ogrodzenia / carporty
      'konfigurator ogrodzeń panelowych',
      'konfigurator carportów',
      'konfigurator wiat garażowych',
      // Wizualizacja
      'wizualizacja 3D produktu',
      'wizualizacja 3D produktów online',
      'wizualizacja produktu na stronie',
      // Cenowe
      'ile kosztuje konfigurator 3D',
      'konfigurator 3D cena',
      'konfigurator 3D cennik',
      // Automatyzacja
      'automatyzacja ofertowania',
      'automatyzacja wycen producent',
      'automatyczne rysunki techniczne',
      'narzędzie sprzedażowe dla producenta',
      // Strona producenta
      'strona internetowa dla producenta',
      'strona www producent garaży',
    ],
  },
} as const;
