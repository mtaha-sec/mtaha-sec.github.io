/* ======================
THEME TOGGLE (Dark / Light)
====================== */
const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');

function syncThemeIcon() {
  const current = document.documentElement.getAttribute('data-theme') || 'dark';
  if (themeIcon) {
    themeIcon.className = current === 'light' ? 'fas fa-moon' : 'fas fa-sun';
  }
}

syncThemeIcon();

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme') || 'dark';
    const next = current === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
    syncThemeIcon();
  });
}

/* ======================
SAFE DOM REFERENCES
====================== */
document.body.classList.add('js-loaded');

const loaderEl = document.getElementById('loader');
const loaderFill = document.getElementById('loaderFill');
const loaderPct = document.getElementById('loaderPct');
const scrollProgressEl = document.getElementById('scrollProgress');

const cursorEl = document.getElementById('cursor');
const cursorRing = document.getElementById('cursorRing');

const navbar = document.getElementById('navbar');
const navItems = document.querySelectorAll('.nav-item');
const sections = document.querySelectorAll('section[id]');

const burger = document.getElementById('burger');
const mobileOverlay = document.getElementById('mobileOverlay');
const mobLinks = document.querySelectorAll('.mob-link');

const bmCursor = document.getElementById('bmCursor');

/* ======================
LOADER
====================== */
if (loaderEl && loaderFill && loaderPct) {
  let pct = 0;

  const loaderInterval = setInterval(() => {
    pct += Math.random() * 18;

    if (pct >= 100) {
      pct = 100;
      clearInterval(loaderInterval);
      setTimeout(() => {
        loaderEl.classList.add('done');
      }, 400);
    }

    loaderFill.style.width = `${pct}%`;
    loaderPct.textContent = `${Math.floor(pct)}%`;
  }, 100);
}

/* ======================
SCROLL PROGRESS
====================== */
window.addEventListener(
  'scroll',
  () => {
    if (!scrollProgressEl) return;

    const total = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);
    const progress = Math.min((window.scrollY / total) * 100, 100);

    scrollProgressEl.style.width = `${progress}%`;
  },
  { passive: true }
);

/* ======================
CUSTOM CURSOR
====================== */
if (cursorEl && cursorRing) {
  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let ringX = mouseX;
  let ringY = mouseY;

  cursorEl.style.left = mouseX + 'px';
  cursorEl.style.top = mouseY + 'px';
  cursorEl.style.transform = 'translate(-50%, -50%)';
  cursorRing.style.left = ringX + 'px';
  cursorRing.style.top = ringY + 'px';
  cursorRing.style.transform = 'translate(-50%, -50%)';

  document.addEventListener('mousemove', e => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    // Use clientX/Y which are always in viewport coordinates, unaffected by RTL
    cursorEl.style.left = mouseX + 'px';
    cursorEl.style.top = mouseY + 'px';
    cursorEl.style.transform = 'translate(-50%, -50%)';
  });

  function animRing() {
    ringX += (mouseX - ringX) * 0.12;
    ringY += (mouseY - ringY) * 0.12;
    cursorRing.style.left = ringX + 'px';
    cursorRing.style.top = ringY + 'px';
    cursorRing.style.transform = 'translate(-50%, -50%)';
    requestAnimationFrame(animRing);
  }

  animRing();

  document
    .querySelectorAll(
      'a, button, .btn-magnetic, .pill, .project-item, .contact-link, .skill-row, .nav-item, .lang-btn, .back-top'
    )
    .forEach(el => {
      el.addEventListener('mouseenter', () => cursorRing.classList.add('hovered'));
      el.addEventListener('mouseleave', () => cursorRing.classList.remove('hovered'));
    });
}

/* ======================
NAVBAR SCROLL
====================== */
if (navbar) {
  window.addEventListener(
    'scroll',
    () => {
      navbar.classList.toggle('scrolled', window.scrollY > 60);

      let current = '';

      sections.forEach(sec => {
        const top = sec.offsetTop - 120;
        if (window.scrollY >= top) current = sec.getAttribute('id');
      });

      navItems.forEach(item => {
        item.classList.toggle('active', item.getAttribute('href') === `#${current}`);
      });
    },
    { passive: true }
  );
}

/* ======================
BURGER / MOBILE MENU
====================== */
if (burger && mobileOverlay) {
  burger.addEventListener('click', () => {
    burger.classList.toggle('open');
    mobileOverlay.classList.toggle('open');
    document.body.style.overflow = mobileOverlay.classList.contains('open') ? 'hidden' : '';
  });

  mobLinks.forEach(link => {
    link.addEventListener('click', () => {
      burger.classList.remove('open');
      mobileOverlay.classList.remove('open');
      document.body.style.overflow = '';
    });
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && mobileOverlay.classList.contains('open')) {
      burger.classList.remove('open');
      mobileOverlay.classList.remove('open');
      document.body.style.overflow = '';
    }
  });
}

