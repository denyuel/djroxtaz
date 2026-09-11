/**
 * DJ ROXTAZ - Fő Renderelő Szkript (main.js)
 * 
 * Dinamikus renderelés a SITE_DATA objektumok alapján.
 */

document.addEventListener('DOMContentLoaded', () => {
  const data = window.SITE_DATA;
  if (!data) {
    console.error('SITE_DATA nem található! Ellenőrizd a data.js betöltését.');
    return;
  }

  // 1. Fejléc & Navigáció
  renderNav(data);

  // 2. Hero (Nyitó) szekció
  renderHero(data);

  // 3. Rólam szekció
  renderAbout(data);

  // 4. Szolgáltatások
  renderServices(data);

  // 5. Képgaléria / Hangulatképek
  renderGallery(data);

  // 6. Menetrend (Hogyan dolgozunk együtt?)
  renderWorkflow(data);

  // 7. Zenei stílusok
  renderMusic(data);

  // 8. Vélemények
  renderTestimonials(data);

  // 9. Kapcsolat & Visszahívás
  renderContact(data);

  // 10. Lábléc & Lebegő hívógomb
  renderFooter(data);

  // 11. Eseménykezelők
  setupEventListeners();
});

/* --- NAVIGÁCIÓ --- */
function renderNav(data) {
  const { profile, nav, social } = data;
  const navContainer = document.getElementById('navbar-mount');
  if (!navContainer) return;

  const linksHtml = nav.map(item => `
    <li><a href="${item.href}">${item.label}</a></li>
  `).join('');

  const mobileLinksHtml = nav.map(item => `
    <a href="${item.href}" class="mobile-nav-item">${item.label}</a>
  `).join('');

  navContainer.innerHTML = `
    <header class="navbar">
      <div class="container nav-wrapper">
        <a href="#" class="nav-logo">
          <div class="nav-logo-badge">📀</div>
          <div>
            <div class="nav-logo-text font-display">
              ${profile.stageName} <span style="color:#f59e0b;">•</span>
            </div>
            <div class="nav-logo-sub">${profile.name} • ${profile.title}</div>
          </div>
        </a>

        <ul class="nav-links">
          ${linksHtml}
        </ul>

        <div style="display: flex; align-items: center; gap: 10px;">
          <a href="${social.facebook}" target="_blank" rel="noopener" class="btn-social btn-facebook" style="padding: 7px 12px; font-size: 12px;" title="Facebook profil">
            f Facebook
          </a>
          <a href="tel:${profile.phoneRaw}" class="nav-phone-btn">
            <span>📞 Hívás:</span>
            <span>${profile.phone}</span>
          </a>
        </div>

        <button id="mobileMenuBtn" class="mobile-menu-btn" aria-label="Menü nyitása">☰</button>
      </div>

      <div id="mobileDrawer" class="mobile-nav-drawer">
        ${mobileLinksHtml}
        <div style="padding-top: 15px; display: flex; flex-direction: column; gap: 10px;">
          <a href="tel:${profile.phoneRaw}" class="btn-primary btn-block" style="text-align:center;">
            📞 Hívás: ${profile.phone}
          </a>
          <div style="display: flex; gap: 10px;">
            <a href="${social.facebook}" target="_blank" rel="noopener" class="btn-social btn-facebook btn-block" style="text-align:center; justify-content:center;">
              f Facebook profil
            </a>
            <a href="${social.instagram}" target="_blank" rel="noopener" class="btn-social btn-instagram btn-block" style="text-align:center; justify-content:center;">
              📸 Instagram
            </a>
          </div>
        </div>
      </div>
    </header>
  `;
}

