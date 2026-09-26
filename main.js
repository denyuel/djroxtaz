/**
 * DJ ROXTAZ / NYÁRI ZSOLT - Fő Renderelő Szkript (main.js)
 * 
 * Dinamikus renderelés a SITE_DATA objektumok alapján.
 * Prémium, modern esküvői és rendezvény DJ megjelenés.
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
          <div class="nav-logo-text font-serif">NYÁRI ZSOLT</div>
          <div class="nav-logo-sub">ESKÜVŐI & RENDEZVÉNY DJ</div>
        </a>

        <ul class="nav-links">
          ${linksHtml}
        </ul>

        <div class="nav-right-actions">
          <a href="${social.facebook}" target="_blank" rel="noopener" class="nav-social-btn" title="Facebook profil">
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
          </a>
          <a href="tel:${profile.phoneRaw}" class="nav-phone-pill">
            <span class="phone-icon">📞</span>
            <span class="phone-number">${profile.phone}</span>
          </a>
        </div>

        <button id="mobileMenuBtn" class="mobile-menu-btn" aria-label="Menü nyitása">☰</button>
      </div>

      <div id="mobileDrawer" class="mobile-nav-drawer">
        ${mobileLinksHtml}
        <div style="padding-top: 15px; display: flex; flex-direction: column; gap: 10px;">
          <a href="tel:${profile.phoneRaw}" class="btn-gold btn-block" style="text-align:center;">
            📞 Hívás: ${profile.phone}
          </a>
          <div style="display: flex; gap: 10px;">
            <a href="${social.facebook}" target="_blank" rel="noopener" class="btn-hero-social btn-block" style="text-align:center; justify-content:center;">
              Facebook profil
            </a>
            <a href="${social.instagram}" target="_blank" rel="noopener" class="btn-hero-social btn-block" style="text-align:center; justify-content:center;">
              Instagram
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
    <div class="hero-stat-card">
      <div class="stat-number font-display">${s.value}</div>
      <div class="stat-text">${s.label}</div>
    </div>
  `).join('');

  const featuresHtml = hero.features.map(f => `
    <span class="hero-feat-item">✓ ${f}</span>
  `).join('');

  container.innerHTML = `
    <section class="hero-section">
      <div class="hero-bg-media" style="background-image: url('${hero.bgImage}');"></div>
      <div class="hero-gradient-overlay"></div>

      <div class="container hero-container">
        
        <div class="hero-badge">
          <span class="sparkle">✦</span>
          <span>${hero.seasonBadge}</span>
          <span class="sparkle">✦</span>
        </div>

        <div class="hero-tagline">${hero.tagline}</div>

        <h1 class="hero-title font-serif">
          ${hero.title} <br />
          <span class="gold-shimmer-text">${hero.titleHighlight}</span>
        </h1>

        <p class="hero-description">
          ${hero.description}
        </p>

        <div class="hero-cta-group">
          <a href="${hero.primaryCta.action}" class="btn-gold-large">
            <span style="font-size: 20px;">📞</span>
            <span>${hero.primaryCta.text}</span>
          </a>
          <a href="${hero.secondaryCta.action}" target="_blank" rel="noopener" class="btn-glass-large">
            <span class="whatsapp-live-dot"></span>
            <span>${hero.secondaryCta.text}</span>
          </a>
          <a href="${social.facebook}" target="_blank" rel="noopener" class="btn-glass-icon" title="Facebook profil">
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
          </a>
        </div>

        <div class="hero-stats-glass">
          ${statsHtml}
        </div>

        <div class="hero-features-bar">
          ${featuresHtml}
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
    <section id="rolam" class="section-py bg-light-warm">
      <div class="container">
        <div class="about-grid">
          
          <div class="about-text">
            <div class="section-badge">${about.badge}</div>
            <h2 class="section-title font-serif">
              ${about.title} <br />
              <span class="gold-gradient-text">${about.titleHighlight}</span>
            </h2>
            <div class="about-paragraphs">
              ${paragraphsHtml}
            </div>
            <div style="margin-top: 30px;">
              <a href="tel:${profile.phoneRaw}" class="btn-gold" style="padding: 14px 28px;">
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
    const listItems = srv.features.map(f => `<li>✓ ${f}</li>`).join('');
    return `
      <div class="service-card">
        <div>
          <div class="service-icon">${srv.icon}</div>
          <h3 class="font-serif">${srv.title}</h3>
          <p class="service-desc">${srv.description}</p>
          <ul class="service-list">
            ${listItems}
          </ul>
        </div>
        <a href="tel:${profile.phoneRaw}" class="btn-outline-gold btn-block" style="text-align: center;">
          ${srv.btnText} &rarr;
        </a>
      </div>
    `;
  }).join('');

  container.innerHTML = `
    <section id="szolgaltatasok" class="section-py bg-white">
      <div class="container">
        <div class="text-center section-header">
          <div class="section-badge">${services.badge}</div>
          <h2 class="section-title font-serif">${services.title}</h2>
          <p class="section-subtitle">${services.subtitle}</p>
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
        <h4 class="gallery-title font-serif">${item.title}</h4>
      </div>
    </div>
  `).join('');

  container.innerHTML = `
    <section id="galeria" class="section-py bg-light-warm">
      <div class="container">
        <div class="text-center section-header">
          <div class="section-badge">${gallery.badge}</div>
          <h2 class="section-title font-serif">${gallery.title}</h2>
          <p class="section-subtitle">${gallery.subtitle}</p>
        </div>

        <div class="gallery-grid">
          ${itemsHtml}
        </div>

        <div style="text-align: center; margin-top: 45px; display: flex; flex-direction: column; align-items: center; gap: 16px;">
          <p class="text-muted" style="font-size: 15px; font-weight: 500;">${gallery.socialCtaText}</p>
          <div style="display: flex; gap: 14px; flex-wrap: wrap; justify-content: center;">
            <a href="${social.facebook}" target="_blank" rel="noopener" class="btn-social-clean">
              f Facebook: ${social.facebookName}
            </a>
            <a href="${social.instagram}" target="_blank" rel="noopener" class="btn-social-clean">
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
      <div class="step-num font-serif">${step.num}</div>
      <h3 class="font-serif">${step.title}</h3>
      <p>${step.description}</p>
    </div>
  `).join('');

  container.innerHTML = `
    <section id="menetrend" class="section-py bg-white">
      <div class="container">
        <div class="text-center section-header">
          <div class="section-badge">${workflow.badge}</div>
          <h2 class="section-title font-serif">${workflow.title}</h2>
          <p class="section-subtitle">${workflow.subtitle}</p>
        </div>

        <div class="steps-grid">
          ${stepsHtml}
        </div>

        <div class="text-center" style="margin-top: 45px;">
          <a href="tel:${profile.phoneRaw}" class="btn-gold-large">
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
    <section id="zene" class="section-py bg-light-warm">
      <div class="container">
        <div class="text-center section-header">
          <div class="section-badge">${music.badge}</div>
          <h2 class="section-title font-serif">${music.title}</h2>
          <p class="section-subtitle">${music.subtitle}</p>
        </div>

        <div class="genres-grid">
          ${genresHtml}
        </div>

        <div class="guarantee-box">
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
      <div class="review-author font-serif">
        ${rev.author}
        <span class="review-loc font-sans"> • ${rev.role}, ${rev.location}</span>
      </div>
    </div>
  `).join('');

  container.innerHTML = `
    <section id="velemenyek" class="section-py bg-white">
      <div class="container">
        <div class="text-center section-header">
          <div class="section-badge">${testimonials.badge}</div>
          <h2 class="section-title font-serif">${testimonials.title}</h2>
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
    <section id="kapcsolat" class="section-py bg-light-warm">
      <div class="container">
        
        <div class="text-center section-header">
          <div class="section-badge">${contact.badge}</div>
          <h2 class="section-title font-serif">${contact.title}</h2>
          <p class="section-subtitle">${contact.subtitle}</p>
        </div>

        <!-- Luxus telefonos kártya -->
        <div class="contact-box">
          <div class="contact-icon">📞</div>
          <div class="contact-box-title">
            ${contact.boxTitle}
          </div>
          
          <div>
            <a href="tel:${profile.phoneRaw}" class="phone-hero-link font-display">
              ${profile.phone}
            </a>
          </div>

          <div class="contact-actions-row">
            <a href="tel:${profile.phoneRaw}" class="btn-gold-large">
              <span>📞 ${contact.callButtonText}</span>
            </a>
            <a href="${profile.whatsappUrl}" target="_blank" rel="noopener" class="btn-glass-dark">
              <span>💬 ${contact.whatsappButtonText}</span>
            </a>
            <a href="${social.facebook}" target="_blank" rel="noopener" class="btn-social-clean" style="padding: 14px 24px;">
              f Facebook profil
            </a>
          </div>
        </div>

        <!-- Egyszerű visszahívás űrlap -->
        <div class="callback-box">
          <h3 class="font-serif text-center" style="font-size: 24px; margin-bottom: 8px; color: #0f172a;">
            ${cb.title}
          </h3>
          <p class="text-center text-muted" style="font-size: 14px; margin-bottom: 24px;">
            ${cb.subtitle}
          </p>

          <div id="callbackSuccess" style="display:none; text-align:center; padding: 24px;">
            <div style="font-size: 44px; color:#10b981; font-weight:bold;">✓</div>
            <h4 class="font-serif" style="font-size: 22px; margin-top: 8px;">${cb.successTitle}</h4>
            <p style="font-size: 14px; color:#64748b; margin-top: 4px;">${cb.successMessage}</p>
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

            <button type="submit" class="btn-gold btn-block" style="font-size: 16px; margin-top: 10px; padding: 16px;">
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
          <div class="footer-logo font-serif">${profile.name}</div>
          <div style="color: #94a3b8; margin-bottom: 12px; font-size: 13px; letter-spacing: 1.5px; text-transform: uppercase;">
            ${profile.title} • <span style="color:#d4af37;">${profile.domain}</span>
          </div>
          
          <div class="social-links-bar">
            <a href="${social.facebook}" target="_blank" rel="noopener" class="footer-social-link">
              f Facebook
            </a>
            <a href="${social.instagram}" target="_blank" rel="noopener" class="footer-social-link">
              📸 Instagram
            </a>
          </div>

          <div style="margin-top: 16px; color: #cbd5e1; font-size: 14px;">
            Telefon: <a href="tel:${profile.phoneRaw}" style="color:#e5c07b; font-weight:700;">${profile.phone}</a> • E-mail: <a href="mailto:${profile.email}" style="color:#e5c07b;">${profile.email}</a>
          </div>
          <div style="margin-top: 20px; font-size: 12px; color: #64748b;">
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
