import { motion } from "framer-motion";
import ReactTypingEffect from "react-typing-effect";
import "./index.css";

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.18 } },
};

const paragraphVariants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

function scrollToId(id) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function App() {
  return (
    <div className="font-montserrat scroll-smooth">
      {/* HERO */}
      <section className="w-full flex flex-col items-center text-center py-8 px-4 text-white">
        <h1 className="text-2xl font-bold mb-1 animate-gradient">
          Analista en Sistemas · Fullstack Developer
        </h1>

        <h2 className="text-4xl font-bold bg-gradient-to-b from-gray-200 to-gray-500 bg-clip-text text-transparent">
          Lautaro Bastari
        </h2>

        <ReactTypingEffect
          text={[
            "Analista en Sistemas",
            "Estudiante de 5° año – Licenciatura en Sistemas",
            "Fullstack Developer",
          ]}
          speed={60}
          eraseSpeed={40}
          eraseDelay={2000}
          typingDelay={500}
          className="text-base mt-0 text-gray-300"
        />

        <div className="mt-4">
          <a
            href="cv.pdf"
            download
            className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white px-6 py-2 rounded-full shadow-md transition-transform hover:scale-105 text-sm font-semibold flex items-center gap-2"
          >
            Descargar CV
            <img src="logos/download.svg" alt="Descargar" className="h-4 w-4" />
          </a>
        </div>
      </section>

      {/* SOBRE MÍ */}
      <motion.section
        className="w-full py-12 px-4 text-neutral-200"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start gap-12">
          {/* Texto */}
          <motion.div
            className="md:w-2/3 text-left text-lg leading-relaxed"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <motion.p className="mb-4" variants={paragraphVariants}>
              Soy{" "}
              <span className="font-semibold text-neutral-100">
                Lautaro Bastari
              </span>
              ,{" "}
              <span className="animate-soft-orange font-semibold">
                Analista en Sistemas
              </span>{" "}
              y{" "}
              <span className="animate-soft-orange font-semibold">
                estudiante de 5° año de la Licenciatura en Sistemas
              </span>{" "}
              (UNNOBA). Me desempeño como{" "}
              <span className="font-semibold text-neutral-100">
                Fullstack Developer
              </span>{" "}
              con perfil{" "}
              <span className="font-semibold text-neutral-100">backend</span>.
            </motion.p>

            <motion.p className="mb-4" variants={paragraphVariants}>
              En backend desarrollo aplicaciones con{" "}
              <span className="font-semibold text-neutral-100">
                lógica de negocio, roles y validaciones
              </span>
              , y persisto datos con{" "}
              <span className="font-semibold text-neutral-100">SQL (SQLite)</span>{" "}
              priorizando{" "}
              <span className="font-semibold text-neutral-100">integridad</span> y{" "}
              <span className="font-semibold text-neutral-100">
                consultas eficientes
              </span>
              .
            </motion.p>

            <motion.p variants={paragraphVariants}>
              En frontend construyo interfaces con{" "}
              <span className="font-semibold text-neutral-100">
                React + TypeScript
              </span>{" "}
              orientadas a sistemas de gestión. Trabajo en{" "}
              <span className="font-semibold text-neutral-100">Linux</span> y
              utilizo{" "}
              <span className="font-semibold text-neutral-100">Docker</span> como
              entorno de desarrollo, con foco en{" "}
              <span className="font-semibold text-neutral-100">
                mantenibilidad, consistencia y trazabilidad
              </span>
              .
            </motion.p>
          </motion.div>

          {/* Tecnologías + Redes */}
          <div className="md:w-1/3 flex flex-col gap-6">
            {/* Tecnologías */}
            <motion.div
              className="borde-animado-naranja sombra-glow text-white"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold mb-6 text-center border-b border-gray-600 w-full pb-2 bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 bg-[length:200%_auto] bg-clip-text text-transparent animate-gradient-x">
                Tecnologías que utilizo
              </h3>

              <div className="grid grid-cols-3 gap-6 place-items-center">
                <img
                  src="logos/python.svg"
                  alt="Python"
                  title="Python"
                  className="h-10 drop-shadow-lg brightness-125 saturate-150"
                />
                <img
                  src="logos/php2.svg"
                  alt="PHP"
                  title="PHP"
                  className="h-10 drop-shadow-lg brightness-125 saturate-150"
                />
                <img
                  src="logos/cpp.svg"
                  alt="C++"
                  title="C++"
                  className="h-10 drop-shadow-lg brightness-125 saturate-150"
                />

                <img
                  src="logos/javascript.svg"
                  alt="JavaScript"
                  title="JavaScript"
                  className="h-10 drop-shadow-lg brightness-125 saturate-150"
                />
                <img
                  src="logos/ts.svg"
                  alt="TypeScript"
                  title="TypeScript"
                  className="h-10 drop-shadow-lg brightness-125 saturate-150"
                />
                <img
                  src="logos/react.svg"
                  alt="React"
                  title="React"
                  className="h-10 drop-shadow-lg brightness-125 saturate-150"
                />

                <img
                  src="logos/java.svg"
                  alt="Java"
                  title="Java"
                  className="h-10 drop-shadow-lg brightness-125 saturate-150"
                />
                <img
                  src="logos/rust.svg"
                  alt="Rust"
                  title="Rust"
                  className="h-10 drop-shadow-lg brightness-125 saturate-150"
                />
                <img
                  src="logos/sql.svg"
                  alt="SQL"
                  title="SQL"
                  className="h-10 drop-shadow-lg brightness-125 saturate-150"
                />

                <img
                  src="logos/docker.svg"
                  alt="Docker"
                  title="Docker"
                  className="h-10 drop-shadow-lg brightness-125 saturate-150"
                />
                <img
                  src="logos/ubuntu.svg"
                  alt="Ubuntu"
                  title="Ubuntu"
                  className="h-10 drop-shadow-lg brightness-125 saturate-150"
                />
              </div>
            </motion.div>

            {/* Links */}
            <motion.div
              className="borde-animado-naranja sombra-glow text-white"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold mb-6 text-center border-b border-gray-600 w-full pb-2 bg-gradient-to-r from-orange-400 via-yellow-400 to-orange-400 bg-[length:200%_auto] bg-clip-text text-transparent animate-gradient-x">
                Links
              </h3>

              <div className="grid grid-cols-2 gap-6 place-items-center">
                <button
                  type="button"
                  title="Sistema contable (PHP)"
                  onClick={() => scrollToId("proyecto-php")}
                  className="cursor-pointer"
                >
                  <motion.img
                    src="logos/php.svg"
                    className="h-10"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 200 }}
                  />
                </button>

                <button
                  type="button"
                  title="Sistema de gestión (Rust)"
                  onClick={() => scrollToId("proyecto-php")}
                  className="cursor-pointer"
                >
                  <motion.img
                    src="logos/rust-dark.svg"
                    alt="Rust"
                    className="h-10"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 200 }}
                  />
                </button>

                <a
                  href="https://github.com/LautaroBastari"
                  title="GitHub"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <motion.img
                    src="logos/github.svg"
                    className="h-10"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 200 }}
                  />
                </a>

                <a
                  href="https://www.linkedin.com/in/tuusuario/"
                  title="LinkedIn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <motion.img
                    src="logos/linkedin.svg"
                    className="h-10"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 200 }}
                  />
                </a>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Indicador scroll a proyectos */}
        <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 text-center">
          <p className="text-sm text-cyan-100 animate-pulse mb-1">
            Deslizá para ver mis proyectos
          </p>

          <button
            onClick={() => scrollToId("proyectos")}
            className="animate-bounce opacity-60 hover:opacity-90 transition-opacity duration-300"
            aria-label="Ir a proyectos"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-cyan-100"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        </div>
      </motion.section>

      <div className="w-full h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent my-8 rounded-full" />

      <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 bg-[length:200%_auto] bg-clip-text text-transparent animate-gradient-x">
        Proyectos
      </h2>

      <section id="proyectos" className="py-12 px-6 grid md:grid-cols-2 gap-8">
        {/* PROYECTO RUST */}
        <div
          id="proyecto-rust"
          className="bg-[#1f1f1f] rounded-2xl shadow-md p-6 border border-yellow-400 hover:shadow-xl transition hover:-translate-y-1"
        >
          <div className="flex items-center gap-3 mb-4">
            <img src="logos/rust.svg" alt="Rust Logo" className="h-8" />
            <h2 className="text-2xl font-bold text-yellow-300">Proyecto Rust</h2>
          </div>

          <p className="text-gray-300 text-base mb-6 leading-relaxed">
            Sistema de gestión comercial desarrollado con{" "}
            <span className="text-yellow-200 font-semibold">Rust</span> (Tauri) y{" "}
            <span className="text-white font-semibold">React + TypeScript</span>.
            Incluye ventas, stock, caja, reportes de rentabilidad y{" "}
            <span className="text-white font-semibold">
              trazabilidad completa
            </span>{" "}
            de operaciones mediante base de datos{" "}
            <span className="text-white font-semibold">SQLite</span>, con login por
            roles y auditoría interna.
          </p>

          <div className="flex space-x-3 mt-4">
            <a
              href="https://github.com/LautaroBastari/freelance-market-app"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-5 py-2 rounded-lg transition"
            >
              Ver código
            </a>
            <a
              href="https://drive.google.com/drive/folders/1ROyFuz2DuQomwt8iiL6bmKo52x8VZIuo?hl=es-419"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 text-yellow-300 border border-yellow-300 hover:bg-gray-700 font-semibold px-5 py-2 rounded-lg transition"
            >
              Ver documentación
            </a>
          </div>
        </div>

        {/* PROYECTO PHP */}
        <div
          id="proyecto-php"
          className="bg-[#1f1f1f] rounded-2xl shadow-md p-6 border border-sky-500 hover:shadow-xl transition hover:-translate-y-1"
        >
          <div className="flex items-center gap-3 mb-4">
            <img src="logos/php.svg" alt="PHP Logo" className="h-8" />
            <h2 className="text-2xl font-bold text-sky-400">Proyecto PHP</h2>
          </div>

          <p className="text-gray-300 text-base mb-6 leading-relaxed">
            Sistema contable web en{" "}
            <span className="text-sky-300 font-semibold">PHP</span> con generación
            automática de asientos contables y reportes como{" "}
            <span className="text-white font-semibold">Libro Diario</span> y{" "}
            <span className="text-white font-semibold">Libro Mayor</span>. Incluye
            roles, validaciones, ventas, stock y trazabilidad operativa.
          </p>

          <div className="flex space-x-3 mt-4">
            <a
              href="https://github.com/LautaroBastari/sistema-contable-university"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-sky-600 hover:bg-sky-500 text-white font-semibold px-4 py-2 rounded"
            >
              Ver código
            </a>
            <a
              href="https://drive.google.com/drive/folders/1ROyFuz2DuQomwt8iiL6bmKo52x8VZIuo?hl=es-419"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 text-sky-300 border border-sky-300 hover:bg-gray-700 font-semibold px-4 py-2 rounded"
            >
              Ver documentación
            </a>
          </div>
        </div>

        {/* PROYECTO JAVA */}
        <div
          id="proyecto-java"
          className="bg-[#1f1f1f] rounded-2xl shadow-md p-6 border border-orange-500 hover:shadow-xl transition hover:-translate-y-1"
        >
          <div className="flex items-center gap-3 mb-4">
            <img src="logos/java.svg" alt="Java Logo" className="h-8" />
            <h2 className="text-2xl font-bold text-orange-400">Proyecto Java</h2>
          </div>

          <p className="text-gray-300 text-base mb-6 leading-relaxed">
            Sistema de concursos desarrollado con{" "}
            <span className="text-orange-300 font-semibold">
              Java + Spring Boot
            </span>
            . Gestión de usuarios, carga de materiales, evaluación por roles y panel
            administrador para resultados y ganadores.
          </p>

          <div className="flex space-x-3 mt-4">
            <a
              href="https://github.com/LautaroBastari/concurso-materiales-independently"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-orange-600 hover:bg-orange-500 text-white font-semibold px-5 py-2 rounded-lg transition"
            >
              Ver código
            </a>
            <button
              disabled
              className="bg-gray-900 text-gray-500 border border-gray-700 font-semibold px-5 py-2 rounded-lg cursor-not-allowed"
            >
              Documentación (próximamente)
            </button>
          </div>
        </div>

        {/* PROYECTO JAVASCRIPT */}
        <div
          id="proyecto-javascript"
          className="bg-[#1f1f1f] rounded-2xl shadow-md p-6 border border-yellow-300 hover:shadow-xl transition hover:-translate-y-1"
        >
          <div className="flex items-center gap-3 mb-4">
            <img
              src="logos/javascript.svg"
              alt="JavaScript Logo"
              className="h-8"
            />
            <h2 className="text-2xl font-bold text-yellow-300">
              Proyecto JavaScript
            </h2>
          </div>

          <p className="text-gray-300 text-base mb-6 leading-relaxed">
            Asistente académico desarrollado en{" "}
            <span className="text-yellow-200 font-semibold">JavaScript</span>,
            integrado con{" "}
            <span className="text-white font-semibold">Gemini AI</span>, con
            respuestas restringidas al ámbito institucional (carreras, cursadas e
            inscripciones), priorizando control y seguridad.
          </p>

          <div className="flex space-x-3 mt-4">
            <a
              href="https://github.com/LautaroBastari/chatbot-gemini"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-400 hover:bg-yellow-300 text-black font-semibold px-5 py-2 rounded-lg transition"
            >
              Ver código
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
