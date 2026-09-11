export const SITE_INFO = {
  name: "Nyári Zsolt",
  brandName: "DJ ROXTAZ",
  title: "Rendezvény és Esküvői DJ",
  phone: "+36 30 123 4567",
  email: "info@djroxtaz.hu",
  location: "Budapest & Országosan",
  experienceYears: "12+",
  eventsCompleted: "450+",
  satisfactionRate: "100%",
  social: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    tiktok: "https://tiktok.com",
    whatsapp: "https://wa.me/36301234567"
  }
};

export const NAV_LINKS = [
  { label: "Rólam", href: "#rolam" },
  { label: "Szolgáltatások", href: "#szolgaltatasok" },
  { label: "Csomagok", href: "#csomagok" },
  { label: "Zenei Világ", href: "#zene" },
  { label: "Vélemények", href: "#velemenyek" },
  { label: "GYIK", href: "#gyik" },
  { label: "Kapcsolat", href: "#kapcsolat" },
];

export const SERVICES = [
  {
    id: "eskuvo",
    title: "Esküvői DJ & Hangulatfelelős",
    subtitle: "A vendégvárástól a hajnali zárásig",
    description: "Komplett zenei levezetés az ifjú pár és a vendégek igényei szerint. Polgári szertartás hangosítása vezeték nélküli mikrofonokkal, elegáns aláfestő zene a vacsorához, a nyitótánc felejthetetlen pillanata és hajnalig tartó tombolás a táncparketten.",
    features: [
      "Kültéri vagy beltéri szertartás kristálytiszta hangosítása",
      "Személyre szabott zenei forgatókönyv és kívánságlisták",
      "Vacsora háttérzene (Lounge, Bossa Nova, Akusztikus feldolgozások)",
      "Zökkenőmentes együttműködés a ceremóniamesterrel / vőféllyel"
    ],
    badge: "Legnépszerűbb"
  },
  {
    id: "ceges",
    title: "Céges Rendezvények & Gálák",
    subtitle: "Professzionalizmus és prémium megjelenés",
    description: "Évzáró gálák, karácsonyi partik, konferenciák és kötetlen csapatépítők zenei és technikai kiszolgálása. Megbízható, kulturált fellépés és rugalmas stílusváltás a hivatalos protokoll után a bulizós estébe.",
    features: [
      "Vezeték nélküli mikrofonpark díjátadókhoz, beszédekhez",
      "Elegáns, diszkrét vizuális megjelenés (rejtett kábelezés)",
      "Multinacionális zenei repertoár külföldi vendégeknek is",
      "Számlaképes, hivatalos szerződéses partnerség"
    ],
    badge: "B2B Kiválóság"
  },
  {
    id: "privat",
    title: "Születésnapok & Jubileumok",
    subtitle: "Kerek évfordulók, privát VIP partik",
    description: "Legyen szó 18., 30., 40. vagy 50. születésnapról, házassági évfordulóról vagy medencés partiról, a zenei felhozatal 100%-ban az ünnepelt ízlésére és korosztályára van kalibrálva.",
    features: [
      "Generációkat összekötő zenei válogatás",
      "Kompakt, kis helyigényű, mégis ütős hangrendszer",
      "Kötetlen hangulat, spontán vendégkérések kezelése",
      "Kerti partikhoz és beltéri helyszínekhez is optimalizálva"
    ],
    badge: "Élménygarancia"
  },
  {
    id: "latvany",
    title: "Prémium Fény- és Látványtechnika",
    subtitle: "Varázsolj egyedi atmoszférát a helyszínre",
    description: "A professzionális hangzás mellé elengedhetetlen a modern vizuális élmény. Szárazjeges nehézfüst, amivel a felhők felett táncolhattok, és intelligens LED robotlámpák, amelyek valódi fesztiválhangulatot teremtenek.",
    features: [
      "Nehézfüst gép (felhőeffekt a nyitótánchoz, nem kapcsolja be a füstérzékelőt)",
      "Súrolófényes teremdekoráció (akár 16+ vezeték nélküli LED lámpa a terem színeihez)",
      "DMX-vezérelt robotlámpák és spotfények a tánctérre",
      "Hidegszikra szökőkutak beltéri és kültéri látványelemként"
    ],
    badge: "Extra Show"
  }
];