/* ======================
MAGNETIC BUTTONS
====================== */
document.querySelectorAll('.btn-magnetic').forEach(btn => {
  // Skip contact-links since they have their own hover translateX effect
  const isContactLink = btn.classList.contains('contact-link');

  btn.addEventListener('mousemove', e => {
    const rect = btn.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = (e.clientX - cx) * 0.35;
    const dy = (e.clientY - cy) * 0.35;
    const inner = btn.querySelector('.btn-inner');

    if (!isContactLink) {
      btn.style.transform = `translate(${dx * 0.5}px, ${dy * 0.5}px)`;
    }
    if (inner) inner.style.transform = `translate(${dx}px, ${dy}px)`;
  });

  btn.addEventListener('mouseleave', () => {
    const inner = btn.querySelector('.btn-inner');
    if (!isContactLink) btn.style.transform = '';
    if (inner) inner.style.transform = '';
  });
});

/* ======================
SCROLL ANIMATIONS
====================== */
const animEls = document.querySelectorAll('.anim-fade-up');

if (animEls.length) {
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
  );

  animEls.forEach((el, i) => {
    el.style.transitionDelay = `${(i % 5) * 0.08}s`;
    observer.observe(el);
  });
}

/* ======================
COUNTER ANIMATION
====================== */
function animateCounter(el) {
  const target = parseInt(el.dataset.val, 10) || 0;
  const prefix = el.dataset.prefix || '';
  const suffix = el.dataset.suffix || '';
  let start = 0;

  const duration = 1800;
  const step = 16;
  const increment = target / (duration / step);

  const timer = setInterval(() => {
    start += increment;

    if (start >= target) {
      start = target;
      clearInterval(timer);
    }

    if (el.dataset.decimal) {
      const decimals = parseInt(el.dataset.decimal);
      const divisor = Math.pow(10, decimals);
      el.textContent = `${prefix}${(start / divisor).toFixed(decimals)}${suffix}`;
    } else if (prefix === '0.') {
      el.textContent = `0.${Math.floor(start).toString().padStart(2, '0')}`;
    } else {
      el.textContent = `${prefix}${Math.floor(start)}${suffix}`;
    }
  }, step);
}

const counterTargets = document.querySelectorAll('.hs-num');

if (counterTargets.length) {
  const counterObserver = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          counterObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  counterTargets.forEach(el => counterObserver.observe(el));
}

/* ======================
SKILL BARS ANIMATE
====================== */
const barFills = document.querySelectorAll('.bar-fill');

if (barFills.length) {
  const barObserver = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const target = entry.target;
          // Store target width before resetting (must be inline style for reliability)
          const width = target.style.width || target.getAttribute('style')?.match(/width:\s*([\d.]+%)/)?.[1] || getComputedStyle(target).width;
          const safeWidth = width && width !== '0px' ? width : '0%';
          target.dataset.targetWidth = safeWidth;

          target.style.width = '0%';
          target.style.transition = 'none';

          setTimeout(() => {
            target.style.transition = 'width 1.4s cubic-bezier(0.25,0.46,0.45,0.94)';
            target.style.width = target.dataset.targetWidth;
          }, 100);

          barObserver.unobserve(target);
        }
      });
    },
    { threshold: 0.3 }
  );

  barFills.forEach(el => barObserver.observe(el));
}

/* ======================
NOTEBOOK BARS ANIMATE
====================== */
const nbFills = document.querySelectorAll('.nb-fill');

if (nbFills.length) {
  const nbObserver = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const target = entry.target;
          const width = target.style.width || getComputedStyle(target).width;

          target.style.width = '0%';

          setTimeout(() => {
            target.style.transition = 'width 1.2s cubic-bezier(0.25,0.46,0.45,0.94)';
            target.style.width = width;
          }, 200);

          nbObserver.unobserve(target);
        }
      });
    },
    { threshold: 0.3 }
  );

  nbFills.forEach(el => nbObserver.observe(el));
}

/* ======================
BROWSER MOCKUP CURSOR
====================== */
if (bmCursor) {
  const positions = [
    { top: '50%', left: '50%' },
    { top: '28%', left: '65%' },
    { top: '65%', left: '35%' },
    { top: '20%', left: '25%' },
    { top: '75%', left: '70%' },
    { top: '40%', left: '55%' }
  ];

  let bmIdx = 0;

  setInterval(() => {
    bmIdx = (bmIdx + 1) % positions.length;
    bmCursor.style.transition = 'top 1s ease, left 1s ease';
    bmCursor.style.top = positions[bmIdx].top;
    bmCursor.style.left = positions[bmIdx].left;
  }, 1800);
}

/* ======================
SMOOTH SCROLL
====================== */
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const id = link.getAttribute('href');

    if (!id || id === '#') return;

    const target = document.querySelector(id);
    if (!target) return;

    e.preventDefault();

    const offset = target.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({
      top: offset,
      behavior: 'smooth'
    });
  });
});

