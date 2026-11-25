import { useEffect } from 'react';

/**
 * Arms the page-wide reveal system once.
 * Elements carrying [data-reveal] are visible by default; when motion is
 * allowed and IntersectionObserver exists, they start hidden and resolve
 * as they enter the viewport. Nodes added later (filters, expanders) are
 * picked up by a MutationObserver.
 */
export const useRevealAll = () => {
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce || !('IntersectionObserver' in window)) return undefined;

    const root = document.documentElement;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.setAttribute('data-shown', '');
            io.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.12 },
    );

    const watch = (scope) => {
      scope.querySelectorAll?.('[data-reveal]:not([data-shown])').forEach((el) => io.observe(el));
      if (scope.matches?.('[data-reveal]:not([data-shown])')) io.observe(scope);
    };

    // Anything already on screen at arm time resolves on the next frame,
    // so the first viewport never flashes empty.
    root.classList.add('reveal-armed');
    watch(document);

    const mo = new MutationObserver((records) => {
      records.forEach((r) => r.addedNodes.forEach((n) => n.nodeType === 1 && watch(n)));
    });
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      io.disconnect();
      mo.disconnect();
      root.classList.remove('reveal-armed');
    };
  }, []);
};

/** Returns true when the user prefers reduced motion (read once). */
export const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export default useRevealAll;