export const PACKAGES = [
  {
    name: "Silver Csomag",
    tagline: "Kisebb létszámú rendezvényekhez, születésnapokhoz",
    price: "Egyedi ajánlat alapján",
    highlight: false,
    duration: "Max. 6 óra rendelkezésre állás",
    details: [
      "Professzionális aktív hangrendszer (kb. 50-80 főig)",
      "Alapvető dinamikus tánctéri fénytechnika (LED derítők, effektek)",
      "1 db prémium minőségű vezeték nélküli mikrofon",
      "Előzetes online vagy telefonos egyeztetés a zenei stílusról",
      "Bármikor hosszabbítható túlóra lehetőség"
    ],
    cta: "Ajánlatkérés ehhez a csomaghoz"
  },
  {
    name: "Gold Esküvő Csomag",
    tagline: "A teljes körű, gondtalan esküvői élmény",
    price: "A leggyakoribb választás",
    highlight: true,
    badge: "Legtöbbet választott",
    duration: "Akár 10-12 óra rendelkezésre állás (hajnalig)",
    details: [
      "Prémium minőségű RCF / Electro-Voice hangrendszer (akár 150-200 főig)",
      "Intelligens, ritmusra szinkronizált robotlámpák fényhídon",
      "Polgári szertartás külön hangosítása (kültéren is biztosított)",
      "2 db professzionális vezeték nélküli mikrofon (ceremóniamesternek & köszöntőkhöz)",
      "Személyes vagy videóhívásos forgatókönyv-egyeztetés",
      "Kívánságlista és tiltólista (black list) teljes körű figyelembevétele",
      "Könnyű füstgép a fények érvényesüléséhez"
    ],
    cta: "Ezt a csomagot szeretném lefoglalni"
  },
  {
    name: "Diamond VIP Csomag",
    tagline: "Gálaeseményekhez és luxus esküvőkhöz teljes látványtechnikával",
    price: "Prémium All-Inclusive élmény",
    highlight: false,
    duration: "Korlátlan rendelkezésre állás (zárásig)",
    details: [
      "Minden, amit a Gold csomag tartalmaz",
      "Nehézfüst gép szárazjéggel a nyitótánchoz („tánc a felhők felett”)",
      "2 db hidegszikra szökőkút gép a csúcspillanatokhoz (100% biztonságos)",
      "12-16 db akkumulátoros fali súrolófény (a helyszín teljes hangulatvilágítása a választott színben)",
      "B-terv és technikai redundancia (dupla lejátszórendszer a maximális biztonságért)",
      "Kiemelt VIP koordináció a vendégelőadókkal, zenészekkel"
    ],
    cta: "VIP csomag igénylése"
  }
];

export const MUSIC_STYLES = [
  {
    id: "retro",
    name: "Retro & Nosztalgia",
    period: "70-es, 80-as, 90-es évek aranykora",
    icon: "Disc",
    description: "ABBA, Boney M., Modern Talking, Michael Jackson, Queen, Neoton, Hungária – a generációk közös kedvencei, amikre mindenki azonnal táncolni kezd.",
    sampleArtist: "Earth, Wind & Fire, Madonna, Bon Bon",
    energy: "95%"
  },
  {
    id: "y2k",
    name: "2000-es évek & Millennium Hits",
    period: "A tinédzserkor legnagyobb klubhimnuszai",
    icon: "Sparkles",
    description: "Avicii, David Guetta, Rihanna, Black Eyed Peas, Pitbull, Cascada, Groovehouse – a mostani házasulandók és barátaik kedvenc korszakos bulislágerei.",
    sampleArtist: "Calvin Harris, Lady Gaga, Sean Paul",
    energy: "100%"
  },
  {
    id: "pop",
    name: "Mai Slágerek & Rádiós Kedvencek",
    period: "2020-as évek trendjei és slágerlisták",
    icon: "Radio",
    description: "Dua Lipa, The Weeknd, Bruno Mars, Ed Sheeran, Halott Pénz, Valmar, ByeAlex – a legfrissebb energikus tánczenék kifogástalan mixelésben.",
    sampleArtist: "Dua Lipa, Purple Disco Machine, Taylor Swift",
    energy: "90%"
  },
  {
    id: "rock",
    name: "Rock'n'Roll & Örökzöld Partizenék",
    period: "Klasszikus pörgős rock és táncdalok",
    icon: "Flame",
    description: "AC/DC, Bon Jovi, Guns N' Roses, Tankcsapda, Republic, Grease filmzenék – amikor a gitárszólókra emelkednek a kezek a magasba.",
    sampleArtist: "Elvis Presley, Bryan Adams, Joan Jett",
    energy: "98%"
  },
  {
    id: "funky",
    name: "Funky, RnB & Nu-Disco",
    period: "Dögös ritmusok és elegáns party groove-ok",
    icon: "Music",
    description: "Kool & The Gang, Daft Punk, Jamiroquai, Stevie Wonder – prémium vacsora aláfestéshez és laza, táncos bemelegítéshez tökéletes.",
    sampleArtist: "Daft Punk, Chic, Bruno Mars / Silk Sonic",
    energy: "85%"
  },
  {
    id: "hungarian",
    name: "Hazai Kedvencek & Mulatós Ízek",
    period: "Igény szerint adagolva, a pár kéréséhez igazítva",
    icon: "PartyPopper",
    description: "Kizárólag akkor és olyan mértékben, ahogy megbeszéljük! Igényes mulatós, retro magyar pop és táncdalok a fergeteges éjféli menyasszonytánchoz.",
    sampleArtist: "Magyar retro, mulatós party himnuszok",
    energy: "99%"
  }
];

