// Todo el texto del sitio, en español e inglés.
// Para agregar un proyecto: sumar un objeto en `projects.featured` o `projects.more` de ambos idiomas.

const GH = "https://github.com/LautaroBastari";

export const links = {
  github: GH,
  linkedin: "https://www.linkedin.com/in/lautarobastari/",
  email: "lautarobastari1307@gmail.com",
};

const shots = (lang) => ({
  pyme: [
    { src: "projects/pyme/02_venta.png", alt: lang === "es" ? "Pantalla de ventas" : "Sales screen" },
    { src: "projects/pyme/04_pnl.png", alt: lang === "es" ? "Pérdidas y ganancias" : "Profit & loss report" },
    { src: "projects/pyme/03_stock.png", alt: lang === "es" ? "Gestión de stock" : "Stock management" },
    { src: "projects/pyme/06_cajas.png", alt: lang === "es" ? "Cierres de caja" : "Cash register closings" },
  ],
  contable: [
    { src: "projects/contable/libro-diario.png", alt: lang === "es" ? "Libro Diario" : "General journal" },
    { src: "projects/contable/ventas.png", alt: lang === "es" ? "Registro de ventas" : "Sales" },
    { src: "projects/contable/libro-mayor.png", alt: lang === "es" ? "Libro Mayor" : "General ledger" },
  ],
});

