/**
 * DJ ROXTAZ - Fő Renderelő Szkript (main.js)
 * 
 * Dinamikus renderelés a SITE_DATA objektumok alapján.
 * Világos, prémium esküvői és rendezvény DJ megjelenés.
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
          <div class="nav-logo-badge">🎵</div>
          <div>
            <div class="nav-logo-text font-display">
              ${profile.stageName} <span style="color:#d97706;">•</span>
            </div>
            <div class="nav-logo-sub">${profile.title}</div>
          </div>
        </a>

        <ul class="nav-links">
          ${linksHtml}
        </ul>

        <div style="display: flex; align-items: center; gap: 10px;">
          <a href="${social.facebook}" target="_blank" rel="noopener" class="btn-social btn-facebook" style="padding: 8px 14px; font-size: 13px;" title="Facebook profil">
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
              f Facebook
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
      <h3 class="font-display">${s.value}</h3>
      <p>${s.label}</p>
    </div>
  `).join('');

  const featuresHtml = hero.cardFeatures.map(f => `
    <div><span class="check">✓</span> <span>${f}</span></div>
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
              <span style="font-weight: 600; font-size: 26px; color: #4b5563; display: block; margin-bottom: 6px;">
                ${hero.greeting}
              </span>
              <span class="gold-gradient-text">
                ${hero.headline}
              </span>
              <span style="font-size: 22px; color: #6b7280; display: block; margin-top: 6px; font-weight: 700;">
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
            <div class="hero-card">
              <div class="hero-card-image-wrap">
                <img src="${hero.cardImage || 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80'}" alt="${profile.name} - ${profile.title}" />
                <div class="hero-card-overlay-badge font-display">
                  ${hero.cardBadge || "Prémium Technika & Hangulat"}
                </div>
                <div class="hero-card-overlay-rating">
                  ★ 5.0 Elégedettség
                </div>
              </div>

              <div class="hero-card-body">
                <div class="hero-card-header">
                  <span style="color: #b45309; font-weight: 800; text-transform: uppercase; font-size: 11px; letter-spacing: 0.5px;">Garantált Színvonal</span>
                  <span>${hero.cardSubtitle || "RCF & Electro-Voice"}</span>
                </div>

                <div class="hero-card-features">
                  ${featuresHtml}
                </div>

                <a href="tel:${profile.phoneRaw}" class="btn-primary btn-block" style="font-size: 14px; padding: 12px;">
                  📞 Telefonos egyeztetés: ${profile.phone}
                </a>
              </div>
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
      <h4 class="font-display">${pill.title}</h4>
      <p>${pill.description}</p>
    </div>
  `).join('');

  container.innerHTML = `
    <section id="rolam" class="section-py" style="background: #fbfaf7; border-top: 1px solid #f3f4f6;">
      <div class="container">
        <div class="about-grid">
          
          <div class="about-text">
            <div class="badge">${about.badge}</div>
            <h2 style="font-size: 38px; margin-bottom: 20px;">
              ${about.title} <br />
              <span class="gold-gradient-text">${about.titleHighlight}</span>
            </h2>
            ${paragraphsHtml}
            <div style="margin-top: 28px;">
              <a href="tel:${profile.phoneRaw}" class="btn-primary" style="font-size: 15px; padding: 13px 26px;">
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
        <a href="tel:${profile.phoneRaw}" class="btn-secondary btn-block" style="text-align: center; font-size: 14px;">
          ${srv.btnText} &rarr;
        </a>
      </div>
    `;
  }).join('');

  container.innerHTML = `
    <section id="szolgaltatasok" class="section-py" style="background: #ffffff; border-top: 1px solid #f3f4f6;">
      <div class="container">
        <div class="text-center" style="max-width: 680px; margin: 0 auto;">
          <div class="badge">${services.badge}</div>
          <h2 style="font-size: 38px; margin-bottom: 14px;">${services.title}</h2>
          <p class="text-muted" style="font-size: 16px;">${services.subtitle}</p>
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
    <section id="galeria" class="section-py" style="background: #f8fafc; border-top: 1px solid #e5e7eb;">
      <div class="container">
        <div class="text-center" style="max-width: 680px; margin: 0 auto;">
          <div class="badge">${gallery.badge}</div>
          <h2 style="font-size: 38px; margin-bottom: 14px;">${gallery.title}</h2>
          <p class="text-muted" style="font-size: 16px;">${gallery.subtitle}</p>
        </div>

        <div class="gallery-grid">
          ${itemsHtml}
        </div>

        <div style="text-align: center; margin-top: 40px; display: flex; flex-direction: column; align-items: center; gap: 14px;">
          <p class="text-muted" style="font-size: 15px; font-weight: 500;">${gallery.socialCtaText}</p>
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
    <section id="menetrend" class="section-py" style="background: #ffffff; border-top: 1px solid #f3f4f6;">
      <div class="container">
        <div class="text-center" style="max-width: 680px; margin: 0 auto;">
          <div class="badge">${workflow.badge}</div>
          <h2 style="font-size: 38px; margin-bottom: 14px;">${workflow.title}</h2>
          <p class="text-muted" style="font-size: 16px;">${workflow.subtitle}</p>
        </div>

        <div class="steps-grid">
          ${stepsHtml}
        </div>

        <div class="text-center" style="margin-top: 40px;">
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
        <h4 class="font-display">${g.title}</h4>
        <p>${g.desc}</p>
      </div>
    </div>
  `).join('');

  container.innerHTML = `
    <section id="zene" class="section-py" style="background: #fbfaf7; border-top: 1px solid #e5e7eb;">
      <div class="container">
        <div class="text-center" style="max-width: 680px; margin: 0 auto;">
          <div class="badge">${music.badge}</div>
          <h2 style="font-size: 38px; margin-bottom: 14px;">${music.title}</h2>
          <p class="text-muted" style="font-size: 16px;">${music.subtitle}</p>
        </div>

        <div class="genres-grid">
          ${genresHtml}
        </div>

        <div style="margin-top: 30px; background: #fffbeb; border: 1.5px solid #fde68a; border-radius: 16px; padding: 20px; text-align: center; font-size: 14px; color: #92400e;">
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
      <div class="review-author font-display">
        ${rev.author}
        <span class="review-loc font-sans"> • ${rev.role}, ${rev.location}</span>
      </div>
    </div>
  `).join('');

  container.innerHTML = `
    <section id="velemenyek" class="section-py" style="background: #ffffff; border-top: 1px solid #f3f4f6;">
      <div class="container">
        <div class="text-center" style="max-width: 680px; margin: 0 auto;">
          <div class="badge">${testimonials.badge}</div>
          <h2 style="font-size: 38px; margin-bottom: 14px;">${testimonials.title}</h2>
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
    <section id="kapcsolat" class="section-py" style="background: #fbfaf7; border-top: 1px solid #e5e7eb;">
      <div class="container">
        
        <div class="text-center" style="max-width: 680px; margin: 0 auto 35px;">
          <div class="badge">${contact.badge}</div>
          <h2 style="font-size: 38px; margin-bottom: 14px;">${contact.title}</h2>
          <p class="text-muted" style="font-size: 16px;">${contact.subtitle}</p>
        </div>

        <!-- Nagy telefonos kiemelt kártya -->
        <div class="contact-box">
          <div style="font-size: 44px; margin-bottom: 10px;">📞</div>
          <div style="font-size: 13px; text-transform: uppercase; letter-spacing: 1px; color: #92400e; font-weight: 800;">
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
              <span style="color:#10b981;">💬</span> ${contact.whatsappButtonText}
            </a>
            <a href="${social.facebook}" target="_blank" rel="noopener" class="btn-social btn-facebook" style="padding: 14px 22px;">
              f Facebook
            </a>
          </div>
        </div>

        <!-- Egyszerű visszahívás űrlap -->
        <div class="callback-box">
          <h3 class="font-display text-center" style="font-size: 22px; margin-bottom: 8px;">
            ${cb.title}
          </h3>
          <p class="text-center text-muted" style="font-size: 13px; margin-bottom: 24px;">
            ${cb.subtitle}
          </p>

          <div id="callbackSuccess" style="display:none; text-align:center; padding: 24px;">
            <div style="font-size: 40px; color:#10b981; font-weight:bold;">✓</div>
            <h4 class="font-display" style="font-size: 20px; margin-top: 8px;">${cb.successTitle}</h4>
            <p style="font-size: 14px; color:#6b7280; margin-top: 4px;">${cb.successMessage}</p>
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

            <button type="submit" class="btn-primary btn-block" style="font-size: 15px; margin-top: 10px; padding: 15px;">
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
          <div style="color: #9ca3af; margin-bottom: 10px; font-size: 14px;">${profile.title} • <span style="color:#f59e0b;">${profile.domain}</span></div>
          
          <div class="social-links-bar">
            <a href="${social.facebook}" target="_blank" rel="noopener" class="btn-social btn-facebook">
              f Facebook profil
            </a>
            <a href="${social.instagram}" target="_blank" rel="noopener" class="btn-social btn-instagram">
              📸 Instagram: ${social.instagramHandle}
            </a>
          </div>

          <div style="margin-top: 14px; color: #d1d5db; font-size: 14px;">
            Telefon: <a href="tel:${profile.phoneRaw}" style="color:#f59e0b; font-weight:700;">${profile.phone}</a> • E-mail: <a href="mailto:${profile.email}" style="color:#f59e0b;">${profile.email}</a> • Web: <span style="color:#f59e0b;">${profile.domain}</span>
          </div>
          <div style="margin-top: 18px; font-size: 12px; color: #6b7280;">
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