export const TESTIMONIALS = [
  {
    quote: "Zsolt egyszerűen zseniális volt az esküvőnkön! A ceremónia hangosítása kristálytiszta volt, a vacsora alatt tökéletes hangulatot teremtett, a nyitótánc után pedig hajnali 5-ig senki sem ült le. Minden kérésünkre figyelt, a vendégek azóta is emlegetik a bulit!",
    author: "Nikolett & Tamás",
    role: "Ifjú pár",
    eventDate: "2025. Július",
    location: "Deák Udvarház, Kakucs",
    rating: 5
  },
  {
    quote: "A cégünk 200 fős évzáró gálájára kértük fel Zsoltot (DJ Roxtaz). Nemcsak a zenei felhozatal volt kifogástalan – a 20 évestől az 55 éves kollégákig mindenki talált kedvencet –, de a technikai pontossága és a diszkrét megjelenése is a legmagasabb színvonalat képviselte.",
    author: "Borbély Kristóf",
    role: "HR & Rendezvényszervezési vezető, TechCorp Hungary",
    eventDate: "2024. December",
    location: "Budapest Marriott Hotel",
    rating: 5
  },
  {
    quote: "A nehézfüst effekt a nyitótáncunknál mindent vitt, olyan volt, mintha tényleg a felhők tetején lebegtünk volna! Zsolt hihetetlenül rugalmas és professzionális, szívből ajánljuk minden házasulandó párnak.",
    author: "Dóra & Péter",
    role: "Ifjú pár",
    eventDate: "2025. Szeptember",
    location: "Teleki-Tisza-kastély, Nagykovácsi",
    rating: 5
  },
  {
    quote: "Az 50. születésnapi bulimra hívtam el Zsoltot. Olyan retro és rock blokkot rántott össze, amilyet még a legjobb klubokban sem hallottam. Nem nyomta a saját ízlését ránk, hanem pontosan érezte, mire pörög a társaság. 10/10!",
    author: "Gábor",
    role: "Születésnapi ünnepelt",
    eventDate: "2025. Május",
    location: "Szentendre",
    rating: 5
  }
];

export const FAQS = [
  {
    q: "Milyen messze vállalsz fellépéseket?",
    a: "Budapesten és Pest megyében a kiszállási díj a legtöbb esetben minimális vagy a csomag része, de az ország egész területén (Balaton, Eger, Debrecen, Szeged, Győr stb.) és külföldön is rendszeresen vállalok rendezvényeket. Kiszállási költséget a pontos helyszín ismeretében előre kalkulálunk, nincsenek rejtett költségek."
  },
  {
    q: "Hozhatunk saját zenei kívánságlistát, és van-e 'fekete lista'?",
    a: "Természetesen, sőt határozottan bátorítom! Az esküvő a ti napotok. Örömmel fogadok egy Spotify vagy YouTube listát a 'must-play' (mindenképpen játsszuk le) és a 'fekete listás' (semmilyen körülmények között ne szólaljon meg) dalokról. A vendégek spontán kéréseit pedig intelligensen illesztem a buli aktuális ívébe."
  },
  {
    q: "Mikor érkezel a helyszínre és mennyi idő a technika beépítése?",
    a: "Mindig a vendégek érkezése előtt minimum 2-3 órával megérkezem a helyszínre, hogy a teljes hang- és fénytechnika, valamint a mikrofonok és kábelek beállítása készen legyen, mire az első vendég belép. A hangpróbát sosem a vendégek jelenlétében tartom."
  },
  {
    q: "Mi történik, ha a tervezettnél tovább tart a buli?",
    a: "A helyszíni megállapodás szerint van lehetőség óradíjas túlórára, amíg a helyszín engedi a zenélést és a társaság bírja szusszal. Senkit sem zárok le a legnagyobb pörgés közepén."
  },
  {
    q: "Milyen garanciát kapunk a fellépésre?",
    a: "Minden felkérést írásos szerződéssel rögzítünk, amely mindkét felet védi. Tartalék hangkártyával, tartalék laptoppal és kábelekkel érkezem, így kizárt a technikai leállás. Az időpont lefoglalása előleg megfizetésével válik véglegessé."
  },
  {
    q: "A polgári szertartás hangosítása megoldható kültéren is, ahol nincs közvetlen konnektor?",
    a: "Igen! Speciális akkumulátoros technikai eszközökkel és hosszú ipari kábelekkel a legeldugottabb kerti, erdei vagy tóparti ceremóniahelyszínen is kristálytiszta hangot biztosítok a szertartásvezetőnek és a bevonuló zenéknek."
  }
];

export const WHY_US = [
  {
    title: "100% Megbízhatóság",
    desc: "Hivatalos szerződés, pontos érkezés, dupla biztonsági technikai háttér (redundáns lejátszórendszerek)."
  },
  {
    title: "Zenei Érzékenység",
    desc: "Folyamatosan figyelem a táncteret, nem előre legyártott mixeket játszom le, hanem a vendégek reakcióira építek."
  },
  {
    title: "Prémium Eszközpark",
    desc: "Kristálytiszta csúcskategóriás hangzás (RCF / EV / Shure), modern LED és robotlámpák csúnya kábelrengeteg nélkül."
  },
  {
    title: "Partner a Szervezésben",
    desc: "Szoros együttműködés a ceremóniamesterrel, vőféllyel, fotóssal és a helyszínnel a zökkenőmentes programért."
  }
];
