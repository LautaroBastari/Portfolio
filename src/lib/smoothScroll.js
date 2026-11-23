// Scroll suave propio para los links internos (#seccion).
// No depende de `scroll-behavior` del navegador, que se desactiva si el sistema
// tiene las animaciones apagadas, y usa una curva de aceleración más amena.

const HEADER_OFFSET = 72; // alto aprox. de la navbar fija
const easeInOutCubic = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

let raf = null;

export function scrollToY(targetY) {
  const startY = window.scrollY;
  const dist = targetY - startY;
  if (Math.abs(dist) < 2) return;
  // Duración proporcional a la distancia, entre 600 y 1300 ms
  const duration = Math.min(1300, Math.max(600, Math.abs(dist) * 0.45));
  const start = performance.now();
  cancelAnimationFrame(raf);

  const step = (now) => {
    const p = Math.min(1, (now - start) / duration);
    window.scrollTo(0, startY + dist * easeInOutCubic(p));
    if (p < 1) raf = requestAnimationFrame(step);
  };
  raf = requestAnimationFrame(step);

  // Si el usuario scrollea con la rueda o toca la pantalla, se cancela
  const cancel = () => cancelAnimationFrame(raf);
  window.addEventListener("wheel", cancel, { once: true, passive: true });
  window.addEventListener("touchstart", cancel, { once: true, passive: true });
}

export function scrollToId(id) {
  const el = document.getElementById(id);
  if (!el) return;
  const y = id === "inicio" ? 0 : el.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;
  scrollToY(Math.max(0, y));
}

export function installSmoothAnchors() {
  document.addEventListener("click", (e) => {
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey) return;
    const a = e.target.closest('a[href^="#"]');
    if (!a) return;
    const id = a.getAttribute("href").slice(1);
    if (!id || !document.getElementById(id)) return;
    e.preventDefault();
    scrollToId(id);
    history.replaceState(null, "", `#${id}`);
  });
}
