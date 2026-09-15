import { useEffect } from "react";

/**
 * Intercepts mouse-wheel scrolling on the page and eases it toward the
 * target position instead of jumping in the browser's default discrete
 * steps. Leaves wheel events alone when they happen inside a nested
 * scrollable element (e.g. the booking modal, a scrollable dropdown),
 * so those still scroll normally.
 */
export function useSmoothWheelScroll({ ease = 0.12 } = {}) {
  useEffect(() => {
    let current = window.scrollY;
    let target = window.scrollY;
    let animating = false;
    let rafId = null;

    const maxScroll = () => document.documentElement.scrollHeight - window.innerHeight;

    const isInsideScrollable = (node) => {
      let el = node;
      while (el && el !== document.body) {
        const style = window.getComputedStyle(el);
        const scrollable = /(auto|scroll)/.test(style.overflowY);
        if (scrollable && el.scrollHeight > el.clientHeight) return true;
        el = el.parentElement;
      }
      return false;
    };

    const step = () => {
      current += (target - current) * ease;
      if (Math.abs(target - current) < 0.4) {
        current = target;
        window.scrollTo(0, current);
        animating = false;
        return;
      }
      window.scrollTo(0, current);
      rafId = requestAnimationFrame(step);
    };

    // Normalize deltaY to pixels. Some browsers/mice report wheel deltas
    // in "lines" (deltaMode 1) or full "pages" (deltaMode 2) instead of
    // pixels (deltaMode 0) - without this, scrolling on those devices
    // barely moves the page at all, which looks like it's "not working".
    const normalizeDelta = (e) => {
      if (e.deltaMode === 1) return e.deltaY * 16; // line mode
      if (e.deltaMode === 2) return e.deltaY * window.innerHeight * 0.9; // page mode
      return e.deltaY;
    };

    const onWheel = (e) => {
      if (isInsideScrollable(e.target)) return; // let nested scroll areas behave normally

      // Don't hijack the wheel while something (e.g. the booking modal)
      // has locked page scroll via body { overflow: hidden }.
      if (window.getComputedStyle(document.body).overflowY === "hidden") return;

      e.preventDefault();
      target = Math.max(0, Math.min(target + normalizeDelta(e), maxScroll()));

      if (!animating) {
        animating = true;
        rafId = requestAnimationFrame(step);
      }
    };

    // Keep our internal position in sync if the page scrolls some other
    // way (keyboard, scrollbar drag, anchor links).
    const onNativeScroll = () => {
      if (!animating) {
        current = window.scrollY;
        target = window.scrollY;
      }
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("scroll", onNativeScroll, { passive: true });

    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("scroll", onNativeScroll);
      cancelAnimationFrame(rafId);
    };
  }, [ease]);
}
