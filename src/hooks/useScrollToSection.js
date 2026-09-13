const HEADER_OFFSET = 90;

/**
 * Animates the scroll position to a target element, finding whichever
 * ancestor actually scrolls (the window, or a nested scroll container).
 * Falls back to an instant jump when the user prefers reduced motion.
 */
function animatedScrollTo(el) {
  if (!el) return;

  const reduceMotion =
    window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  let parent = el.parentElement;
  while (parent && parent !== document.body) {
    const style = window.getComputedStyle(parent);
    if (/(auto|scroll)/.test(style.overflowY) && parent.scrollHeight > parent.clientHeight) break;
    parent = parent.parentElement;
  }

  const useWindow = !parent || parent === document.body;
  const containerTop = useWindow ? 0 : parent.getBoundingClientRect().top;
  const startScroll = useWindow ? window.scrollY : parent.scrollTop;
  const targetScroll = startScroll + (el.getBoundingClientRect().top - containerTop) - HEADER_OFFSET;

  if (reduceMotion) {
    if (useWindow) window.scrollTo(0, targetScroll);
    else parent.scrollTop = targetScroll;
    return;
  }

  const duration = 700;
  const startTime = performance.now();
  const easeInOutQuad = (t) => (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2);

  const step = (now) => {
    const progress = Math.min((now - startTime) / duration, 1);
    const value = startScroll + (targetScroll - startScroll) * easeInOutQuad(progress);
    if (useWindow) window.scrollTo(0, value);
    else parent.scrollTop = value;
    if (progress < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

/**
 * Returns a click handler for in-page nav links: prevents the default
 * jump, animates to the target section, and (optionally) closes the
 * mobile menu.
 */
export function useScrollToSection(onNavigate) {
  return (e, id) => {
    if (e && e.preventDefault) e.preventDefault();
    animatedScrollTo(document.getElementById(id));
    if (onNavigate) onNavigate();
  };
}
