import { useEffect, useRef, useState } from "react";

/**
 * Drives the testimonials carousel: shows 1/2/3 cards depending on
 * viewport width, loops seamlessly in both directions (via cloned
 * slides at each end), and supports both arrow clicks and touch swipe.
 *
 * Uses a pure percentage transform (no DOM measurement) so the
 * animation is always symmetric — measuring live layout here was the
 * source of an earlier bug where the slide-in/out timing differed
 * between directions.
 */
export function useTestimonialsCarousel(realCount, cloneCount) {
  const [testiIndex, setTestiIndex] = useState(cloneCount);
  const [testiAnimate, setTestiAnimate] = useState(true);
  const [testiVisible, setTestiVisible] = useState(1);

  const trackRef = useRef(null);
  const touchX = useRef(0);
  const busy = useRef(false);

  useEffect(() => {
    const calcVisible = () => {
      const w = window.innerWidth;
      setTestiVisible(w >= 1000 ? 3 : w >= 640 ? 2 : 1);
    };
    calcVisible();
    window.addEventListener("resize", calcVisible);
    return () => window.removeEventListener("resize", calcVisible);
  }, []);

  const scrollTesti = (dir) => {
    if (busy.current) return;
    busy.current = true;
    setTestiIndex((i) => i + dir);
    // safety net: if transitionend never fires for some reason, don't stay locked forever
    setTimeout(() => {
      busy.current = false;
    }, 900);
  };

  const handleTouchStart = (e) => {
    touchX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e) => {
    const dx = e.changedTouches[0].clientX - touchX.current;
    if (dx < -40) scrollTesti(1);
    else if (dx > 40) scrollTesti(-1);
  };

  const handleTransitionEnd = (e) => {
    if (e.propertyName && e.propertyName !== "transform") return;

    if (testiIndex >= cloneCount + realCount) {
      jumpTo(testiIndex - realCount);
    } else if (testiIndex < cloneCount) {
      jumpTo(testiIndex + realCount);
    } else {
      busy.current = false;
    }
  };

  function jumpTo(nextIndex) {
    setTestiAnimate(false);
    setTestiIndex(nextIndex);
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setTestiAnimate(true);
        busy.current = false;
      });
    });
  }

  return {
    testiIndex,
    testiAnimate,
    testiVisible,
    trackRef,
    scrollTesti,
    handleTouchStart,
    handleTouchEnd,
    handleTransitionEnd,
  };
}