/* ======================
LANGUAGE SWITCHER (i18n)
====================== */
const translations = {
  fr: {
    'nav.about': 'À propos',
    'nav.featured': 'Showcase',
    'nav.skills': 'Skills',
    'nav.projects': 'Projets',
    'nav.parcours': 'Parcours',
    'nav.contact': 'Contact',
    'nav.cv': 'CV',

    'hero.tag': 'En stage · SOC & Pentest',
    'hero.role1': 'Cybersécurité',
    'hero.role2': 'Pentest & SOC',
    'hero.role3': 'Ingénieur Informatique',
    'hero.desc': 'Ingénieur en Cybersécurité · Je construis des systèmes de sécurité complets — de l\'audit et du pentest jusqu\'au monitoring SOC et à la réponse à incident.',
    'hero.btn1': 'Voir mes projets <i class="fas fa-arrow-right"></i>',
    'hero.btn2': 'Me contacter',
    'hero.stat1': 'Projets',
    'hero.stat2': 'Outils Sécu',
    'hero.stat3': 'Expertise Réseau & Sécu',
    'hero.stat4': 'Stages',
    'hero.fc3val': 'En stage',

    'about.title': 'Cyber-Résilient',
    'about.p1': 'Je m\'appelle <strong>Mohamed Taha Aboumehdi Hassani</strong>, ingénieur en cybersécurité. Ce qui me passionne ? La sécurité offensive et défensive — pentest, détection d\'intrusions, réponse à incident et durcissement des infrastructures.',
    'about.p2': 'Actuellement en stage en <strong>Sécurité des Systèmes d\'Information</strong> (SOC & Pentest). Disponible pour de nouvelles opportunités à partir de <strong>septembre 2026</strong>.',
    'about.chip1': '<i class="fas fa-map-marker-alt"></i> France',
    'about.chip2': '<i class="fas fa-graduation-cap"></i> Ingénieur — Cybersécurité',
    'about.chip3': '<i class="fas fa-language"></i> FR · EN (C1) · AR',
    'about.chip4': '<i class="fas fa-briefcase"></i> Stage SOC · 2026',
    'about.badge': 'En Stage · SOC',

    'featured.title': 'Phares',
    'proj1.title': 'SOC Dashboard — Détection d\'Intrusions',
    'proj1.desc': 'Pipeline de détection end-to-end. Ingestion et corrélation de logs, comparaison Suricata vs Snort. Dashboard SIEM (ELK), alerting automatisé et playbooks de réponse à incident.',
    'proj2.title': 'Pentest Application Web',
    'proj2.desc': 'Test d\'intrusion complet selon la méthodologie OWASP Top 10 : SQLi, XSS, IDOR et failles d\'authentification. Rapport détaillé avec scoring CVSS et recommandations.',
    'feat.github': 'Voir sur GitHub <i class="fab fa-github"></i>',

    'skills.title': 'Stack',
    'skills.s1': 'Langages',
    'skills.s2': 'Sécurité Offensive',
    'skills.s3': 'SOC & Monitoring',
    'skills.s4': 'Réseaux & Systèmes',
    'skills.s5': 'Outils & Méthodes',

    'projects.title': 'Réalisations',
    'proj1.long': 'J\'ai construit un pipeline de détection complet : ingestion et corrélation de logs, comparaison Suricata vs Snort (score 0.94). Le tout accessible via un dashboard SIEM (ELK) containerisé avec Docker, avec alerting automatisé.',
    'proj2.long': 'Test d\'intrusion complet sur une application web selon la méthodologie OWASP Top 10 : SQLi, XSS, IDOR et failles d\'authentification. Rapport détaillé avec scoring CVSS et recommandations de remédiation à destination du client.',
    'proj3.title': 'Simulation de Phishing & Sensibilisation',
    'proj3.long': 'Comment mesurer la vulnérabilité humaine face au phishing ? J\'ai conçu une campagne de simulation avec GoPhish sur un environnement contrôlé, mesuré les taux de clic et de signalement, puis proposé un programme de sensibilisation adapté aux résultats.',
    'proj4.title': 'Sécurisation d\'Infrastructure Cloud',
    'proj4.long': 'Durcissement d\'une infrastructure cloud AWS : gestion fine des rôles IAM, chiffrement des données au repos et en transit, sécurisation de conteneurs Docker et mise en place d\'un scan continu des images.',
    'proj5.title': 'Analyse de Malware en Sandbox',
    'proj5.long': 'Analyse statique et dynamique d\'échantillons de malwares en environnement isolé. Reverse engineering avec Ghidra, extraction d\'IOCs et rédaction de rapports d\'analyse comportementale.',
    'proj6.title': 'Audit de Sécurité Active Directory',
    'proj6.long': 'Audit d\'un environnement Active Directory de test avec BloodHound : cartographie des chemins d\'attaque, détection de mauvaises configurations et recommandations de durcissement.',
    'proj7.title': 'Système de Détection d\'Intrusion (IDS)',
    'proj7.long': 'Déploiement et configuration d\'un IDS réseau (Suricata/Snort) avec règles personnalisées. Tests sur trafic malveillant simulé pour évaluer le taux de détection et réduire les faux positifs.',
    'proj8.title': 'Bibliothèque de Cryptographie Appliquée',
    'proj8.long': 'Implémentation en C des algorithmes RSA et AES à des fins pédagogiques : génération de clés, chiffrement/déchiffrement, et analyse des vulnérabilités liées à une implémentation faible.',
    'proj9.title': 'CTF Write-ups — HackTheBox / TryHackMe',
    'proj9.long': 'Collection de write-ups détaillés sur des machines HackTheBox et TryHackMe : énumération, exploitation, élévation de privilèges et post-exploitation.',
    'proj10.title': 'Scanner de Vulnérabilités Automatisé',
    'proj10.long': 'Un scanner Python combinant Nmap et des bases CVE pour identifier automatiquement les vulnérabilités d\'un parc de machines. Génération de rapports priorisés par score CVSS.',

    'exp.title': 'Expérience & Formation',
    'xp.badge': 'Expérience',
    'xp.t2': 'Stagiaire SOC & Pentest',
    'xp.l3': 'Surveillance et analyse d\'alertes SIEM, qualification des incidents et rédaction de rapports d\'investigation.',
    'xp.l4': 'Participation à des tests d\'intrusion internes et à la mise en place de règles de détection.',
    'xp.t1': 'Stagiaire Sécurité Réseau & Systèmes',
    'xp.l1': 'Durcissement de serveurs Linux/Windows, mise en place de politiques de mots de passe et de pare-feux applicatifs.',
    'xp.l2': 'Audits de configuration et préparation de rapports de conformité pour la direction technique.',
    'edu.badge': 'Formation',
    'edu.t1': 'Cycle Ingénieur en Cybersécurité',
    'edu.d1': 'Pentest, Réponse à incident, Cryptographie, Sécurité réseau, SOC/SIEM, Architecture SI, Gestion de projets (Agile/Scrum).',
    'edu.t2': 'Classes Préparatoires MPSI / MP',
    'edu.d2': 'Algèbre linéaire, Analyse, Algorithmique, Python, Statistiques.',
    'edu.t3': 'Baccalauréat Sciences Mathématiques',
    'edu.mention': 'Mention Très Bien ✦',

    'contact.title': 'Travaillons<br>Ensemble',
    'contact.sub': 'Actuellement en stage — SOC & Pentest.<br>Ouvert aux opportunités en cybersécurité.<br>N\'hésitez pas à me contacter !',
    'contact.cv': 'Télécharger CV <i class="fas fa-download"></i>',

    'footer.text': '© 2026 Mohamed Taha Aboumehdi Hassani — GitHub Pages',
    'about.prefix': 'Ingénieur',
    'featured.prefix': 'Projets',
    'skills.prefix': 'Mon',
    'projects.prefix': 'Mes',
    'exp.prefix': ''
  },

  en: {
    'nav.about': 'About',
    'nav.featured': 'Showcase',
    'nav.skills': 'Skills',
    'nav.projects': 'Projects',
    'nav.parcours': 'Journey',
    'nav.contact': 'Contact',
    'nav.cv': 'Resume',

    'hero.tag': 'Currently interning · SOC & Pentest',
    'hero.role1': 'Cybersecurity',
    'hero.role2': 'Pentest & SOC',
    'hero.role3': 'Computer Engineer',
    'hero.desc': 'Cybersecurity Engineer · I build end-to-end security systems — from audits and penetration testing to SOC monitoring and incident response.',
    'hero.btn1': 'View my projects <i class="fas fa-arrow-right"></i>',
    'hero.btn2': 'Contact me',
    'hero.stat1': 'Projects',
    'hero.stat2': 'Security Tools',
    'hero.stat3': 'Network & Security Expertise',
    'hero.stat4': 'Internships',
    'hero.fc3val': 'Internship',

    'about.title': 'Cyber-Resilient',
    'about.p1': 'I\'m <strong>Mohamed Taha Aboumehdi Hassani</strong>, a cybersecurity engineer. What drives me? Offensive and defensive security — penetration testing, intrusion detection, incident response and infrastructure hardening.',
    'about.p2': 'Currently interning in <strong>Information Systems Security</strong> (SOC & Pentest). Available for new opportunities from <strong>September 2026</strong>.',
    'about.chip1': '<i class="fas fa-map-marker-alt"></i> France',
    'about.chip2': '<i class="fas fa-graduation-cap"></i> Engineer — Cybersecurity',
    'about.chip3': '<i class="fas fa-language"></i> FR · EN (C1) · AR',
    'about.chip4': '<i class="fas fa-briefcase"></i> SOC Internship · 2026',
    'about.badge': 'Interning · SOC',

    'featured.title': 'Projects',
    'proj1.title': 'SOC Dashboard — Intrusion Detection',
    'proj1.desc': 'End-to-end detection pipeline. Log ingestion and correlation, Suricata vs Snort comparison. SIEM dashboard (ELK), automated alerting and incident response playbooks.',
    'proj2.title': 'Web Application Penetration Test',
    'proj2.desc': 'Full penetration test following the OWASP Top 10 methodology: SQLi, XSS, IDOR and authentication flaws. Detailed report with CVSS scoring and remediation recommendations.',
    'feat.github': 'View on GitHub <i class="fab fa-github"></i>',

    'skills.title': 'Stack',
    'skills.s1': 'Languages',
    'skills.s2': 'Offensive Security',
    'skills.s3': 'SOC & Monitoring',
    'skills.s4': 'Networks & Systems',
    'skills.s5': 'Tools & Methods',

    'projects.title': 'Work',
    'proj1.long': 'Built a full detection pipeline: log ingestion and correlation, Suricata vs Snort comparison (0.94 score). Everything wrapped in a Dockerized SIEM (ELK) dashboard with automated alerting.',
    'proj2.long': 'Full penetration test on a web application following the OWASP Top 10 methodology: SQLi, XSS, IDOR and authentication flaws. Detailed report with CVSS scoring and remediation recommendations for the client.',
    'proj3.title': 'Phishing Simulation & Awareness',
    'proj3.long': 'How do you measure human vulnerability to phishing? I designed a GoPhish simulation campaign in a controlled environment, measured click and report rates, then proposed a tailored awareness program.',
    'proj4.title': 'Cloud Infrastructure Hardening',
    'proj4.long': 'Hardened an AWS cloud infrastructure: fine-grained IAM role management, data encryption at rest and in transit, Docker container security and continuous image scanning.',
    'proj5.title': 'Malware Analysis in a Sandbox',
    'proj5.long': 'Static and dynamic analysis of malware samples in an isolated environment. Reverse engineering with Ghidra, IOC extraction and behavioral analysis reports.',
    'proj6.title': 'Active Directory Security Audit',
    'proj6.long': 'Audited a test Active Directory environment with BloodHound: attack path mapping, misconfiguration detection and hardening recommendations.',
    'proj7.title': 'Intrusion Detection System (IDS)',
    'proj7.long': 'Deployed and configured a network IDS (Suricata/Snort) with custom rules. Tested against simulated malicious traffic to evaluate detection rate and reduce false positives.',
    'proj8.title': 'Applied Cryptography Library',
    'proj8.long': 'C implementation of RSA and AES algorithms for educational purposes: key generation, encryption/decryption, and analysis of vulnerabilities in weak implementations.',
    'proj9.title': 'CTF Write-ups — HackTheBox / TryHackMe',
    'proj9.long': 'A collection of detailed write-ups on HackTheBox and TryHackMe machines: enumeration, exploitation, privilege escalation and post-exploitation.',
    'proj10.title': 'Automated Vulnerability Scanner',
    'proj10.long': 'A Python scanner combining Nmap and CVE databases to automatically identify vulnerabilities across a fleet of machines. Generates CVSS-prioritized reports.',

    'exp.title': 'Experience & Education',
    'xp.badge': 'Experience',
    'xp.t2': 'SOC & Pentest Intern',
    'xp.l3': 'Monitoring and analyzing SIEM alerts, qualifying incidents and writing investigation reports.',
    'xp.l4': 'Participating in internal penetration tests and setting up detection rules.',
    'xp.t1': 'Network & Systems Security Intern',
    'xp.l1': 'Hardened Linux/Windows servers, implemented password policies and application firewalls.',
    'xp.l2': 'Configuration audits and compliance report preparation for technical management.',
    'edu.badge': 'Education',
    'edu.t1': 'Cybersecurity Engineering Cycle',
    'edu.d1': 'Penetration testing, incident response, cryptography, network security, SOC/SIEM, IS architecture, project management.',
    'edu.t2': 'Preparatory Classes MPSI / MP',
    'edu.d2': 'Algebra, Analysis, Algorithms, Python, Statistics.',
    'edu.t3': 'Mathematics Baccalaureate',
    'edu.mention': 'Highest Honors ✦',

    'contact.title': 'Let\'s Work<br>Together',
    'contact.sub': 'Currently interning — SOC & Pentest.<br>Open to cybersecurity opportunities.<br>Feel free to reach out!',
    'contact.cv': 'Download Resume <i class="fas fa-download"></i>',

    'footer.text': '© 2026 Mohamed Taha Aboumehdi Hassani — GitHub Pages',
    'about.prefix': 'Engineer',
    'featured.prefix': 'Featured',
    'featured.title': 'Projects',
    'skills.prefix': 'My',
    'skills.title': 'Stack',
    'projects.prefix': 'My',
    'projects.title': 'Work',
    'exp.prefix': ''
  },

  ar: {
    'nav.about': 'عني',
    'nav.featured': 'الأعمال',
    'nav.skills': 'المهارات',
    'nav.projects': 'المشاريع',
    'nav.parcours': 'المسيرة',
    'nav.contact': 'تواصل',
    'nav.cv': 'السيرة الذاتية',

    'hero.tag': 'في تدريب · SOC وPentest',
    'hero.role1': 'الأمن السيبراني',
    'hero.role2': 'اختبار الاختراق و SOC',
    'hero.role3': 'مهندس معلوماتية',
    'hero.desc': 'مهندس أمن سيبراني · أبني أنظمة أمنية متكاملة من التدقيق واختبار الاختراق إلى مراقبة SOC والاستجابة للحوادث.',
    'hero.btn1': 'مشاريعي <i class="fas fa-arrow-right"></i>',
    'hero.btn2': 'تواصل معي',
    'hero.stat1': 'مشاريع',
    'hero.stat2': 'أدوات أمنية',
    'hero.stat3': 'خبرة في الشبكات والأمن',
    'hero.stat4': 'تدريبات',
    'hero.fc3val': 'في تدريب',

    'about.title': 'مرن سيبرانياً',
    'about.p1': 'أنا <strong>محمد طه أبو مهدي حساني</strong>، مهندس أمن سيبراني. شغوف بالأمن الهجومي والدفاعي — اختبار الاختراق، كشف التسلل، الاستجابة للحوادث وتحصين البنية التحتية.',
    'about.p2': 'أتدرب حالياً في <strong>أمن أنظمة المعلومات</strong> (SOC وPentest). متاح لفرص جديدة ابتداءً من <strong>سبتمبر 2026</strong>.',
    'about.chip1': '<i class="fas fa-map-marker-alt"></i> فرنسا',
    'about.chip2': '<i class="fas fa-graduation-cap"></i> مهندس — أمن سيبراني',
    'about.chip3': '<i class="fas fa-language"></i> FR · EN (C1) · AR',
    'about.chip4': '<i class="fas fa-briefcase"></i> تدريب SOC · 2026',
    'about.badge': 'في تدريب · SOC',

    'featured.title': 'المميزة',
    'proj1.title': 'لوحة SOC — كشف التسلل',
    'proj1.desc': 'خط أنابيب كشف متكامل. جمع وربط السجلات، مقارنة Suricata مع Snort. لوحة SIEM (ELK)، تنبيهات آلية وخطط استجابة للحوادث.',
    'proj2.title': 'اختبار اختراق تطبيق ويب',
    'proj2.desc': 'اختبار اختراق كامل وفق منهجية OWASP Top 10: SQLi وXSS وIDOR وثغرات المصادقة. تقرير مفصل مع تقييم CVSS وتوصيات.',
    'feat.github': 'عرض على GitHub <i class="fab fa-github"></i>',

    'skills.title': 'تقنياتي',
    'skills.s1': 'لغات البرمجة',
    'skills.s2': 'الأمن الهجومي',
    'skills.s3': 'SOC والمراقبة',
    'skills.s4': 'الشبكات والأنظمة',
    'skills.s5': 'الأدوات والمنهجيات',

    'projects.title': 'مشاريعي',
    'proj1.long': 'بنيت خط أنابيب كشف متكامل: جمع وربط السجلات، مقارنة Suricata مع Snort (نتيجة 0.94). كل ذلك عبر لوحة SIEM (ELK) داخل Docker مع تنبيهات آلية.',
    'proj2.long': 'اختبار اختراق كامل على تطبيق ويب وفق منهجية OWASP Top 10: SQLi وXSS وIDOR وثغرات المصادقة. تقرير مفصل مع تقييم CVSS وتوصيات للعميل.',
    'proj3.title': 'محاكاة تصيد احتيالي وتوعية',
    'proj3.long': 'كيف تقيس هشاشة الإنسان أمام التصيد الاحتيالي؟ صممت حملة محاكاة بـ GoPhish في بيئة محكومة، قست معدلات النقر والإبلاغ، ثم اقترحت برنامج توعية مناسباً.',
    'proj4.title': 'تحصين بنية تحتية سحابية',
    'proj4.long': 'تحصين بنية تحتية سحابية AWS: إدارة دقيقة لأدوار IAM، تشفير البيانات في الراحة والنقل، تأمين حاويات Docker وفحص مستمر للصور.',
    'proj5.title': 'تحليل برمجيات خبيثة في بيئة معزولة',
    'proj5.long': 'تحليل ثابت وديناميكي لعينات برمجيات خبيثة في بيئة معزولة. هندسة عكسية بـ Ghidra، استخراج مؤشرات الاختراق وكتابة تقارير سلوكية.',
    'proj6.title': 'تدقيق أمني لـ Active Directory',
    'proj6.long': 'تدقيق بيئة Active Directory تجريبية بواسطة BloodHound: رسم مسارات الهجوم، كشف الأخطاء في الإعدادات وتوصيات التحصين.',
    'proj7.title': 'نظام كشف التسلل (IDS)',
    'proj7.long': 'نشر وتكوين IDS شبكي (Suricata/Snort) بقواعد مخصصة. اختبارات على حركة مرور خبيثة محاكاة لتقييم معدل الكشف وتقليل الإنذارات الكاذبة.',
    'proj8.title': 'مكتبة تشفير تطبيقية',
    'proj8.long': 'تطبيق بلغة C لخوارزميتي RSA وAES لأغراض تعليمية: توليد المفاتيح، التشفير وفك التشفير، وتحليل الثغرات في التطبيقات الضعيفة.',
    'proj9.title': 'حلول CTF — HackTheBox / TryHackMe',
    'proj9.long': 'مجموعة من الحلول المفصلة لأجهزة HackTheBox وTryHackMe: الاستكشاف، الاستغلال، تصعيد الصلاحيات وما بعد الاستغلال.',
    'proj10.title': 'ماسح ثغرات آلي',
    'proj10.long': 'ماسح Python يجمع بين Nmap وقواعد CVE لتحديد الثغرات تلقائياً عبر مجموعة من الأجهزة. توليد تقارير مرتبة حسب درجة CVSS.',

    'exp.title': 'الخبرة والتكوين',
    'xp.badge': 'خبرة',
    'xp.t2': 'متدرب SOC و Pentest',
    'xp.l3': 'مراقبة وتحليل تنبيهات SIEM، تصنيف الحوادث وكتابة تقارير التحقيق.',
    'xp.l4': 'المشاركة في اختبارات اختراق داخلية ووضع قواعد الكشف.',
    'xp.t1': 'متدرب أمن الشبكات والأنظمة',
    'xp.l1': 'تحصين خوادم Linux/Windows، وضع سياسات كلمات المرور وجدران الحماية التطبيقية.',
    'xp.l2': 'تدقيقات الإعدادات وإعداد تقارير الامتثال للإدارة التقنية.',
    'edu.badge': 'تكوين',
    'edu.t1': 'دورة مهندس أمن سيبراني',
    'edu.d1': 'اختبار الاختراق، الاستجابة للحوادث، التشفير، أمن الشبكات، SOC/SIEM، هندسة الأنظمة، إدارة المشاريع.',
    'edu.t2': 'الفصول التحضيرية MPSI / MP',
    'edu.d2': 'الجبر، التحليل، الخوارزميات، Python، الإحصاء.',
    'edu.t3': 'بكالوريا العلوم الرياضية',
    'edu.mention': 'مرتبة الشرف الأولى ✦',

    'contact.title': 'لنعمل<br>معًا',
    'contact.sub': 'أتدرب حالياً — SOC وPentest.<br>منفتح على فرص في الأمن السيبراني.<br>لا تتردد في التواصل!',
    'contact.cv': 'تحميل السيرة الذاتية <i class="fas fa-download"></i>',

    'footer.text': '© 2026 محمد طه أبو مهدي حساني — GitHub Pages',
    'about.prefix': 'مهندس',
    'featured.prefix': 'المشاريع',
    'featured.title': 'المميزة',
    'skills.prefix': '',
    'projects.prefix': '',
    'exp.prefix': ''
  }
};

