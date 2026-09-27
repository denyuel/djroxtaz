/**
 * NYÁRI ZSOLT - Weboldal Tartalmi Adatok (Object Struktúra)
 * 
 * Esküvői és Rendezvény DJ
 * Domain: www.nyarizsolti.hu
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
    workingHours: "Hétfőtől vasárnapig közvetlenül hívható"
  },

  // Közösségi média profilok
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
    { label: "Menetrend", href: "#menetrend" },
    { label: "Zenei világ", href: "#zene" },
    { label: "Vélemények", href: "#velemenyek" },
    { label: "Kapcsolat", href: "#kapcsolat" }
  ],

  // Hero (Nyitó) szekció
  hero: {
    eyebrow: "ESKÜVŐI ÉS RENDEZVÉNY DJ • BUDAPEST & ORSZÁGOSAN",
    title: "A zene, ami felejthetetlenné teszi a",
    titleHighlight: "Nagy Napot.",
    description: "Több mint tíz év tapasztalat, prémium RCF hangtechnika és a tánctér lüktetésére épülő zenei ív a megható szertartástól a hajnalig tartó tombolásig — felesleges sallangok nélkül.",
    primaryCta: {
      text: "Hívj most kötetlenül",
      action: "tel:+36301234567"
    },
    secondaryCta: {
      text: "WhatsApp üzenet",
      action: "https://wa.me/36301234567"
    },
    stats: [
      { value: "12+", label: "Év tapasztalat" },
      { value: "450+", label: "Sikeres rendezvény" },
      { value: "5.0 ★", label: "Elégedettségi garancia" }
    ],
    trustBadges: [
      "Hivatalos szerződés és számlaképesség",
      "Vezeték nélküli mikrofonpark a köszöntőkhöz",
      "Kívánság- és tiltólisták 100%-os kezelése"
    ],
    bgImage: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1920&q=80"
  },

  // Rólam szekció
  about: {
    badge: "Hitvallás & Szemlélet",
    title: "A tánctér ritmusát olvasom,",
    titleHighlight: "nem csak dalokat játszom.",
    paragraphs: [
      "Több mint egy évtizede vagyok jelen az esküvők és céges rendezvények világában. Meggyőződésem, hogy a jó rendezvény DJ nem a saját zenei ízlését erőlteti a vendégekre, hanem folyamatosan együtt lélegzik a tánctérrel.",
      "Tudom, mikor kell finom, elegáns háttérzenével kísérni a vacsorát, mikor kell a megható pillanatokhoz szólnia a dallamnak, és mikor jön el a pont, amikor meg kell tölteni a táncparkettet a hajnali zárásig."
    ],
    ctaText: "Egyeztessünk telefonon",
    pillars: [
      {
        index: "01",
        title: "Megbízhatóság & Szerződés",
        description: "Pontos érkezés órákkal a vendégek előtt, hivatalos szerződés és garancia."
      },
      {
        index: "02",
        title: "Generációk Összhangja",
        description: "A 70-es, 80-as, 90-es évek örökzöldjeitől a mai slágerekig minden korosztály megtalálja a kedvencét."
      },
      {
        index: "03",
        title: "Csúcskategóriás RCF Technika",
        description: "Kristálytiszta hangzás, intelligens robotlámpák, diszkrét pult és rejtett kábelezés."
      },
      {
        index: "04",
        title: "Közvetlen Partnerség",
        description: "Részletes zenei előzetes megbeszélés: a ti kívánságaitok formálják az estét."
      }
    ]
  },

  // Szolgáltatások
  services: {
    badge: "Szolgáltatások",
    title: "Miben segíthetek a rendezvényeden?",
    subtitle: "Minden esemény egyedi. A helyszín adottságaihoz és a vendégek létszámához igazítjuk a hang- és fénytechnikát.",
    items: [
      {
        id: "wedding",
        tag: "FŐ SZOLGÁLTATÁS",
        title: "Esküvői DJ & Hangosítás",
        description: "Szertartás hangosítás külön kültéri/beltéri mikrofonnal, elegáns vacsorazene, nyitótánc és hajnalig tartó tombolás a kívánságaitok szerint.",
        features: [
          "Külön ceremónia és koktél hangosítás",
          "Kívánság- és feketelisták pontos kezelése",
          "Tökéletes összhang a ceremóniamesterrel"
        ],
        btnText: "Beszéljünk az esküvőről"
      },
      {
        id: "corporate",
        tag: "CÉGES & PROTOKOLL",
        title: "Céges Rendezvények & Gálák",
        description: "Évzárók, jubileumi gálák, konferenciák és csapatépítők. Kulturált megjelenés, diszkrét technika és pörgős esti tánc a hivatalos rész után.",
        features: [
          "Vezeték nélküli mikrofonok előadásokhoz",
          "Letisztult, esztétikus DJ pult",
          "Hivatalos számlaképes elszámolás"
        ],
        btnText: "Beszéljünk a céges partiról"
      },
      {
        id: "party-lighting",
        tag: "EXTRA HANGULAT",
        title: "Fénytechnika & Nehézfüst",
        description: "Kerek évfordulók (30., 40., 50.), privát partik és prémium látványelemek: nehézfüst a nyitótánchoz („tánc a felhők felett”) és fali súrolófények.",
        features: [
          "Nehézfüst (nem indítja be a tűzjelzőt)",
          "Intelligens robotlámpák a tánctérre",
          "Vezeték nélküli LED teremvilágítás"
        ],
        btnText: "Beszéljünk a látványelemekről"
      }
    ]
  },

  // Képgaléria
  gallery: {
    badge: "Pillanatok & Hangulat",
    title: "Valódi pillanatok a pult mögül",
    subtitle: "Fények, zene és telt házas táncparkett a legutóbbi rendezvényekről.",
    socialCtaText: "Kövess be a legfrissebb videókért és sztorikért:",
    items: [
      {
        title: "Tánc a felhők felett",
        category: "Nyitótánc & Nehézfüst",
        imageUrl: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80"
      },
      {
        title: "Telt házas táncparkett",
        category: "Hajnali bulihangulat",
        imageUrl: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&q=80"
      },
      {
        title: "Élő DJ Szett & Robotlámpák",
        category: "Fény- és hangtechnika",
        imageUrl: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=800&q=80"
      },
      {
        title: "Elegáns teremvilágítás",
        category: "Fali LED hangulatfények",
        imageUrl: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=800&q=80"
      }
    ]
  },

  // Menetrend
  workflow: {
    badge: "Menetrend",
    title: "Hogyan dolgozunk együtt?",
    subtitle: "3 átlátható lépés a felejthetetlen estéig — egyszerűen, kötetlenül, emberi hangon.",
    steps: [
      {
        num: "01",
        title: "Telefonos beszélgetés",
        description: "Felhívsz, átbeszéljük a dátumot, a helyszínt, a vendéglétszámot és az alapvető zenei elképzeléseiteket."
      },
      {
        num: "02",
        title: "Zenei forgatókönyv",
        description: "Személyesen vagy online egyeztetjük a menetrendet: szertartás dalai, nyitótánc, kedvenc slágerek és a tiltólista."
      },
      {
        num: "03",
        title: "A Nagy Nap",
        description: "Órákkal a vendégek érkezése előtt beépítem a hang- és fénytechnikát, és az utolsó dalig biztosítom a fergeteges hangulatot."
      }
    ],
    ctaButton: "Kezdjük az 1. lépéssel: +36 30 123 4567"
  },

  // Zenei világ
  music: {
    badge: "Zenei Repertoár",
    title: "Minden generáció megtalálja a ritmust",
    subtitle: "Nincs sablon lejátszási lista. A dalokat mindig a pár és a vendégsereg pillanatnyi dinamikája formálja.",
    genres: [
      { name: "Retro & 70s-80s-90s", desc: "Örökzöld slágerek, pop-rock és nosztalgia klasszikusok" },
      { name: "2000s & Millennium Pop", desc: "Avicii, David Guetta, Rihanna, Groovehouse, Scooter" },
      { name: "Mai Rádiós & Klub Kedvencek", desc: "Dua Lipa, The Weeknd, Bruno Mars, Valmar, Halott Pénz" },
      { name: "Funky, RnB & Nu-Disco", desc: "Daft Punk, Earth Wind & Fire, Purple Disco Machine" },
      { name: "Rock'n'Roll & Legendák", desc: "Hungária, AC/DC, Queen, Bon Jovi, Republic" },
      { name: "Magyar Kedvencek & Menyasszonytánc", desc: "Kizárólag kérésre és igény szerint, tiszteletben tartva a határokat" }
    ],
    guaranteeNote: "Kívánságlista & Feketelista garancia: Előre elküldhetitek a kötelező kedvenceket, és a nem kívánt dalok garantáltan nem fognak felcsendülni az este folyamán."
  },

  // Vélemények
  testimonials: {
    badge: "Referenciák",
    title: "Akik velem buliztak a Nagy Napon",
    items: [
      {
        stars: "★★★★★",
        quote: "Zsolt egyszerűen zseniális volt az esküvőnkön! A vacsora alatt tökéletes aláfestést adott, a nyitótánc után pedig hajnali 5-ig senki sem ült le. Minden kérésünkre figyelt, a vendégek azóta is emlegetik a bulit!",
        author: "Nikolett & Tamás",
        role: "Ifjú pár",
        location: "Deák Udvarház"
      },
      {
        stars: "★★★★★",
        quote: "A cégünk évzáró gálájára kértük fel Zsoltot. A 20 évestől az 55 éves kollégákig mindenki talált kedvencet. A technikai fegyelem, a pontos érkezés és a közvetlensége is csillagos ötös volt.",
        author: "Borbély Kristóf",
        role: "Rendezvényszervező",
        location: "Budapest Marriott Hotel"
      }
    ]
  },

  // Kapcsolat
  contact: {
    badge: "Kapcsolat",
    title: "Beszéljük meg az elképzeléseiteket!",
    subtitle: "Hívj fel most kötetlenül, vagy add meg az elérhetőségedet és hamarosan visszahívlak!",
    boxTitle: "Közvetlen hívás hétfőtől vasárnapig:",
    callButtonText: "Hívás indítása",
    whatsappButtonText: "WhatsApp üzenet",
    callback: {
      title: "Vagy kérj gyors visszahívást:",
      subtitle: "Add meg a neved és telefonszámod, és a nap folyamán kereslek.",
      nameLabel: "Neved *",
      phoneLabel: "Telefonszámod *",
      noteLabel: "Mikor hívhatlak? / Rövid üzenet (opcionális)",
      submitButton: "Visszahívást kérek",
      successTitle: "Köszönöm a megkeresést!",
      successMessage: "Hamarosan kereslek a megadott telefonszámon."
    }
  }
};

// Globálisan elérhető
if (typeof window !== 'undefined') {
  window.SITE_DATA = SITE_DATA;
}