/* --- HERO SZEKCIÓ --- */
function renderHero(data) {
  const { profile, hero, social } = data;
  const container = document.getElementById('hero-mount');
  if (!container) return;

  const statsHtml = hero.stats.map(s => `
    <div class="stat-item">
      <h3 class="font-display" style="${s.highlight ? '' : 'color:#fff;'}">${s.value}</h3>
      <p>${s.label}</p>
    </div>
  `).join('');

  const featuresHtml = hero.cardFeatures.map(f => `
    <div>✓ ${f}</div>
  `).join('');

  container.innerHTML = `
    <section class="hero-section">
      <div class="container">
        <div class="hero-grid">
          
          <div>
            <div class="badge">
              <span class="badge-dot"></span>
              ${hero.seasonBadge}
            </div>

            <h1 class="hero-title">
              <span style="font-weight: 500; font-size: 28px; color: #d4d4d8; display: block; margin-bottom: 4px;">
                ${hero.greeting}
              </span>
              <span class="gold-gradient-text">
                ${hero.headline}
              </span>
              <span style="font-size: 22px; color: #a1a1aa; display: block; margin-top: 6px;">
                ${hero.subBrand}
              </span>
            </h1>

            <p class="hero-subtitle">
              ${hero.description}
            </p>

            <div class="hero-actions">
              <a href="${hero.primaryCta.action}" class="btn-primary">
                <span>📞 ${hero.primaryCta.text}</span>
              </a>
              <a href="${hero.secondaryCta.action}" target="_blank" rel="noopener" class="btn-secondary">
                <span style="color:#10b981;">●</span> ${hero.secondaryCta.text}
              </a>
              <a href="${social.facebook}" target="_blank" rel="noopener" class="btn-social btn-facebook" style="padding: 14px 20px;">
                f Facebook
              </a>
            </div>

            <div class="hero-stats">
              ${statsHtml}
            </div>
          </div>

          <div>
            <div class="hero-card gold-glow">
              <div style="display: flex; justify-content: space-between; font-size: 12px; color: #a1a1aa; padding-bottom: 12px; border-bottom: 1px solid #272735;">
                <span style="color: #f59e0b; font-weight: bold;">ÉLŐ HANGZÁS</span>
                <span>RCF & Electro-Voice</span>
              </div>

              <div class="turntable-box">
                <div class="vinyl-grooves"></div>
                <div class="vinyl-grooves-2"></div>
                <div class="vinyl-label font-display">
                  <span>ROXTAZ</span>
                  <span style="font-size: 8px; opacity: 0.8;">33 RPM</span>
                </div>
              </div>

              <div style="text-align: left; font-size: 13px; color: #d4d4d8; margin: 16px 0; line-height: 1.8;">
                ${featuresHtml}
              </div>

              <a href="tel:${profile.phoneRaw}" class="btn-secondary btn-block" style="font-size: 13px; padding: 10px;">
                Beszélgessünk telefonon &rarr;
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  `;
}

/* --- RÓLAM SZEKCIÓ --- */
function renderAbout(data) {
  const { profile, about } = data;
  const container = document.getElementById('about-mount');
  if (!container) return;

  const paragraphsHtml = about.paragraphs.map(p => `<p>${p}</p>`).join('');

  const pillarsHtml = about.pillars.map(pill => `
    <div class="pillar-card">
      <div class="pillar-icon">${pill.icon}</div>
      <h4>${pill.title}</h4>
      <p>${pill.description}</p>
    </div>
  `).join('');

  container.innerHTML = `
    <section id="rolam" class="section-py" style="background: #0d0d12; border-top: 1px solid #1c1c26;">
      <div class="container">
        <div class="about-grid">
          
          <div class="about-text">
            <div class="badge">${about.badge}</div>
            <h2 style="font-size: 36px; margin-bottom: 18px;">
              ${about.title} <br />
              <span class="gold-gradient-text">${about.titleHighlight}</span>
            </h2>
            ${paragraphsHtml}
            <div style="margin-top: 24px;">
              <a href="tel:${profile.phoneRaw}" class="btn-primary" style="font-size: 14px; padding: 12px 24px;">
                📞 ${about.ctaText}
              </a>
            </div>
          </div>

          <div class="pillars-grid">
            ${pillarsHtml}
          </div>

        </div>
      </div>
    </section>
  `;
}

