<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>./mtaha-sec.sh - Terminal Portfolio</title>
    <link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500;700&family=Share+Tech+Mono&display=swap" rel="stylesheet">
    <style>
        :root {
            --white: #ffffff;
            --green: #00ff00;
            --dark: #0a0a0a;
            --darker: #000000;
            --grey: #333333;
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            background: var(--dark);
            color: var(--white);
            font-family: 'Fira Code', monospace;
            overflow-x: hidden;
        }

        /* Terminal Loading Screen */
        .terminal-loading {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: var(--darker);
            z-index: 10000;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: opacity 0.5s ease;
        }

        .terminal-loading.hidden {
            opacity: 0;
            pointer-events: none;
        }

        .terminal-content {
            width: 90%;
            max-width: 800px;
        }

        .terminal-line {
            margin-bottom: 10px;
            opacity: 0;
            animation: fadeInLine 0.3s forwards;
        }

        @keyframes fadeInLine {
            to { opacity: 1; }
        }

        .terminal-line.success { color: var(--green); }
        .terminal-line.error { color: #ff0000; }
        .terminal-line.warning { color: #ffff00; }

        .cursor {
            display: inline-block;
            width: 10px;
            height: 20px;
            background: var(--white);
            animation: blink 1s infinite;
            margin-left: 5px;
        }

        @keyframes blink {
            0%, 50% { opacity: 1; }
            51%, 100% { opacity: 0; }
        }

        /* Navigation */
        nav {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            background: rgba(10, 10, 10, 0.95);
            backdrop-filter: blur(10px);
            z-index: 1000;
            border-bottom: 2px solid var(--white);
            opacity: 0;
            transform: translateY(-100%);
            transition: all 0.5s ease;
        }

        nav.visible {
            opacity: 1;
            transform: translateY(0);
        }

        nav .container {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 15px 40px;
            max-width: 1400px;
            margin: 0 auto;
        }

        .logo {
            font-size: 1.3em;
            font-weight: 700;
            letter-spacing: 2px;
        }

        .logo::before {
            content: "$ ./";
            color: var(--green);
            margin-right: 5px;
        }

        .nav-links {
            display: flex;
            gap: 30px;
            list-style: none;
        }

        .nav-links a {
            color: var(--white);
            text-decoration: none;
            font-weight: 500;
            transition: all 0.3s ease;
            position: relative;
        }

        .nav-links a::before {
            content: ">";
            margin-right: 5px;
            opacity: 0;
            transition: opacity 0.3s ease;
        }

        .nav-links a:hover::before {
            opacity: 1;
        }

        .nav-links a:hover {
            color: var(--green);
        }

        /* Container */
        .container {
            max-width: 1400px;
            margin: 0 auto;
            padding: 0 40px;
        }

        /* Main Content */
        .main-content {
            opacity: 0;
            transition: opacity 0.5s ease;
            padding-top: 80px;
        }

        .main-content.visible {
            opacity: 1;
        }

        /* Section */
        section {
            padding: 80px 0;
            border-bottom: 1px solid var(--grey);
        }

        .section-header {
            margin-bottom: 50px;
        }

        .section-title {
            font-size: 2.5em;
            font-weight: 700;
            margin-bottom: 10px;
            position: relative;
            display: inline-block;
        }

        .section-title::before {
            content: "# ";
            color: var(--green);
        }

        .section-subtitle {
            color: #888;
            font-size: 1.1em;
            margin-left: 30px;
        }

        /* Hero Section */
        .hero {
            min-height: 100vh;
            display: flex;
            align-items: center;
            padding-top: 0;
            border: none;
        }

        .hero-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 80px;
            align-items: center;
        }

        .hero-photo {
            width: 400px;
            height: 400px;
            border: 3px solid var(--white);
            position: relative;
            overflow: hidden;
            clip-path: polygon(30px 0, 100% 0, 100% calc(100% - 30px), calc(100% - 30px) 100%, 0 100%, 0 30px);
            transition: all 0.3s ease;
        }

        .hero-photo:hover {
            transform: translate(-10px, -10px);
            box-shadow: 10px 10px 0 var(--white);
        }

        .hero-photo img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            filter: grayscale(100%) contrast(120%);
            transition: filter 0.3s ease;
        }

        .hero-photo:hover img {
            filter: grayscale(0%) contrast(100%);
        }

        .photo-placeholder {
            width: 100%;
            height: 100%;
            background: var(--grey);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 5em;
        }

        .hero-info .terminal-prompt {
            color: var(--green);
            margin-bottom: 20px;
            font-size: 1.1em;
        }

        .hero-info h1 {
            font-size: 4em;
            font-weight: 700;
            margin-bottom: 20px;
            line-height: 1.2;
        }

        .hero-info .subtitle {
            font-size: 1.5em;
            color: #ccc;
            margin-bottom: 30px;
        }

        .hero-description {
            font-size: 1.1em;
            line-height: 1.8;
            color: #aaa;
            margin-bottom: 40px;
        }

        .hero-stats {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 20px;
            margin-bottom: 40px;
        }

        .stat-item {
            text-align: center;
            padding: 20px;
            border: 1px solid var(--grey);
            transition: all 0.3s ease;
        }

        .stat-item:hover {
            border-color: var(--white);
            transform: translateY(-5px);
        }

        .stat-number {
            font-size: 2.5em;
            font-weight: 700;
            margin-bottom: 5px;
        }

        .stat-label {
            font-size: 0.9em;
            color: #888;
        }

        /* Buttons */
        .btn-group {
            display: flex;
            gap: 20px;
        }

        .btn {
            padding: 15px 35px;
            font-family: 'Fira Code', monospace;
            font-weight: 700;
            font-size: 1em;
            text-decoration: none;
            position: relative;
            overflow: hidden;
            transition: all 0.3s ease;
            cursor: pointer;
            border: none;
            display: inline-flex;
            align-items: center;
            gap: 10px;
        }

        .btn-primary {
            background: var(--white);
            color: var(--dark);
            clip-path: polygon(0 0, calc(100% - 15px) 0, 100% 15px, 100% 100%, 15px 100%, 0 calc(100% - 15px));
        }

        .btn-primary:hover {
            transform: translate(-3px, -3px);
            box-shadow: 3px 3px 0 var(--white);
        }

        .btn-secondary {
            border: 2px solid var(--white);
            background: transparent;
            color: var(--white);
            clip-path: polygon(15px 0, 100% 0, 100% calc(100% - 15px), calc(100% - 15px) 100%, 0 100%, 0 15px);
        }

        .btn-secondary::before {
            content: "";
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: var(--white);
            transition: left 0.3s ease;
            z-index: -1;
        }

        .btn-secondary:hover::before {
            left: 0;
        }

        .btn-secondary:hover {
            color: var(--dark);
        }

        /* About Section */
        .about-content {
            font-size: 1.1em;
            line-height: 2;
            color: #ccc;
        }

        .about-content p {
            margin-bottom: 20px;
        }

        /* Skills Section */
        .skills-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 30px;
        }

        .skill-card {
            background: var(--darker);
            border: 2px solid var(--white);
            padding: 35px;
            transition: all 0.3s ease;
            clip-path: polygon(20px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%, 0 20px);
        }

        .skill-card:hover {
            transform: translate(-5px, -5px);
            box-shadow: 5px 5px 0 var(--white);
        }

        .skill-card h3 {
            font-size: 1.5em;
            margin-bottom: 20px;
            color: var(--green);
        }

        .skill-list {
            list-style: none;
        }

        .skill-list li {
            padding: 8px 0;
            padding-left: 20px;
            position: relative;
            color: #ccc;
        }

        .skill-list li::before {
            content: "▹";
            position: absolute;
            left: 0;
            color: var(--white);
        }

        /* Projects Section */
        .projects-grid {
            display: grid;
            gap: 40px;
        }

        .project-card {
            background: var(--darker);
            border: 2px solid var(--white);
            padding: 40px;
            transition: all 0.3s ease;
            clip-path: polygon(0 0, calc(100% - 30px) 0, 100% 30px, 100% 100%, 30px 100%, 0 calc(100% - 30px));
            position: relative;
        }

        .project-card::after {
            content: "";
            position: absolute;
            top: 0;
            right: 0;
            width: 30px;
            height: 30px;
            background: var(--white);
            clip-path: polygon(0 0, 100% 0, 100% 100%);
        }

        .project-card:hover {
            transform: translate(-8px, -8px);
            box-shadow: 8px 8px 0 var(--white);
        }

        .project-card h3 {
            font-size: 1.8em;
            margin-bottom: 15px;
        }

        .project-card h3::before {
            content: "$ ";
            color: var(--green);
        }

        .project-description {
            font-size: 1.05em;
            line-height: 1.8;
            color: #aaa;
            margin-bottom: 25px;
        }

        .project-tags {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
            margin-bottom: 20px;
        }

        .tag {
            background: transparent;
            border: 1px solid var(--white);
            color: var(--white);
            padding: 5px 15px;
            font-size: 0.85em;
            transition: all 0.3s ease;
        }

        .tag:hover {
            background: var(--white);
            color: var(--dark);
        }

        /* CV Section */
        .cv-section {
            background: var(--darker);
            padding: 60px 0;
        }

        .cv-download-area {
            max-width: 800px;
            margin: 0 auto;
            text-align: center;
            border: 3px dashed var(--white);
            padding: 60px 40px;
            position: relative;
            transition: all 0.3s ease;
        }

        .cv-download-area:hover {
            border-style: solid;
            transform: scale(1.02);
        }

        .cv-icon {
            font-size: 5em;
            margin-bottom: 20px;
        }

        .cv-download-area h3 {
            font-size: 2em;
            margin-bottom: 15px;
        }

        .cv-download-area p {
            font-size: 1.1em;
            color: #aaa;
            margin-bottom: 30px;
        }

        .cv-info {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 20px;
            margin-top: 40px;
        }

        .cv-info-item {
            padding: 15px;
            border: 1px solid var(--grey);
        }

        .cv-info-item strong {
            display: block;
            color: var(--green);
            margin-bottom: 5px;
        }

        /* Contact Section */
        .contact-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 30px;
        }

        .contact-item {
            background: var(--darker);
            border: 2px solid var(--white);
            padding: 35px;
            transition: all 0.3s ease;
            clip-path: polygon(15px 0, 100% 0, 100% calc(100% - 15px), calc(100% - 15px) 100%, 0 100%, 0 15px);
        }

        .contact-item:hover {
            transform: translate(-5px, -5px);
            box-shadow: 5px 5px 0 var(--white);
        }

        .contact-item h3 {
            font-size: 1.3em;
            margin-bottom: 15px;
            color: var(--green);
        }

        .contact-item h3::before {
            content: "> ";
        }

        .contact-item a {
            color: var(--white);
            text-decoration: none;
            transition: color 0.3s ease;
        }

        .contact-item a:hover {
            color: var(--green);
        }

        /* Footer */
        footer {
            background: var(--darker);
            padding: 40px 0;
            text-align: center;
            border-top: 2px solid var(--white);
        }

        footer p {
            color: #888;
        }

        /* Responsive */
        @media (max-width: 968px) {
            .hero-grid {
                grid-template-columns: 1fr;
                text-align: center;
            }

            .hero-photo {
                margin: 0 auto;
            }

            .hero-stats,
            .btn-group {
                justify-content: center;
            }

            .skills-grid {
                grid-template-columns: 1fr;
            }

            .contact-grid {
                grid-template-columns: 1fr;
            }

            .cv-info {
                grid-template-columns: 1fr;
            }

            .hero-info h1 {
                font-size: 2.5em;
            }
        }

        /* Scanline */
        .scanline {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: repeating-linear-gradient(
                0deg,
                rgba(255, 255, 255, 0.03) 0px,
                rgba(255, 255, 255, 0.03) 1px,
                transparent 1px,
                transparent 2px
            );
            pointer-events: none;
            z-index: 9999;
        }
    </style>
