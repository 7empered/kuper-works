import { useCallback, useEffect, useRef, useState } from "react";
import { AUTO_ADVANCE_MS, IDLE_RETURN_MS } from "../data/content";

/**
 * Drives the "Результат" before/after slider:
 * - auto-advances through the list of comparisons
 * - lets the person drag the reveal handle, then eases it back to center
 *   after a short idle period and resumes auto-advance
 */
export function useCompareCarousel(items) {
  const [idx, setIdx] = useState(0);
  const [reveal, setReveal] = useState(50);
  const [animated, setAnimated] = useState(true);

  const autoRef = useRef(null);
  const idleRef = useRef(null);

  const restartAuto = useCallback(() => {
    clearInterval(autoRef.current);
    autoRef.current = setInterval(() => {
      setIdx((i) => (i + 1) % items.length);
      setReveal(50);
      setAnimated(true);
    }, AUTO_ADVANCE_MS);
  }, [items.length]);

  useEffect(() => {
    restartAuto();
    return () => {
      clearInterval(autoRef.current);
      clearTimeout(idleRef.current);
    };
  }, [restartAuto]);

  const goTo = (i) => {
    setIdx((i + items.length) % items.length);
    setReveal(50);
    setAnimated(true);
    restartAuto();
  };

  const handleSliderInput = (e) => {
    clearTimeout(idleRef.current);
    clearInterval(autoRef.current);
    setAnimated(false);
    setReveal(Number(e.target.value));
  };

  const handleSliderRelease = () => {
    clearTimeout(idleRef.current);
    idleRef.current = setTimeout(() => {
      setAnimated(true);
      setReveal(50);
      restartAuto();
    }, IDLE_RETURN_MS);
  };

  return {
    current: items[idx],
    idx,
    reveal,
    animated,
    goTo,
    handleSliderInput,
    handleSliderRelease,
  };
}