let currentLang = 'fr';

function applyLang(lang) {
  const dict = translations[lang];
  if (!dict) return;

  currentLang = lang;

  document.documentElement.setAttribute('lang', lang);
  document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
  document.documentElement.style.scrollBehavior = 'smooth';

  // Cursor: always pointer-events:none, don't override visibility (CSS handles it)
  if (cursorEl) { cursorEl.style.pointerEvents = 'none'; }
  if (cursorRing) { cursorRing.style.pointerEvents = 'none'; }

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key] !== undefined) {
      el.innerHTML = dict[key];
    }
  });

  const cvEl = document.getElementById('cvLink');
  const cvEl2 = document.getElementById('cvLinkContact');
  const cvMap = {
    fr: 'cv_mohamed_taha_aboumehdi_hassani_fr.pdf',
    en: 'cv_mohamed_taha_aboumehdi_hassani_en.pdf',
    ar: 'cv_mohamed_taha_aboumehdi_hassani_fr.pdf'
  };

  if (cvEl) cvEl.href = `assets/cv/${cvMap[lang]}`;
  if (cvEl2) cvEl2.href = `assets/cv/${cvMap[lang]}`;

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  // Update html dir attribute properly for RTL
  document.body.classList.toggle('rtl', lang === 'ar');

  // Update section title prefix spans
  document.querySelectorAll('[data-i18n-prefix]').forEach(el => {
    const key = el.getAttribute('data-i18n-prefix');
    const val = dict[key];
    if (val !== undefined) {
      el.textContent = val ? val + '\u00a0' : '';
    }
  });
}

