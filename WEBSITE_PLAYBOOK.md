# WEBSITE PLAYBOOK & LESSONS LEARNED
**Borbás Webdesign & Antigravity Master Standard**

Ez a dokumentum rögzíti az összes eddigi weboldal fejlesztési projektből (*djroxtaz / nyarizsolti*, *testacademy.hu*, *vineroof*, *funkcionalistest.hu*, *winesofi.hu*) leszűrt szabályokat, elveket és kötelező kódolási mintákat.

---

## 1. Architektúra: Adatszeparáció & Objektum-orientáltság (Kötelező szabály!)
> *"Szedd szét objektumokra a részeket, ne essen szét a honlap minden változtatásnál!"*

* **A probléma:** Amikor a szövegek, árak vagy telefonszámok a HTML-be vannak égetve, a legkisebb ügyfélkérés (pl. "írd át a címet") felboríthatja a HTML struktúrát, a lezáró tag-eket vagy a CSS osztályokat.
* **A megoldás (`data.js` minta):**
  1. **Tartalomréteg (`data.js`):** Minden üzleti adat (profil, elérhetőség, navigáció, szövegek, kártyák, vélemények, fotók) egyetlen strukturált `SITE_DATA` objektumban van definiálva.
  2. **Vázréteg (`index.html`):** Tiszta szemantikus HTML keret, mount pointokkal (`#hero-mount`, `#about-mount`, `#services-mount`, stb.).
  3. **Renderelő réteg (`main.js`):** Dedikált, tiszta függvények (`renderHero()`, `renderServices()`, stb.) olvassák ki a `SITE_DATA`-t és építik fel a DOM-ot.
* **Haszon:** Bármilyen szöveg, elérhetőség vagy kép 1 mező módosításával frissíthető anélkül, hogy a layout vagy a design valaha szétesne.

---

## 2. Technikai Stabilitás: Zéró Külső Runtime Függőség
* **A CDN csapda:** Külső framework CDN-ek (pl. `cdn.tailwindcss.com`) használata tilos, mert offline módban, sandboxed környezetben vagy lassú hálózaton nem töltenek be, amitől az oldal darabjaira hullik.
* **A standard:** 100%-ban önálló, tiszta `style.css` (vagy előre fordított CSS). Nincs szükség felesleges npm/vite build toolingra egyszerű bemutató oldalaknál.

---

## 3. Vizuális Identitás: A "Borbás Webdesign" Standard
* **Tipográfia:**
  * **Címsorok:** `'Playfair Display'` (luxus serif esküvői/prémium projekteknél) vagy emelt súlyú `'Montserrat'` (nordic geometric sans).
  * **Törzsszöveg:** `'Plus Jakarta Sans'` vagy `'Inter'` a maximális olvashatóságért.
  * **Gombok & Kapszulák:** `rounded-full` (50px border-radius), diszkrét betűköz (`letter-spacing: 0.5px - 1.5px`), bold/extrabold súly.
* **Szín- és hangulati szabályok:**
  * **NINCS** éjszakai techno-klub sötétség esküvői/elegáns oldalakon.
  * **NINCS** sáros mustársárga / unalmas barna.
  * **NINCS** infantilis rajzfilmes emoji vagy forgó lemezjátszó animáció.
  * **A nyerő formula:**
    * **Hero szekció:** Full-width lélegzetelállító eseményfotó meleg parti fényekkel + sötétített luxus átmenettel + valódi pezsgő-arany (`#d4af37`, `#e5c07b`) fénnyel.
    * **Tartalom szekciók:** Nordic Light: tiszta fehér (`#ffffff`) és meleg lenvászon (`#faf9f6`), prémium szürke szegélyek (`#e2e8f0`) és leheletfinom árnyékok (`shadow-slate-100`).
    * **Szövegszín:** Mély pala (`#0f172a`), sosem 100% koromfekete `#000`.

---

## 4. Konverziós & Üzleti Fókusz
* **Nem kell minden oldalra ár és automata booking:**
  * Egyedi szolgáltatóknál (esküvői DJ, tanácsadó, egyedi kivitelező) a kötetlen telefonos kapcsolatfelvétel a cél.
  * **Elsődleges CTA:** Közvetlen telefonhívás (`tel:+36...`).
  * **Másodlagos CTA:** WhatsApp üzenet és egyszerű, 3 mezős visszahíváskérő (Név, Telefonszám, Rövid megjegyzés).
  * A telefonszám kattintható kell legyen a menüben, a Hero-ban, a kártyákban, a lebegő gombban és a láblécben is.

---

## 5. Git, Hosting & Cloudflare Pages Best Practices
* **Git szabályok (*vineroof lecke*):**
  * Nincs szükség elhagyott ágakra és "vak merge"-re. Tartsunk egyetlen tiszta `main` ágat, mert a régi ágak felülírhatják a friss ügyfélárakat és szövegeket.
* **Cloudflare Pages szabályok (*djroxtaz lecke*):**
  * A projektet a kívánt dev névvel kell létrehozni (pl. `nyarizsolti-dev`), mert a Cloudflare a kezdeti névből generálja a fix `*.pages.dev` címet.
  * A végleges domain (`nyarizsolti.hu` és `www.nyarizsolti.hu`) a **Custom domains** menüpont alatt 1 perc alatt ráköthető, automatikus HTTPS tanúsítvánnyal.
