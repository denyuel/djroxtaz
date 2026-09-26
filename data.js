/**
 * DJ ROXTAZ - Weboldal Tartalmi Adatok (Object Struktúra)
 * 
 * Nyári Zsolt - Rendezvény és Esküvői DJ
 * Facebook: https://www.facebook.com/ny.zsolt
 * Instagram: @djroxtaz
 */

const SITE_DATA = {
  // Alapvető profil és elérhetőségek
  profile: {
    name: "Nyári Zsolt",
    stageName: "Nyári Zsolt",
    brandTitle: "Nyári Zsolt - Esküvői és Rendezvény Dj",
    title: "Esküvői és Rendezvény DJ",
    domain: "www.nyarizsolti.hu",
    domainUrl: "https://www.nyarizsolti.hu",
    phone: "+36 30 123 4567",
    phoneRaw: "+36301234567",
    email: "info@nyarizsolti.hu",
    whatsappUrl: "https://wa.me/36301234567",
    location: "Budapest & Országosan",
    workingHours: "Hétfőtől vasárnapig hívható"
  },

  // Közösségi média profilok (Facebook & Instagram a megadott profil alapján)
  social: {
    facebook: "https://www.facebook.com/ny.zsolt",
    facebookName: "facebook.com/ny.zsolt",
    instagram: "https://www.instagram.com/djroxtaz",
    instagramHandle: "@djroxtaz"
  },

  // Navigációs menüpontok
  nav: [
    { label: "Rólam", href: "#rolam" },
    { label: "Szolgáltatások", href: "#szolgaltatasok" },
    { label: "Galéria", href: "#galeria" },
    { label: "Hogyan dolgozom?", href: "#menetrend" },
    { label: "Zenei stílusok", href: "#zene" },
    { label: "Vélemények", href: "#velemenyek" },
    { label: "Kapcsolat", href: "#kapcsolat" }
  ],

  // Hero (Nyitó) szekció
  hero: {
    seasonBadge: "2025 / 2026 Esküvői & Rendezvény Szezon",
    tagline: "Nyári Zsolt • Esküvői & Rendezvény DJ",
    title: "A zene, ami felejthetetlenné teszi a",
    titleHighlight: "Nagy Napot.",
    description: "Több mint egy évtizedes tapasztalat, prémium RCF hangtechnika, intelligens látványfények és a tánctér pulzusára épülő zenei élmény a megható szertartástól a hajnalig tartó fergeteges buliig.",
    primaryCta: {
      text: "Hívj és beszéljük meg!",
      action: "tel:+36301234567"
    },
    secondaryCta: {
      text: "WhatsApp üzenet",
      action: "https://wa.me/36301234567"
    },
    stats: [
      { value: "12+", label: "Év tapasztalat" },
      { value: "450+", label: "Sikeres rendezvény" },
      { value: "100%", label: "Elégedettségi garancia" }
    ],
    features: [
      "Pontos érkezés & hivatalos szerződés",
      "Vezeték nélküli mikrofonok szertartáshoz és beszédekhez",
      "Kívánság- és tiltólisták 100%-os tiszteletben tartása",
      "Elegáns, rendezett pult és tiszta kábelezés"
    ],
    bgImage: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1920&q=80"
  },

  // Rólam szekció
  about: {
    badge: "Rólam & Hitvallásom",
    title: "A tánctér ritmusát olvasom,",
    titleHighlight: "nem csak zenét játszom.",
    paragraphs: [
      "Több mint egy évtizede vagyok jelen az esküvők és rendezvények világában. Meggyőződésem, hogy a jó rendezvény DJ nem a saját ízlését erőlteti a vendégekre, hanem folyamatosan érzi a tánctér pulzusát.",
      "Tudom, mikor kell finom háttérzenével kísérni a vacsorát, mikor kell a megható pillanatokhoz szólnia a dallamnak, és mikor jön el a pont, amikor meg kell tölteni a táncparkettet a hajnali zárásig."
    ],
    ctaText: "Hívj és egyeztessünk",
    pillars: [
      {
        icon: "🤝",
        title: "Megbízhatóság",
        description: "Pontos érkezés órákkal a kezdés előtt, hivatalos szerződés."
      },
      {
        icon: "🎵",
        title: "Rugalmasság",
        description: "Generációk közös kedvencei a 70-es évektől a mai slágerekig."
      },
      {
        icon: "🔊",
        title: "Csúcstechnika",
        description: "RCF hangzás és intelligens robotlámpák, tiszta kábelezés."
      },
      {
        icon: "💬",
        title: "Közvetlenség",
        description: "Közös zenei tervezés az ifjú párral vagy megrendelővel."
      }
    ]
  },

  // Szolgáltatások (Árak nélkül, telefonos egyeztetés fókusszal)
  services: {
    badge: "Szolgáltatások",
    title: "Miben segíthetek a rendezvényeden?",
    subtitle: "Minden esemény egyedi – az igényekhez és a helyszín adottságaihoz igazítjuk a hang- és fénytechnikát.",
    items: [
      {
        id: "wedding",
        icon: "💍",
        title: "Esküvői DJ",
        description: "Szertartás hangosítás mikrofonnal, elegáns vacsorazene, nyitótánc és hajnalig tartó fergeteges buli a pár és a vendégek zenei kívánságai szerint.",
        features: [
          "Külön kültéri/beltéri ceremónia hangosítás",
          "Kívánság- és tiltólisták teljes körű kezelése",
          "Tökéletes összhang a ceremóniamesterrel"
        ],
        btnText: "Beszéljünk az esküvőről"
      },
      {
        id: "corporate",
        icon: "🏢",
        title: "Céges Rendezvények",
        description: "Évzárók, gálák, csapatépítők és karácsonyi partik. Kulturált, professzionális fellépés és a hivatalos protokoll után pörgős esti tánc.",
        features: [
          "Vezeték nélküli mikrofonpark elnöki beszédekhez",
          "Rejtett kábelezés, elegáns diszkrét technika",
          "Hivatalos számlaképes elszámolás"
        ],
        btnText: "Beszéljünk a céges partiról"
      },
      {
        id: "party-lighting",
        icon: "✨",
        title: "Születésnap & Fénytechnika",
        description: "Kerek évfordulók (18., 30., 40., 50.), jubileumok és látványelemek: nehézfüst a nyitótánchoz („tánc a felhők felett”) és fali súrolófények.",
        features: [
          "Nehézfüst (nem kapcsolja be a füstérzékelőt)",
          "Intelligens robotlámpák a tánctérre",
          "Fali akkumulátoros LED hangulatfények"
        ],
        btnText: "Beszéljünk a privát partiról"
      }
    ]
  },

  // Képgaléria / Hangulatképek (Facebook & Instagram ihlette pillanatok)
  gallery: {
    badge: "Pillanatképek & Hangulat",
    title: "Események a kamerák mögül",
    subtitle: "Nézz be a kulisszák mögé – valódi pillanatok, fények és bulihangulat az eseményekről.",
    socialCtaText: "Kövess be és nézd meg a legfrissebb videókat az Instán és Facebookon!",
    items: [
      {
        title: "Tánc a felhők felett",
        category: "Nyitótánc & Nehézfüst",
        imageUrl: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80"
      },
      {
        title: "Éjszakai tombolás",
        category: "Táncparkett hangulat",
        imageUrl: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&q=80"
      },
      {
        title: "A DJ Pult mögött",
        category: "Élő DJ Szett & Fények",
        imageUrl: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=800&q=80"
      },
      {
        title: "Elegáns teremvilágítás",
        category: "Fali LED súrolófények",
        imageUrl: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=800&q=80"
      }
    ]
  },

  // Menetrend / Hogyan dolgozunk együtt?
  workflow: {
    badge: "Menetrend",
    title: "Hogyan dolgozunk együtt?",
    subtitle: "3 egyszerű lépésben a felejthetetlen estéig – egyszerűen, kötetlenül, telefonon.",
    steps: [
      {
        num: "01.",
        title: "Telefonos beszélgetés",
        description: "Felhívsz, átbeszéljük a dátumot, a helyszínt, a várható létszámot és a zenei elképzeléseiteket."
      },
      {
        num: "02.",
        title: "Személyes egyeztetés",
        description: "Személyesen vagy online átnézzük a menetrendet: a szertartás dalait, a nyitótáncot, a kívánságlistát és a tiltólistát."
      },
      {
        num: "03.",
        title: "A Nagy Nap",
        description: "Órákkal a vendégek érkezése előtt beépítem a technikát, és gondoskodom a fergeteges hangulatról a legutolsó táncig."
      }
    ],
    ctaButton: "Kezdjük az 1. lépéssel: +36 30 123 4567"
  },

  // Zenei repertoár
  music: {
    badge: "Zenei Világ",
    title: "Minden stílusban otthonosan",
    subtitle: "A zenei válogatást mindig a megrendelő és a násznép ízlése formálja.",
    genres: [
      { icon: "📻", title: "Retro & Nosztalgia", desc: "70-es, 80-as, 90-es évek örökzöldjei" },
      { icon: "✨", title: "2000-es Millennium", desc: "Avicii, Guetta, Rihanna, Groovehouse" },
      { icon: "🔥", title: "Mai Rádiós Slágerek", desc: "Dua Lipa, The Weeknd, Valmar, Halott Pénz" },
      { icon: "🎸", title: "Rock'n'Roll & Örökzöld", desc: "AC/DC, Bon Jovi, Hungária, Republic" },
      { icon: "🎷", title: "Funky & Nu-Disco", desc: "Daft Punk, Bruno Mars, Earth Wind & Fire" },
      { icon: "🎉", title: "Hazai Kedvencek", desc: "Menyasszonytánc & Mulatós igény szerint" }
    ],
    guaranteeNote: "Kívánságlista & Fekete lista garancia: Előre elküldhetitek a kedvenc dalaitokat, a nem kívánt számok pedig garantáltan nem csendülnek fel."
  },

  // Ügyfélvélemények
  testimonials: {
    badge: "Vélemények",
    title: "Mit mondanak, akik velem buliztak?",
    items: [
      {
        stars: "★★★★★",
        quote: "Zsolt egyszerűen zseniális volt az esküvőnkön! A vacsora alatt tökéletes aláfestést teremtett, a nyitótánc után pedig hajnali 5-ig senki sem ült le. Minden kérésünkre figyelt, a vendégek azóta is emlegetik a bulit!",
        author: "Nikolett & Tamás",
        role: "Ifjú pár",
        location: "Deák Udvarház"
      },
      {
        stars: "★★★★★",
        quote: "A cégünk évzáró gálájára kértük fel Zsoltot. A 20 évestől az 55 éves kollégákig mindenki talált kedvencet, a technikai pontossága és a közvetlensége is csillagos ötös volt.",
        author: "Borbély Kristóf",
        role: "Rendezvényszervező",
        location: "Budapest Marriott Hotel"
      }
    ]
  },

  // Kapcsolat és Visszahívás
  contact: {
    badge: "Kapcsolat",
    title: "Beszéljük meg az elképzeléseidet!",
    subtitle: "Hívj fel most kötetlenül, vagy add meg az elérhetőségedet és visszahívlak!",
    boxTitle: "Közvetlen hívás hétfőtől vasárnapig:",
    callButtonText: "Hívás indítása most",
    whatsappButtonText: "Üzenet WhatsAppon",
    callback: {
      title: "Vagy kérj visszahívást:",
      subtitle: "Add meg a neved és telefonszámod, hamarosan visszahívlak!",
      nameLabel: "Neved *",
      phoneLabel: "Telefonszámod *",
      noteLabel: "Mikor hívhatlak? / Rövid üzenet (opcionális)",
      submitButton: "Visszahívást kérek",
      successTitle: "Köszönöm!",
      successMessage: "Hamarosan felhívlak a megadott telefonszámon."
    }
  }
};

// Böngészőben globálisan elérhető
if (typeof window !== 'undefined') {
  window.SITE_DATA = SITE_DATA;
}