/* --- SZOLGÁLTATÁSOK --- */
function renderServices(data) {
  const { profile, services } = data;
  const container = document.getElementById('services-mount');
  if (!container) return;

  const itemsHtml = services.items.map(srv => {
    const listItems = srv.features.map(f => `<li>${f}</li>`).join('');
    return `
      <div class="service-card">
        <div>
          <div class="service-icon">${srv.icon}</div>
          <h3 class="font-display">${srv.title}</h3>
          <p>${srv.description}</p>
          <ul class="service-list">
            ${listItems}
          </ul>
        </div>
        <a href="tel:${profile.phoneRaw}" class="btn-secondary btn-block" style="text-align: center; font-size: 13px;">
          ${srv.btnText} &rarr;
        </a>
      </div>
    `;
  }).join('');

  container.innerHTML = `
    <section id="szolgaltatasok" class="section-py">
      <div class="container">
        <div class="text-center" style="max-width: 650px; margin: 0 auto;">
          <div class="badge">${services.badge}</div>
          <h2 style="font-size: 36px; margin-bottom: 12px;">${services.title}</h2>
          <p class="text-muted" style="font-size: 15px;">${services.subtitle}</p>
        </div>

        <div class="services-grid">
          ${itemsHtml}
        </div>
      </div>
    </section>
  `;
}

/* --- KÉPGALÉRIA & HANGULATKÉPEK --- */
function renderGallery(data) {
  const { gallery, social } = data;
  const container = document.getElementById('gallery-mount');
  if (!container || !gallery) return;

  const itemsHtml = gallery.items.map(item => `
    <div class="gallery-card">
      <img src="${item.imageUrl}" alt="${item.title}" loading="lazy" />
      <div class="gallery-overlay">
        <span class="gallery-cat">${item.category}</span>
        <h4 class="gallery-title font-display">${item.title}</h4>
      </div>
    </div>
  `).join('');

  container.innerHTML = `
    <section id="galeria" class="section-py" style="background: #0d0d12; border-top: 1px solid #1c1c26;">
      <div class="container">
        <div class="text-center" style="max-width: 650px; margin: 0 auto;">
          <div class="badge">${gallery.badge}</div>
          <h2 style="font-size: 36px; margin-bottom: 12px;">${gallery.title}</h2>
          <p class="text-muted" style="font-size: 15px;">${gallery.subtitle}</p>
        </div>

        <div class="gallery-grid">
          ${itemsHtml}
        </div>

        <div style="text-align: center; margin-top: 35px; display: flex; flex-direction: column; align-items: center; gap: 14px;">
          <p class="text-muted" style="font-size: 14px;">${gallery.socialCtaText}</p>
          <div style="display: flex; gap: 14px; flex-wrap: wrap; justify-content: center;">
            <a href="${social.facebook}" target="_blank" rel="noopener" class="btn-social btn-facebook">
              f Facebook: ${social.facebookName}
            </a>
            <a href="${social.instagram}" target="_blank" rel="noopener" class="btn-social btn-instagram">
              📸 Instagram: ${social.instagramHandle}
            </a>
          </div>
        </div>
      </div>
    </section>
  `;
}

/* --- MENETREND (WORKFLOW) --- */
function renderWorkflow(data) {
  const { profile, workflow } = data;
  const container = document.getElementById('workflow-mount');
  if (!container) return;

  const stepsHtml = workflow.steps.map(step => `
    <div class="step-card">
      <div class="step-num font-display">${step.num}</div>
      <h3 class="font-display">${step.title}</h3>
      <p>${step.description}</p>
    </div>
  `).join('');

  container.innerHTML = `
    <section id="menetrend" class="section-py" style="border-top: 1px solid #1c1c26;">
      <div class="container">
        <div class="text-center" style="max-width: 650px; margin: 0 auto;">
          <div class="badge">${workflow.badge}</div>
          <h2 style="font-size: 36px; margin-bottom: 12px;">${workflow.title}</h2>
          <p class="text-muted" style="font-size: 15px;">${workflow.subtitle}</p>
        </div>

        <div class="steps-grid">
          ${stepsHtml}
        </div>

        <div class="text-center" style="margin-top: 35px;">
          <a href="tel:${profile.phoneRaw}" class="btn-primary">
            📞 ${workflow.ctaButton}
          </a>
        </div>
      </div>
    </section>
  `;
}

