export const site = {
  name: 'Konfigli',
  tagline: 'Konfiguratory 3D dla producentów garaży, hal i konstrukcji stalowych',
  description:
    'Konfiguratory produktów z podglądem 3D i automatycznymi rysunkami technicznymi. Twój klient sam dobiera wariant, widzi efekt na żywo i wysyła zapytanie z gotową specyfikacją. Bezpłatna wycena w 24h.',
  url: 'https://konfigli.pl',
  author: 'Mateusz Kita',
  locale: 'pl_PL',

  contact: {
    email: 'biuro@konfigli.pl',
    phone: '+48 512 020 894',
    apiUrl: 'https://konfigli.pl',
  },

  nav: [
    { label: 'Konfigurator', href: '#konfigurator' },
    { label: 'Usługi', href: '#uslugi' },
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
      title: 'Konfigurator 3D na Twoją stronę',
      badge: 'Główna specjalizacja',
      description:
        'Klient wchodzi na stronę, sam dobiera wymiary, kolor i wariant — widzi gotowy produkt w 3D i wysyła zapytanie z kompletną specyfikacją. Ty dostajesz gotowe zapytanie do wyceny, nie kolejny telefon z pytaniem o kolory.',
      highlights: [
        'Mniej telefonów — klient sam sprawdza warianty na stronie',
        'Gotowa specyfikacja z rysunkami technicznymi na maila',
        'Działa w przeglądarce na każdym urządzeniu, bez instalacji',
        'SEO + dane strukturalne — widoczny w Google i czytany przez AI',
      ],
      icon: 'cube' as const,
      cta: 'Chcę konfigurator dla mojego produktu',
    },
    {
      title: 'Strona, która buduje zaufanie',
      badge: null,
      description:
        'Twoi klienci sprawdzają firmę w Google zanim zadzwonią. Strona, która wygląda profesjonalnie, ładuje się szybko i pokazuje Twoje realizacje — to Twoja wizytówka, która pracuje 24/7.',
      highlights: [
        'Gotowa w 1–2 tygodnie, bez ciągania miesiącami',
        'Sam edytujesz teksty i zdjęcia, bez programisty',
        'SEO, mapa strony, dane strukturalne — Google i AI Cię znajdą',
        'Formularz kontaktowy, galeria realizacji, mapa dojazdu',
      ],
      icon: 'globe' as const,
      cta: 'Chcę stronę dla mojej firmy',
    },
  ],

  configurator: {
    title: 'Sprawdź sam, zanim zapytasz o wycenę',
    subtitle: 'Demo na żywo',
    description: 'To nie makieta — to działający konfigurator. Kliknij, obróć model, zmień kolor. Dokładnie takie narzędzie stawiam na stronach producentów.',
    stats: [
      { value: 60, suffix: 's', label: 'Do pierwszej konfiguracji' },
      { value: 24, suffix: '/7', label: 'Dostępność oferty' },
      { value: 100, suffix: '%', label: 'Działa na każdym ekranie' },
      { value: 15, suffix: '+', label: 'Kolorów do wyboru' },
    ],
    demos: [
      {
        title: 'Garaż blaszany v2',
        description: 'Rozbudowany konfigurator z wyborem wymiarów, koloru ścian, bramy i typu dachu. Najnowsza wersja z ulepszonym interfejsem.',
        url: 'https://konfigli.pl/konfigurator-garazy-v2/',
        badge: 'Najnowszy',
      },
      {
        title: 'Garaż blaszany v1',
        description: 'Pierwsza wersja konfiguratora garaży — wybór wymiarów, kolorów i typu dachu z podglądem 3D w przeglądarce.',
        url: 'https://konfigli.pl/konfigurator-garazy-v1/',
        badge: 'Poprzednia wersja',
      },
      {
        title: 'Konfigurator wiat śmietnikowych',
        description: 'Pierwszy na rynku — wymiary, kolory profili i narożników, pokrycie dachowe, ścianki działowe. Gotowa oferta z wizualizacjami i rysunkami technicznymi.',
        url: 'https://konfigli.pl/wiaty-smietnikowe/',
        badge: 'Nowość na rynku',
      },
    ],
  },

  painPoints: {
    title: 'Znasz to z codziennej pracy?',
    problems: [
      {
        icon: 'phone',
        title: '„Jaki macie kolor? A wymiary?"',
        description: 'Te same pytania, dziesiątki razy dziennie. Handlowiec zamiast domykać sprzedaż — tłumaczy kolory z palety RAL przez telefon.',
      },
      {
        icon: 'pdf',
        title: 'Cennik PDF, którego nikt nie czyta',
        description: 'Wysyłasz 12-stronicowy katalog. Klient otwiera, scrolluje, gubi się w tabelkach — i pisze do konkurencji, która ma prostszą ofertę.',
      },
      {
        icon: 'clock',
        title: 'Wieczorem ogląda, rano kupuje u innych',
        description: 'O 21:00 klient szuka garażu. Nie może sprawdzić konfiguracji na Twojej stronie. Rano trafia na producenta, który ma konfigurator online.',
      },
    ],
    solutions: [
      {
        icon: 'configurator',
        title: 'Klient widzi produkt zanim zadzwoni',
        description: 'Obraca model 3D, zmienia kolor, dobiera bramę. Wie czego chce — nie musisz tłumaczyć od zera.',
      },
      {
        icon: 'form',
        title: 'Zapytanie z gotową specyfikacją',
        description: 'Zamiast „poproszę wycenę" dostajesz: wymiary 6x5x2.5m, dach dwuspadowy, blacha antracyt, brama segmentowa. Wyceniasz w minuty.',
      },
      {
        icon: 'chart',
        title: 'Zapytania spływają nawet o 3 w nocy',
        description: 'Klient konfiguruje po pracy, w weekend, w święta. Ty rano otwierasz pocztę i masz gotowe zapytania do obsłużenia.',
      },
    ],
  },

  caseStudies: [
    {
      title: 'KaeMSTAL',
      subtitle: 'Producent garaży blaszanych — przejście z 2D na 3D',
      description:
        'Przejście z konfiguratora 2D na 3D. Wcześniej klient wybierał opcje z list, ale nie widział efektu. Teraz obraca model, zmienia kolory i wymiary na żywo — i wysyła zapytanie z gotową specyfikacją. Oferta generuje się automatycznie z szablonu konfiguratora.',
      results: [
        'Wzrost sprzedaży — klient widzi produkt w 3D i szybciej podejmuje decyzję',
        'Profesjonalna oferta generowana automatycznie z szablonu konfiguratora',
        'Mniej telefonów — klient sam sprawdza kolory, wymiary i warianty',
        'Zapytania 24/7 — oferty spływają wieczorami, w weekendy i w święta',
      ],
      url: 'https://kaemstal-konfigurator.pl/',
      image: '/images/portfolio/kaem-stal.png',
      active: true,
    },
    {
      title: 'Holz-Stal',
      subtitle: 'Producent garaży drewnopodobnych — najbardziej zaawansowane wdrożenie',
      description:
        'Najbardziej rozbudowane wdrożenie w portfolio. Klient sam konfiguruje wszystko: wymiary, wysunięcie dachu, 3 typy bram (też z tyłu ściany), wnęki, okna, orynnowanie, zabudowę ażurem lub blachą, kolory obróbek i narożników. Na końcu pobiera ofertę z rysunkami technicznymi.',
      results: [
        'Klient konfiguruje garaż od A do Z — sam, bez pomocy handlowca',
        'Rysunki techniczne i oferta generowane automatycznie — gotowe w minuty',
        'Klient wybiera wariant świadomie — widzi dokładnie co dostanie',
      ],
      url: 'https://www.holz-stal.pl/konfigurator/',
      image: '/images/portfolio/holz-stal.png',
      active: true,
    },
    {
      title: 'Wiaty śmietnikowe',
      subtitle: 'Pierwsza taka realizacja na rynku',
      description:
        'Pierwsza taka realizacja na rynku. Klient sam konfiguruje liczbę boksów, wymiary, kolory profili i narożników, pokrycie dachowe i ścianki działowe. Pobiera ofertę z wizualizacjami i rysunkami technicznymi — gotową do wyceny lub prezentacji.',
      results: [
        'Klient konfiguruje i pobiera ofertę sam — zero angażowania handlowca',
        'Wizualizacja z każdej strony — klient widzi co kupuje, decyduje szybciej',
        'Rysunki techniczne w ofercie — gotowy dokument bez dodatkowej pracy',
        'Nowy kanał sprzedaży — klienci trafiają na konfigurator przez Google',
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
        'Produkujesz garaże, hale, wiaty, carporty lub ogrodzenia? Zbuduję konfigurator dopasowany do Twojego asortymentu — od modelu 3D po automatyczną ofertę z rysunkami technicznymi.',
      results: [
        'Konfigurator 3D odwzorujący Twoje produkty',
        'Osadzenie na Twojej stronie lub budowa nowej',
        'Automatyczne oferty z rysunkami technicznymi',
        'Opieka i rozwój po wdrożeniu',
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
      quote: 'Mieliśmy konfigurator 2D, ale klienci i tak dzwonili bo nie widzieli jak garaż wygląda. Po przejściu na 3D klient sam obraca model, zmienia kolory i od razu widzi efekt. Zapytania są konkretniejsze, a ofertę generujemy prosto z konfiguratora — szybciej i profesjonalniej niż kiedykolwiek.',
      author: 'KaeMSTAL',
      role: 'Producent garaży blaszanych',
    },
    {
      quote: 'Klient sam składa praktycznie całą konfigurację — wymiary, bramy, okna, kolory obróbek, orynnowanie. Wcześniej ustalaliśmy to telefonicznie. Teraz dostajemy gotowe zapytanie z rysunkami technicznymi. Oferta robi się sama.',
      author: 'Holz-Stal',
      role: 'Producent garaży drewnopodobnych',
    },
  ],

  process: [
    {
      step: 1,
      title: 'Rozmowa o Twoim produkcie',
      description: 'Powiedz mi co sprzedajesz i jak teraz wygląda obsługa klienta. W 30 minut powiem Ci co mogę zbudować, ile to kosztuje i kiedy będzie gotowe. Zero zobowiązań.',
    },
    {
      step: 2,
      title: 'Projekt i model 3D',
      description: 'Buduję model 3D Twojego produktu i projektuję interfejs. Widzisz efekt zanim zacznę kodować — jeśli coś nie pasuje, zmieniamy bez dodatkowych kosztów.',
    },
    {
      step: 3,
      title: 'Budowa — widzisz postępy co tydzień',
      description: 'Nie czekasz miesiąc na efekt. Co tydzień dostajesz link do działającej wersji. Masz uwagę? Reaguję od razu, bez czekania i kolejek.',
    },
    {
      step: 4,
      title: 'Start i opieka',
      description: 'Osadzam konfigurator na Twojej stronie, testuję na każdym urządzeniu. Po starcie nie znikam — poprawki w gwarancji, wsparcie gdy coś trzeba zmienić.',
    },
  ],

  faq: [
    {
      question: 'Ile kosztuje konfigurator 3D?',
      answer: 'Wyceniam indywidualnie — cena zależy od liczby opcji i złożoności modelu. Napisz z opisem produktu, bezpłatną wycenę dostaniesz w 24h.',
    },
    {
      question: 'Jak długo trwa realizacja?',
      answer: 'Konfigurator 3D: 4–8 tygodni. Strona internetowa: 1–3 tygodnie. Termin ustalamy przed startem i go dotrzymuję.',
    },
    {
      question: 'Nie mam plików 3D — to problem?',
      answer: 'Nie. Buduję modele od zera na bazie Twoich rysunków, katalogów lub nawet zdjęć z telefonu. Wystarczy to, co masz pod ręką.',
    },
    {
      question: 'Czy to działa na telefonach?',
      answer: 'Tak, w przeglądarce — bez instalacji. Projektuję mobile-first, więc konfigurator działa płynnie nawet na starszym smartfonie.',
    },
    {
      question: 'Mam już stronę — mogę dodać konfigurator?',
      answer: 'Tak. Osadzam go jako widget na dowolnej stronie — WordPress, własny CMS, landing page. Nie trzeba budować niczego od zera.',
    },
    {
      question: 'Czy konfigurator może od razu wyceniać?',
      answer: 'Tak. Wbudowuję logikę cenową — klient widzi szacunkową cenę w czasie rzeczywistym, a Ty dostajesz zapytanie z rozbiciem na elementy.',
    },
    {
      question: 'Co jeśli po starcie potrzebuję zmian?',
      answer: 'Poprawki w okresie gwarancyjnym w cenie. Potem rozliczamy się za konkretne zlecenia. Bez abonamentu, bez wyłączności.',
    },
    {
      question: 'Czy konfigurator generuje rysunki techniczne?',
      answer: 'Tak — oferta z wizualizacjami z każdej strony i rysunkami technicznymi generuje się automatycznie. Twój klient dostaje profesjonalny dokument, a Ty oszczędzasz czas na przygotowanie.',
    },
  ],

  whyMe: [
    {
      title: 'Znam Twoją branżę',
      description: 'Robię konfiguratory wyłącznie dla producentów konstrukcji stalowych. Wiem czym różni się brama uchylna od segmentowej i dlaczego klient pyta o kolor obróbek.',
      icon: 'target',
    },
    {
      title: 'Buduję narzędzia, nie gadżety',
      description: 'Konfigurator ma generować zapytania i odciążać handlowca. Mierzę skuteczność: liczbę ofert, czas wyceny, jakość zapytań.',
      icon: 'trending',
    },
    {
      title: 'Piszesz — odpowiadam',
      description: 'Zero pośredników, zero kolejek. Jedna osoba od początku do końca. Decyzje na bieżąco, nie za tydzień.',
      icon: 'zap',
    },
    {
      title: 'Gotowe na Google i AI',
      description: 'Każdy projekt ma SEO, dane strukturalne i pliki dla robotów. Twoja oferta jest widoczna w wyszukiwarce i zrozumiała dla asystentów AI — tam, gdzie klienci dziś szukają.',
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
