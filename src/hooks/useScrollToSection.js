/**
 * Returns a click handler for in-page nav links: prevents the default
 * jump and scrolls to the target section.
 *
 * This relies on native `scrollIntoView` + the `scroll-behavior: smooth`
 * set on <html> in index.css — in a real browser (unlike the sandboxed
 * artifact preview this project started life in) that's reliable and
 * automatically respects the person's reduced-motion preference. The
 * `scroll-margin-top` rule on section elements (see index.css) accounts
 * for the fixed header so the heading isn't hidden underneath it.
 */
export function useScrollToSection(onNavigate) {
  return (e, id) => {
    if (e && e.preventDefault) e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    if (onNavigate) onNavigate();
  };
}