export const content = {
  es: {
    nav: { experience: "Experiencia", projects: "Proyectos", about: "Sobre mí", contact: "Contacto", cv: "CV" },
    cvFile: "cv.pdf",
    hero: {
      kicker: "Hola, soy",
      name: "Lautaro Bastari",
      degrees: ["Analista en Sistemas", "Finalizando la Licenciatura en Sistemas · UNNOBA"],
      role: "Desarrollador Fullstack con foco en backend",
      summary:
        "1 año de experiencia freelance construyendo software de gestión que se usa todos los días en un comercio real. Uso Rust y Tauri cuando importa la eficiencia, y Java con Spring para arquitecturas de microservicios.",
      ctaProjects: "Ver proyectos",
      ctaCv: "Descargar CV",
      available: "Disponible para nuevas oportunidades",
      scroll: "deslizá",
    },
    experience: {
      title: "Experiencia",
      items: [
        {
          role: "Desarrollador Fullstack Freelance",
          company: "Comercio minorista · Palermo, Buenos Aires",
          period: "2025 — 2026",
          points: [
            "Diseñé y desarrollé de punta a punta el sistema de gestión del negocio: ventas, stock, caja, compras, gastos y reportes de rentabilidad.",
            "Elegí Rust + Tauri en lugar de Electron para que corra liviano y offline en las PCs del local.",
            "Modelé la base de datos SQLite con integridad referencial, costos históricos por movimiento e importes en enteros.",
            "66 tests unitarios sobre la lógica de negocio, ejecutados en CI con GitHub Actions en cada push.",
          ],
          tags: ["Rust", "Tauri", "React", "TypeScript", "SQLite", "GitHub Actions"],
        },
      ],
    },
    projects: {
      title: "Proyectos",
      subtitle: "Una selección de lo que construí. Los dos primeros son los más representativos.",
      code: "Código",
      featured: [
        {
          id: "pyme",
          label: "Freelance · En producción",
          title: "Sistema de gestión comercial",
          problem: "Software de escritorio offline para un comercio de Palermo: ventas, stock, caja y rentabilidad real del negocio.",
          points: [
            "Rust + Tauri: instalador chico y bajo consumo de memoria en equipos de varios años.",
            "Ventas con pagos combinados, promociones y combos; cada venta impacta en stock.",
            "Reportes de PnL, rotación de inventario, clasificación ABC y riesgo de quiebre de stock.",
            "Roles admin/operador y trazabilidad completa de cada operación.",
          ],
          tags: ["Rust", "Tauri", "React", "TypeScript", "SQLite", "SQLx"],
          repo: `${GH}/pyme-system-freelance`,
          shots: shots("es").pyme,
        },
        {
          id: "microservicios",
          label: "Java · Microservicios",
          title: "Greater Events",
          problem: "Plataforma de gestión de eventos con arquitectura distribuida de microservicios y seguridad centralizada.",
          points: [
            "Microservicios en Spring Boot 3 registrados en Eureka y expuestos detrás de un API Gateway.",
            "Autenticación y autorización con Keycloak (OAuth2 / OpenID Connect, JWT).",
            "Comunicación asíncrona entre servicios con RabbitMQ.",
            "Toda la infraestructura levanta con Docker Compose.",
          ],
          tags: ["Java 17", "Spring Boot", "Spring Cloud", "Eureka", "Keycloak", "RabbitMQ", "Docker"],
          repo: `${GH}/microservices-distributed-events`,
          diagram: true,
        },
      ],
      more: [
        {
          id: "contable",
          title: "Sistema contable web",
          problem: "Circuito comercial completo con asientos contables automáticos, Libro Diario y Libro Mayor. Trabajo final de Analista en Sistemas.",
          tags: ["PHP", "MySQL", "Bootstrap"],
          repo: `${GH}/accounting-and-inventory-management-system`,
          shots: shots("es").contable,
        },
        {
          id: "gamecloud",
          title: "GameCloud — Cloud & DevOps",
          problem: "Plataforma de ranking para juegos llevada a la nube en tres etapas: Kubernetes con GitOps, serverless en AWS y observabilidad.",
          tags: ["Kubernetes", "Helm", "Argo CD", "AWS Lambda", "Prometheus", "Grafana"],
          parts: [
            { name: "Kubernetes + GitOps", url: `${GH}/k8s-helm-gitops-lab` },
            { name: "Serverless en AWS", url: `${GH}/gamecloud` },
            { name: "Observabilidad", url: `${GH}/tp4-observabilidad` },
          ],
        },
      ],
    },
    about: {
      title: "Sobre mí",
      paragraphs: [
        "Soy Analista en Sistemas y estoy finalizando la Licenciatura en Sistemas en la UNNOBA.",
        "Me gusta el backend: modelar bien los datos, escribir reglas de negocio claras y testeables, y que el sistema sea confiable cuando maneja dinero y mercadería. Trabajo en Linux y uso Docker como entorno de desarrollo.",
      ],
      education: "Formación",
      degrees: [
        { title: "Analista en Sistemas", place: "UNNOBA", status: "Título obtenido" },
        { title: "Licenciatura en Sistemas", place: "UNNOBA", status: "Finalizando" },
      ],
    },
    stack: {
      title: "Stack",
      groups: [
        { name: "Backend", items: ["Rust", "Java", "Spring Boot", "Spring Cloud", "PHP", "Python"] },
        { name: "Frontend", items: ["React", "TypeScript", "JavaScript", "Tailwind CSS"] },
        { name: "Datos", items: ["SQLite", "PostgreSQL", "MySQL", "SQL"] },
        { name: "Infra & DevOps", items: ["Docker", "Kubernetes", "Helm", "Argo CD", "AWS", "GitHub Actions", "Linux"] },
      ],
    },
    contact: {
      title: "Contacto",
      text: "¿Tenés un proyecto o una búsqueda abierta? Escribime.",
      copy: "Copiar mail",
      copied: "¡Copiado!",
    },
    footer: "Hecho con React y Tailwind.",
  },

  en: {
    nav: { experience: "Experience", projects: "Projects", about: "About", contact: "Contact", cv: "Resume" },
    cvFile: "cv-en.pdf",
    hero: {
      kicker: "Hi, I'm",
      name: "Lautaro Bastari",
      degrees: ["Systems Analyst", "Finishing a B.S. in Information Systems · UNNOBA"],
      role: "Fullstack Developer with a backend focus",
      summary:
        "1 year of freelance experience building management software that a real store uses every day. I reach for Rust and Tauri when efficiency matters, and Java with Spring for microservice architectures.",
      ctaProjects: "View projects",
      ctaCv: "Download resume",
      available: "Open to new opportunities",
      scroll: "scroll",
    },
    experience: {
      title: "Experience",
      items: [
        {
          role: "Freelance Fullstack Developer",
          company: "Retail store · Palermo, Buenos Aires",
          period: "2025 — 2026",
          points: [
            "Designed and built the store's management system end to end: sales, stock, cash register, purchases, expenses and profitability reports.",
            "Chose Rust + Tauri over Electron so it runs lightweight and offline on the store's PCs.",
            "Modeled the SQLite database with referential integrity, historical cost per movement and integer amounts.",
            "66 unit tests on the business logic, run in CI with GitHub Actions on every push.",
          ],
          tags: ["Rust", "Tauri", "React", "TypeScript", "SQLite", "GitHub Actions"],
        },
      ],
    },
    projects: {
      title: "Projects",
      subtitle: "A selection of what I've built. The first two are the most representative.",
      code: "Code",
      featured: [
        {
          id: "pyme",
          label: "Freelance · In production",
          title: "Retail management system",
          problem: "Offline desktop software for a store in Palermo, Buenos Aires: sales, stock, cash register and real business profitability.",
          points: [
            "Rust + Tauri: small installer and low memory use on older hardware.",
            "Sales with split payments, promotions and bundles; every sale updates stock.",
            "P&L, inventory turnover, ABC classification and stock-out risk reports.",
            "Admin/operator roles and full traceability of every operation.",
          ],
          tags: ["Rust", "Tauri", "React", "TypeScript", "SQLite", "SQLx"],
          repo: `${GH}/pyme-system-freelance`,
          shots: shots("en").pyme,
        },
        {
          id: "microservicios",
          label: "Java · Microservices",
          title: "Greater Events",
          problem: "Event management platform built on a distributed microservice architecture with centralized security.",
          points: [
            "Spring Boot 3 microservices registered in Eureka behind an API Gateway.",
            "Authentication and authorization with Keycloak (OAuth2 / OpenID Connect, JWT).",
            "Asynchronous service-to-service messaging with RabbitMQ.",
            "The whole infrastructure starts with Docker Compose.",
          ],
          tags: ["Java 17", "Spring Boot", "Spring Cloud", "Eureka", "Keycloak", "RabbitMQ", "Docker"],
          repo: `${GH}/microservices-distributed-events`,
          diagram: true,
        },
      ],
      more: [
        {
          id: "contable",
          title: "Web accounting system",
          problem: "Full retail workflow with automatic journal entries, general journal and general ledger. Final project of my Systems Analyst degree.",
          tags: ["PHP", "MySQL", "Bootstrap"],
          repo: `${GH}/accounting-and-inventory-management-system`,
          shots: shots("en").contable,
        },
        {
          id: "gamecloud",
          title: "GameCloud — Cloud & DevOps",
          problem: "A game leaderboard platform taken to the cloud in three stages: Kubernetes with GitOps, serverless on AWS, and observability.",
          tags: ["Kubernetes", "Helm", "Argo CD", "AWS Lambda", "Prometheus", "Grafana"],
          parts: [
            { name: "Kubernetes + GitOps", url: `${GH}/k8s-helm-gitops-lab` },
            { name: "Serverless on AWS", url: `${GH}/gamecloud` },
            { name: "Observability", url: `${GH}/tp4-observabilidad` },
          ],
        },
      ],
    },
    about: {
      title: "About me",
      paragraphs: [
        "I'm a Systems Analyst and I'm finishing my B.S. in Information Systems (Licenciatura en Sistemas) at UNNOBA, Argentina.",
        "I enjoy backend work: modeling data properly, writing clear and testable business rules, and building systems you can trust with money and inventory. I work on Linux and use Docker as my development environment.",
      ],
      education: "Education",
      degrees: [
        { title: "Systems Analyst", place: "UNNOBA", status: "Graduated" },
        { title: "B.S. in Information Systems", place: "UNNOBA", status: "Final stage" },
      ],
    },
    stack: {
      title: "Stack",
      groups: [
        { name: "Backend", items: ["Rust", "Java", "Spring Boot", "Spring Cloud", "PHP", "Python"] },
        { name: "Frontend", items: ["React", "TypeScript", "JavaScript", "Tailwind CSS"] },
        { name: "Data", items: ["SQLite", "PostgreSQL", "MySQL", "SQL"] },
        { name: "Infra & DevOps", items: ["Docker", "Kubernetes", "Helm", "Argo CD", "AWS", "GitHub Actions", "Linux"] },
      ],
    },
    contact: {
      title: "Contact",
      text: "Have a project or an open position? Get in touch.",
      copy: "Copy email",
      copied: "Copied!",
    },
    footer: "Built with React and Tailwind.",
  },
};