/* --- ZENEI VILÁG --- */
function renderMusic(data) {
  const { music } = data;
  const container = document.getElementById('music-mount');
  if (!container) return;

  const genresHtml = music.genres.map(g => `
    <div class="genre-pill">
      <div class="genre-icon">${g.icon}</div>
      <div>
        <h4>${g.title}</h4>
        <p>${g.desc}</p>
      </div>
    </div>
  `).join('');

  container.innerHTML = `
    <section id="zene" class="section-py" style="background: #0d0d12; border-top: 1px solid #1c1c26;">
      <div class="container">
        <div class="text-center" style="max-width: 650px; margin: 0 auto;">
          <div class="badge">${music.badge}</div>
          <h2 style="font-size: 36px; margin-bottom: 12px;">${music.title}</h2>
          <p class="text-muted" style="font-size: 15px;">${music.subtitle}</p>
        </div>

        <div class="genres-grid">
          ${genresHtml}
        </div>

        <div style="margin-top: 25px; background: #13131b; border: 1px solid #272734; border-radius: 16px; padding: 18px; text-align: center; font-size: 13px; color: #d4d4d8;">
          💡 <strong>${music.guaranteeNote.split(':')[0]}:</strong> ${music.guaranteeNote.split(':')[1]}
        </div>
      </div>
    </section>
  `;
}

/* --- VÉLEMÉNYEK --- */
function renderTestimonials(data) {
  const { testimonials } = data;
  const container = document.getElementById('testimonials-mount');
  if (!container) return;

  const reviewsHtml = testimonials.items.map(rev => `
    <div class="review-card">
      <div class="review-stars">${rev.stars}</div>
      <p class="review-text">"${rev.quote}"</p>
      <div class="review-author">
        ${rev.author}
        <span class="review-loc"> • ${rev.role}, ${rev.location}</span>
      </div>
    </div>
  `).join('');

  container.innerHTML = `
    <section id="velemenyek" class="section-py" style="border-top: 1px solid #1c1c26;">
      <div class="container">
        <div class="text-center" style="max-width: 650px; margin: 0 auto;">
          <div class="badge">${testimonials.badge}</div>
          <h2 style="font-size: 36px; margin-bottom: 12px;">${testimonials.title}</h2>
        </div>

        <div class="reviews-grid">
          ${reviewsHtml}
        </div>
      </div>
    </section>
  `;
}