document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    applyLang(btn.dataset.lang);
    // Sync all lang buttons (mobile + desktop)
    document.querySelectorAll('.lang-btn').forEach(b => {
      b.classList.toggle('active', b.dataset.lang === btn.dataset.lang);
    });
  });
});

/* ======================
PILLS HOVER RIPPLE
====================== */
document.querySelectorAll('.pill').forEach(pill => {
  pill.addEventListener('mouseenter', () => {
    const ripple = document.createElement('span');

    ripple.style.cssText = `
      position:absolute;
      width:6px;
      height:6px;
      border-radius:50%;
      background:rgba(200,241,53,0.4);
      transform:scale(0);
      transition:transform .4s ease, opacity .4s ease;
      pointer-events:none;
      top:50%;
      left:50%;
      translate:-50% -50%;
    `;

    pill.style.position = 'relative';
    pill.style.overflow = 'hidden';
    pill.appendChild(ripple);

    requestAnimationFrame(() => {
      ripple.style.transform = 'scale(12)';
      ripple.style.opacity = '0';
    });

    setTimeout(() => ripple.remove(), 500);
  });
});

/* ======================
PROJECT ITEMS TILT
====================== */
document.querySelectorAll('.project-item').forEach(item => {
  item.addEventListener('mousemove', e => {
    const rect = item.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 4;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 4;

    item.style.transform = `perspective(1000px) rotateX(${-y}deg) rotateY(${x}deg)`;
  });

  item.addEventListener('mouseleave', () => {
    item.style.transition = 'transform .5s ease';
    item.style.transform = '';

    setTimeout(() => {
      item.style.transition = '';
    }, 500);
  });
});

