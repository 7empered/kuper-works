const HEADER_OFFSET = 90;
const DURATION = 700;

// Tracks the in-flight animation so a new click (or a rapid double click)
// cancels the previous one instead of the two fighting over `scrollTo`,
// which is what produced the "abrupt jump" behaviour.
let activeRafId = null;

/**
 * Animates the window scroll position to a target element.
 *
 * Done in JS rather than via CSS `scroll-behavior: smooth` on <html>,
 * because that CSS property also slows down plain mouse-wheel scrolling,
 * which feels sluggish. This way only nav clicks get the eased animation.
 */
function animatedScrollTo(el) {
  if (!el) return;

  if (activeRafId !== null) {
    cancelAnimationFrame(activeRafId);
    activeRafId = null;
  }

  const reduceMotion =
    window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const startScroll = window.scrollY;
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  const targetScroll = Math.max(
    0,
    Math.min(startScroll + el.getBoundingClientRect().top - HEADER_OFFSET, maxScroll)
  );

  // NOTE: if this still jumps instead of animating, check whether your
  // browser/OS has "reduce motion" turned on (e.g. Chrome DevTools ->
  // Rendering tab -> "Emulate CSS media feature prefers-reduced-motion",
  // or the OS-level accessibility setting). That's the only code path
  // that skips the animation below.
  if (reduceMotion) {
    window.scrollTo(0, targetScroll);
    return;
  }

  const startTime = performance.now();
  const easeInOutQuad = (t) => (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2);

  const step = (now) => {
    const progress = Math.min((now - startTime) / DURATION, 1);
    window.scrollTo(0, startScroll + (targetScroll - startScroll) * easeInOutQuad(progress));
    if (progress < 1) {
      activeRafId = requestAnimationFrame(step);
    } else {
      activeRafId = null;
    }
  };
  activeRafId = requestAnimationFrame(step);
}

/**
 * Returns a click handler for in-page nav links: prevents the default
 * jump, smoothly animates to the target section, and (optionally) closes
 * the mobile menu.
 */
export function useScrollToSection(onNavigate) {
  return (e, id) => {
    if (e && e.preventDefault) e.preventDefault();
    animatedScrollTo(document.getElementById(id));
    if (onNavigate) onNavigate();
  };
}