/* --- KAPCSOLAT & VISSZAHÍVÁS --- */
function renderContact(data) {
  const { profile, contact, social } = data;
  const container = document.getElementById('contact-mount');
  if (!container) return;

  const cb = contact.callback;

  container.innerHTML = `
    <section id="kapcsolat" class="section-py" style="background: #0d0d12; border-top: 1px solid #1c1c26;">
      <div class="container">
        
        <div class="text-center" style="max-width: 650px; margin: 0 auto 30px;">
          <div class="badge">${contact.badge}</div>
          <h2 style="font-size: 36px; margin-bottom: 12px;">${contact.title}</h2>
          <p class="text-muted" style="font-size: 15px;">${contact.subtitle}</p>
        </div>

        <!-- Nagy telefonos kártya -->
        <div class="contact-box">
          <div style="font-size: 40px; margin-bottom: 8px;">📞</div>
          <div style="font-size: 12px; text-transform: uppercase; letter-spacing: 1px; color: #a1a1aa; font-weight: 700;">
            ${contact.boxTitle}
          </div>
          
          <div>
            <a href="tel:${profile.phoneRaw}" class="phone-large font-display">
              ${profile.phone}
            </a>
          </div>

          <div class="contact-actions">
            <a href="tel:${profile.phoneRaw}" class="btn-primary">
              <span>📞 ${contact.callButtonText}</span>
            </a>
            <a href="${profile.whatsappUrl}" target="_blank" rel="noopener" class="btn-secondary">
              <span>💬 ${contact.whatsappButtonText}</span>
            </a>
            <a href="${social.facebook}" target="_blank" rel="noopener" class="btn-social btn-facebook" style="padding: 14px 22px;">
              f Facebook
            </a>
          </div>
        </div>

        <!-- Egyszerű visszahívás űrlap -->
        <div class="callback-box">
          <h3 class="font-display text-center" style="font-size: 20px; margin-bottom: 6px;">
            ${cb.title}
          </h3>
          <p class="text-center text-muted" style="font-size: 12px; margin-bottom: 20px;">
            ${cb.subtitle}
          </p>

          <div id="callbackSuccess" style="display:none; text-align:center; padding: 20px;">
            <div style="font-size: 36px; color:#10b981; font-weight:bold;">✓</div>
            <h4 style="font-size: 18px; margin-top: 6px;">${cb.successTitle}</h4>
            <p style="font-size: 13px; color:#a1a1aa;">${cb.successMessage}</p>
          </div>

          <form id="callbackForm">
            <div class="form-group">
              <label>${cb.nameLabel}</label>
              <input type="text" id="cbName" required placeholder="Pl. Kovács Anna" class="form-control" />
            </div>

            <div class="form-group">
              <label>${cb.phoneLabel}</label>
              <input type="tel" id="cbPhone" required placeholder="+36 30 123 4567" class="form-control" />
            </div>

            <div class="form-group">
              <label>${cb.noteLabel}</label>
              <input type="text" id="cbNote" placeholder="Pl. Esküvőnk lesz augusztusban, délután hívj" class="form-control" />
            </div>

            <button type="submit" class="btn-primary btn-block" style="font-size: 14px; margin-top: 8px;">
              ${cb.submitButton}
            </button>
          </form>
        </div>

      </div>
    </section>
  `;
}

/* --- LÁBLÉC & LEBEGŐ GOMB --- */
function renderFooter(data) {
  const { profile, social } = data;
  const footerMount = document.getElementById('footer-mount');
  const floatingMount = document.getElementById('floating-mount');

  if (footerMount) {
    footerMount.innerHTML = `
      <footer class="footer">
        <div class="container">
          <div class="footer-logo font-display">${profile.stageName}</div>
          <div style="color: #a1a1aa; margin-bottom: 8px;">${profile.name} • ${profile.title}</div>
          
          <div class="social-links-bar">
            <a href="${social.facebook}" target="_blank" rel="noopener" class="btn-social btn-facebook">
              f Facebook profil
            </a>
            <a href="${social.instagram}" target="_blank" rel="noopener" class="btn-social btn-instagram">
              📸 Instagram: ${social.instagramHandle}
            </a>
          </div>

          <div style="margin-top: 10px;">Telefon: <a href="tel:${profile.phoneRaw}" style="color:#f59e0b;">${profile.phone}</a> • E-mail: ${profile.email}</div>
          <div style="margin-top: 14px; font-size: 11px;">
            &copy; ${new Date().getFullYear()} ${profile.name}. Minden jog fenntartva.
          </div>
        </div>
      </footer>
    `;
  }

  if (floatingMount) {
    floatingMount.innerHTML = `
      <a href="tel:${profile.phoneRaw}" class="floating-call" title="Azonnali hívás">
        <span>📞 Hívás most</span>
      </a>
    `;
  }
}

/* --- ESEMÉNYKEZELŐK --- */
function setupEventListeners() {
  const btn = document.getElementById('mobileMenuBtn');
  const drawer = document.getElementById('mobileDrawer');
  if (btn && drawer) {
    btn.addEventListener('click', () => {
      drawer.classList.toggle('active');
    });

    drawer.querySelectorAll('.mobile-nav-item').forEach(link => {
      link.addEventListener('click', () => {
        drawer.classList.remove('active');
      });
    });
  }

  const form = document.getElementById('callbackForm');
  const successBox = document.getElementById('callbackSuccess');
  if (form && successBox) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      form.style.display = 'none';
      successBox.style.display = 'block';
    });
  }
}