/* ======================
FEAT CARDS PARALLAX
====================== */
document.querySelectorAll('.feat-card').forEach(card => {
  card.addEventListener('mousemove', e => {
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    const screen = card.querySelector('.feat-screen');

    if (screen) {
      screen.style.transform = `perspective(800px) rotateY(${x * 6}deg) rotateX(${-y * 4}deg) translateZ(8px)`;
    }
  });

  card.addEventListener('mouseleave', () => {
    const screen = card.querySelector('.feat-screen');

    if (screen) {
      screen.style.transition = 'transform .6s ease';
      screen.style.transform = '';

      setTimeout(() => {
        screen.style.transition = '';
      }, 600);
    }
  });
});

/* ======================
JOURNEY ITEMS HOVER
====================== */
document.querySelectorAll('.journey-item').forEach(item => {
  item.addEventListener('mouseenter', () => {
    const dot = item.querySelector('.ji-dot');
    if (dot && !dot.classList.contains('active')) {
      dot.style.borderColor = 'var(--accent)';
    }
  });

  item.addEventListener('mouseleave', () => {
    const dot = item.querySelector('.ji-dot');
    if (dot && !dot.classList.contains('active')) {
      dot.style.borderColor = '';
    }
  });
});

/* ======================
CONTACT LINKS HOVER
====================== */
document.querySelectorAll('.contact-link').forEach(link => {
  link.addEventListener('mouseenter', () => {
    const icon = link.querySelector('.cl-icon');
    if (icon) {
      icon.style.background = 'rgba(200,241,53,0.18)';
      icon.style.transform = 'scale(1.1) rotate(-5deg)';
    }
  });

  link.addEventListener('mouseleave', () => {
    const icon = link.querySelector('.cl-icon');
    if (icon) {
      icon.style.background = '';
      icon.style.transform = '';
    }
  });
});

/* ======================
FLOATING CARDS PARALLAX
====================== */
window.addEventListener(
  'mousemove',
  e => {
    const cx = window.innerWidth / 2;
    const cy = window.innerHeight / 2;
    const dx = (e.clientX - cx) / cx;
    const dy = (e.clientY - cy) / cy;

    document.querySelectorAll('.float-card').forEach((fc, i) => {
      const factor = (i + 1) * 6;
      fc.style.setProperty('--mx', `${dx * factor}px`);
      fc.style.setProperty('--my', `${dy * factor}px`);
    });
  },
  { passive: true }
);

/* ======================
PAGE VISIBILITY
====================== */
document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    document.title = '👋 Reviens voir mon portfolio!';
  } else {
    document.title = 'Mohamed Taha Aboumehdi Hassani — Cybersecurity Engineer';
  }
});

/* ======================
INIT
====================== */
applyLang('fr');

console.log(
  '%c MT. ',
  'background:#c8f135;color:#070707;font-size:20px;font-weight:900;padding:6px 12px;border-radius:4px;',
  '\n%cMohamed Taha Aboumehdi Hassani — Cybersecurity Engineer\nPortfolio v2.0 — 2026',
  'color:#c8f135;font-size:13px;'
);