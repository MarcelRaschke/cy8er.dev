import './style.css'

document.querySelector('#app').innerHTML = `
  <div class="site-shell">
    <header class="topbar">
      <a class="brand" href="#home">cy8er.dev</a>
      <nav aria-label="Primary navigation">
        <a href="#services">Services</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>

    <main id="home">
      <section class="hero panel">
        <p class="eyebrow">Secure by design. Built to last.</p>
        <h1>Web experiences with a security-first engineering mindset.</h1>
        <p class="lede">
          Marcel Raschke designs and ships fast, resilient websites focused on performance,
          accessibility, and maintainability.
        </p>
        <div class="hero-actions">
          <a class="button primary" href="#projects">View projects</a>
          <a class="button secondary" href="#contact">Start a conversation</a>
        </div>
        <ul class="hero-stats" aria-label="Highlights">
          <li><strong>Performance</strong><span>Fast loading, clean delivery</span></li>
          <li><strong>Security</strong><span>Defensive defaults and safe integrations</span></li>
          <li><strong>Clarity</strong><span>Simple structure for teams and clients</span></li>
        </ul>
      </section>

      <section id="services" class="panel section">
        <div class="section-heading">
          <p class="eyebrow">What I do</p>
          <h2>From idea to production-ready website.</h2>
        </div>
        <div class="card-grid">
          <article class="card">
            <h3>Website strategy</h3>
            <p>Shape content, structure, and user journeys before code is written.</p>
          </article>
          <article class="card">
            <h3>Frontend development</h3>
            <p>Build responsive interfaces with modern tooling and maintainable patterns.</p>
          </article>
          <article class="card">
            <h3>Security reviews</h3>
            <p>Reduce risk early with practical hardening and dependency awareness.</p>
          </article>
        </div>
      </section>

      <section id="projects" class="panel section">
        <div class="section-heading">
          <p class="eyebrow">Selected focus areas</p>
          <h2>Work centered on trust, speed, and strong foundations.</h2>
        </div>
        <div class="project-list">
          <article class="project-card">
            <span>01</span>
            <div>
              <h3>Portfolio platforms</h3>
              <p>Minimal, fast-loading experiences that let the content and craft stand out.</p>
            </div>
          </article>
          <article class="project-card">
            <span>02</span>
            <div>
              <h3>Security-conscious launches</h3>
              <p>Deployment-ready sites with sensible defaults, metadata, and clean asset delivery.</p>
            </div>
          </article>
          <article class="project-card">
            <span>03</span>
            <div>
              <h3>Technical refreshes</h3>
              <p>Upgrade outdated web presences into accessible, modern, and easier-to-manage systems.</p>
            </div>
          </article>
        </div>
      </section>

      <section id="contact" class="panel section cta">
        <div>
          <p class="eyebrow">Let's build</p>
          <h2>Need a sharp website with a calm, reliable delivery process?</h2>
        </div>
        <a class="button primary" href="mailto:hello@cy8er.dev">hello@cy8er.dev</a>
      </section>
    </main>

    <footer class="footer">
      <p>© <span id="year"></span> cy8er.dev</p>
      <a href="https://github.com/MarcelRaschke" target="_blank" rel="noreferrer">GitHub</a>
    </footer>
  </div>
`

document.querySelector('#year').textContent = new Date().getFullYear()
