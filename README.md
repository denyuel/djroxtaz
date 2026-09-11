# DJ ROXTAZ - Nyári Zsolt Weboldal

Professzionális rendezvény és esküvői DJ bemutatkozó weboldal közvetlen telefonos elérhetőséggel és moduláris objektum-architektúrával.

## 🚀 Cloudflare Pages Telepítés (1 perc)

A weboldal **nulla build lépést igényel**, azonnal futtatható statikus weboldalként.

1. **GitHub Repository létrehozása és feltöltése:**
   ```bash
   git push -u origin main
   ```
   *(Ha a repo még nem létezik a GitHub fiókodon: hozd létre a `djroxtaz` nevű privát vagy nyilvános repót a https://github.com/new oldalon, majd futtasd a fenti parancsot).*

2. **Cloudflare Pages összekötés:**
   - Nyisd meg a [dash.cloudflare.com](https://dash.cloudflare.com) oldalt.
   - Menü: **Workers & Pages** -> **Create application** -> **Pages** fül -> **Connect to Git**.
   - Válaszd ki a `djroxtaz` repódat.
   - Beállítások:
     - **Framework preset:** `None`
     - **Build command:** *(hagyd üresen)*
     - **Build output directory:** `/` *(vagy hagyd üresen / root)*
   - Kattints a **Save and Deploy** gombra.

3. **Kész!**
   A Cloudflare azonnal ad egy ingyenes, villámgyors élő linket (pl. `https://djroxtaz.pages.dev`), amit azonnal elküldhetsz Zsoltnak bemutatásra. Később ide köthető a saját domain is (pl. `djroxtaz.hu`).

---

## ✏️ Tartalom szerkesztése (Adatobjektumok)

Minden szöveg, elérhetőség, telefonszám, bemutatkozás és fotó a **`data.js`** fájlban található.
A weboldal dizájnja (`style.css`) és vázszerkezete (`index.html`) teljesen el van különítve, így bármilyen szöveges módosítás **garantáltan nem rontja el az elrendezést**.