</head>
<body>
    <div class="scanline"></div>

    <!-- Terminal Loading Screen -->
    <div class="terminal-loading" id="terminalLoading">
        <div class="terminal-content" id="terminalContent">
            <!-- Lines will be added by JavaScript -->
        </div>
    </div>

    <!-- Navigation -->
    <nav id="mainNav">
        <div class="container">
            <div class="logo">mtaha-sec.sh</div>
            <ul class="nav-links">
                <li><a href="#about">about</a></li>
                <li><a href="#skills">skills</a></li>
                <li><a href="#projects">projects</a></li>
                <li><a href="#cv">cv</a></li>
                <li><a href="#contact">contact</a></li>
            </ul>
        </div>
    </nav>

    <!-- Main Content -->
    <div class="main-content" id="mainContent">
        <!-- Hero Section -->
        <section class="hero">
            <div class="container">
                <div class="hero-grid">
                    <div class="hero-photo">
                        <!-- Remplacez le placeholder par votre vraie photo -->
                        <!-- <img src="votre-photo.jpg" alt="Mtaha"> -->
                        <div class="photo-placeholder">👨‍💻</div>
                    </div>
                    <div class="hero-info">
                        <div class="terminal-prompt">$ whoami</div>
                        <h1>MTAHA<br>SECURITY</h1>
                        <p class="subtitle">Cybersecurity Specialist // Penetration Tester</p>
                        <p class="hero-description">
                            Expert en sécurité offensive et défensive, spécialisé dans les tests d'intrusion,
                            l'analyse de vulnérabilités et la sécurisation d'infrastructures critiques.
                        </p>
                        <div class="hero-stats">
                            <div class="stat-item">
                                <div class="stat-number">5+</div>
                                <div class="stat-label">ANNÉES</div>
                            </div>
                            <div class="stat-item">
                                <div class="stat-number">50+</div>
                                <div class="stat-label">AUDITS</div>
                            </div>
                            <div class="stat-item">
                                <div class="stat-number">200+</div>
                                <div class="stat-label">VULNS</div>
                            </div>
                        </div>
                        <div class="btn-group">
                            <a href="#projects" class="btn btn-primary">
                                <span>VIEW PROJECTS</span>
                            </a>
                            <a href="#contact" class="btn btn-secondary">
                                <span>CONTACT</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- About Section -->
        <section id="about">
            <div class="container">
                <div class="section-header">
                    <h2 class="section-title">about</h2>
                    <p class="section-subtitle">$ cat about.txt</p>
                </div>
                <div class="about-content">
                    <p>
                        Spécialiste en cybersécurité avec une expertise approfondie en tests d'intrusion,
                        analyse de vulnérabilités et sécurisation d'infrastructures. Mon approche combine
                        une compréhension technique pointue avec une vision stratégique de la sécurité.
                    </p>
                    <p>
                        Passionné par les défis complexes, je m'efforce constamment d'anticiper les menaces
                        émergentes et de développer des solutions innovantes pour protéger les actifs critiques.
                        Mon expertise couvre l'ensemble du spectre de la cybersécurité, de l'offensive à la défensive.
                    </p>
                    <p>
                        Formé aux dernières techniques de pentesting et de Red Team, je combine des compétences
                        techniques solides avec une capacité à communiquer efficacement les risques aux parties
                        prenantes de tous niveaux.
                    </p>
                </div>
            </div>
        </section>

        <!-- Skills Section -->
        <section id="skills">
            <div class="container">
                <div class="section-header">
                    <h2 class="section-title">skills</h2>
                    <p class="section-subtitle">$ ls -la /skills/</p>
                </div>
                <div class="skills-grid">
                    <div class="skill-card">
                        <h3>PENETRATION TESTING</h3>
                        <ul class="skill-list">
                            <li>Web Application Security</li>
                            <li>Network Penetration</li>
                            <li>Mobile App Security</li>
                            <li>API Security Testing</li>
                            <li>Social Engineering</li>
                        </ul>
                    </div>

                    <div class="skill-card">
                        <h3>TOOLS & FRAMEWORKS</h3>
                        <ul class="skill-list">
                            <li>Metasploit Framework</li>
                            <li>Burp Suite Pro</li>
                            <li>Nmap / Wireshark</li>
                            <li>OWASP ZAP</li>
                            <li>Cobalt Strike</li>
                        </ul>
                    </div>

                    <div class="skill-card">
                        <h3>PROGRAMMING</h3>
                        <ul class="skill-list">
                            <li>Python / Bash</li>
                            <li>PowerShell</li>
                            <li>C / C++</li>
                            <li>JavaScript</li>
                            <li>Assembly x86/x64</li>
                        </ul>
                    </div>

                    <div class="skill-card">
                        <h3>SECURITY DOMAINS</h3>
                        <ul class="skill-list">
                            <li>Reverse Engineering</li>
                            <li>Malware Analysis</li>
                            <li>Cryptography</li>
                            <li>Cloud Security</li>
                            <li>Container Security</li>
                        </ul>
                    </div>

                    <div class="skill-card">
                        <h3>CERTIFICATIONS</h3>
                        <ul class="skill-list">
                            <li>OSCP</li>
                            <li>CEH</li>
                            <li>CompTIA Security+</li>
                            <li>GPEN</li>
                            <li>CISSP (en cours)</li>
                        </ul>
                    </div>

                    <div class="skill-card">
                        <h3>DEFENSE & RESPONSE</h3>
                        <ul class="skill-list">
                            <li>SIEM / SOAR</li>
                            <li>IDS/IPS</li>
                            <li>Incident Response</li>
                            <li>Threat Hunting</li>
                            <li>Digital Forensics</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        <!-- Projects Section -->
        <section id="projects">
            <div class="container">
                <div class="section-header">
                    <h2 class="section-title">projects</h2>
                    <p class="section-subtitle">$ cat /projects/*</p>
                </div>
                <div class="projects-grid">
                    <div class="project-card">
                        <h3>pentest-automation.py</h3>
                        <p class="project-description">
                            Framework complet pour automatiser les phases de reconnaissance, énumération et exploitation.
                            Intègre OSINT, scan automatisé, détection de vulnérabilités et génération de rapports.
                        </p>
                        <div class="project-tags">
                            <span class="tag">PYTHON</span>
                            <span class="tag">AUTOMATION</span>
                            <span class="tag">OSINT</span>
                            <span class="tag">NMAP</span>
                        </div>
                    </div>

                    <div class="project-card">
                        <h3>ctf-platform.sh</h3>
                        <p class="project-description">
                            Plateforme Capture The Flag pour l'entraînement en sécurité offensive. Challenges de web
                            hacking, cryptographie, forensics et reverse engineering.
                        </p>
                        <div class="project-tags">
                            <span class="tag">DOCKER</span>
                            <span class="tag">NODE.JS</span>
                            <span class="tag">CTF</span>
                            <span class="tag">LINUX</span>
                        </div>
                    </div>

                    <div class="project-card">
                        <h3>malware-analysis.py</h3>
                        <p class="project-description">
                            Recherche sur une campagne APT sophistiquée. Reverse engineering de malware,
                            analyse comportementale, extraction d'IOCs selon MITRE ATT&CK.
                        </p>
                        <div class="project-tags">
                            <span class="tag">MALWARE</span>
                            <span class="tag">IDA PRO</span>
                            <span class="tag">MITRE ATT&CK</span>
                            <span class="tag">YARA</span>
                        </div>
                    </div>

                    <div class="project-card">
                        <h3>honeypot-network.sh</h3>
                        <p class="project-description">
                            Réseau global de honeypots pour la détection précoce des menaces. Collecte et analyse
                            en temps réel des attaques avec alerting automatisé.
                        </p>
                        <div class="project-tags">
                            <span class="tag">HONEYPOT</span>
                            <span class="tag">ELK STACK</span>
                            <span class="tag">PYTHON</span>
                            <span class="tag">AWS</span>
                        </div>
                    </div>

                    <div class="project-card">
                        <h3>cloud-scanner.py</h3>
                        <p class="project-description">
                            Outil d'audit de sécurité pour environnements cloud. Détecte les mauvaises configurations,
                            IAM trop permissifs et failles avec recommandations automatiques.
                        </p>
                        <div class="project-tags">
                            <span class="tag">CLOUD SEC</span>
                            <span class="tag">AWS</span>
                            <span class="tag">AZURE</span>
                            <span class="tag">PYTHON</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- CV Section -->
        <section id="cv" class="cv-section">
            <div class="container">
                <div class="section-header">
                    <h2 class="section-title">curriculum vitae</h2>
                    <p class="section-subtitle">$ download cv.pdf</p>
                </div>
                <div class="cv-download-area">
                    <div class="cv-icon">📄</div>
                    <h3>TÉLÉCHARGER MON CV</h3>
                    <p>Cliquez pour télécharger mon CV complet au format PDF</p>
                    <a href="cv-mtaha-security.pdf" download class="btn btn-primary">
                        <span>⬇ DOWNLOAD CV.PDF</span>
                    </a>
                    <div class="cv-info">
                        <div class="cv-info-item">
                            <strong>Format</strong>
                            PDF
                        </div>
                        <div class="cv-info-item">
                            <strong>Taille</strong>
                            ~250 KB
                        </div>
                        <div class="cv-info-item">
                            <strong>Dernière MAJ</strong>
                            Mars 2024
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Contact Section -->
        <section id="contact">
            <div class="container">
                <div class="section-header">
                    <h2 class="section-title">contact</h2>
                    <p class="section-subtitle">$ echo $CONTACT_INFO</p>
                </div>
                <div class="contact-grid">
                    <div class="contact-item">
                        <h3>email</h3>
                        <a href="mailto:mtaha@security.com">mtaha@security.com</a>
                    </div>
                    <div class="contact-item">
                        <h3>linkedin</h3>
                        <a href="https://linkedin.com/in/mtaha-security" target="_blank">linkedin.com/in/mtaha-security</a>
                    </div>
                    <div class="contact-item">
                        <h3>github</h3>
                        <a href="https://github.com/mtaha-sec" target="_blank">github.com/mtaha-sec</a>
                    </div>
                    <div class="contact-item">
                        <h3>twitter</h3>
                        <a href="https://twitter.com/mtaha_sec" target="_blank">@mtaha_sec</a>
                    </div>
                </div>
            </div>
        </section>

        <!-- Footer -->
        <footer>
            <div class="container">
                <p>© 2024 MTAHA SECURITY - Cybersecurity Specialist</p>
                <p style="margin-top: 10px;">$ exit 0</p>
            </div>
        </footer>
    </div>

    <script>
        // Terminal loading animation
        const terminalLines = [
            { text: '$ ./mtaha-sec.sh', delay: 0, class: '' },
            { text: '[*] Initializing security portfolio...', delay: 500, class: '' },
            { text: '[+] Loading modules...', delay: 1000, class: 'success' },
            { text: '    ├── about.txt', delay: 1300, class: '' },
            { text: '    ├── skills.json', delay: 1500, class: '' },
            { text: '    ├── projects.db', delay: 1700, class: '' },
            { text: '    ├── cv.pdf', delay: 1900, class: '' },
            { text: '    └── contact.conf', delay: 2100, class: '' },
            { text: '[+] Checking dependencies...', delay: 2400, class: 'success' },
            { text: '[+] All systems operational', delay: 2800, class: 'success' },
            { text: '[*] Launching portfolio interface...', delay: 3200, class: '' },
            { text: '[✓] Portfolio loaded successfully!', delay: 3600, class: 'success' }
        ];

        const terminalContent = document.getElementById('terminalContent');
        const terminalLoading = document.getElementById('terminalLoading');
        const mainNav = document.getElementById('mainNav');
        const mainContent = document.getElementById('mainContent');

        // Display terminal lines
        terminalLines.forEach((line, index) => {
            setTimeout(() => {
                const lineElement = document.createElement('div');
                lineElement.className = `terminal-line ${line.class}`;
                lineElement.textContent = line.text;
                terminalContent.appendChild(lineElement);

                // Scroll to bottom
                terminalContent.scrollTop = terminalContent.scrollHeight;

                // Hide loading screen and show content after last line
                if (index === terminalLines.length - 1) {
                    setTimeout(() => {
                        terminalLoading.classList.add('hidden');
                        mainNav.classList.add('visible');
                        mainContent.classList.add('visible');
                    }, 800);
                }
            }, line.delay);
        });

        // Smooth scroll
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            });
        });
    </script>
</body>
</html>
