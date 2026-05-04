'use client';

import { useEffect, useRef, useState } from 'react';

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [isTouch, setIsTouch] = useState(true); // default true to avoid SSR flash

  useEffect(() => {
    // Only show cursor on non-touch pointer devices
    const hasPointer = window.matchMedia('(pointer: fine)').matches;
    setIsTouch(!hasPointer);
    if (!hasPointer) return;

    const cursor = cursorRef.current;
    const ring = ringRef.current;
    if (!cursor || !ring) return;

    let raf: number;
    let mx = -100, my = -100;
    let rx = -100, ry = -100;

    const move = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      cursor.style.transform = `translate(${mx - 4}px, ${my - 4}px)`;
    };

    const lerp = () => {
      rx += (mx - rx) * 0.12;
      ry += (my - ry) * 0.12;
      ring.style.transform = `translate(${rx - 16}px, ${ry - 16}px)`;
      raf = requestAnimationFrame(lerp);
    };

    const onEnterLink = () => {
      ring.style.width = '48px';
      ring.style.height = '48px';
      ring.style.opacity = '0.6';
    };

    const onLeaveLink = () => {
      ring.style.width = '32px';
      ring.style.height = '32px';
      ring.style.opacity = '1';
    };

    window.addEventListener('mousemove', move);
    raf = requestAnimationFrame(lerp);

    const links = document.querySelectorAll('a, button, [role="button"]');
    links.forEach((l) => {
      l.addEventListener('mouseenter', onEnterLink);
      l.addEventListener('mouseleave', onLeaveLink);
    });

    return () => {
      window.removeEventListener('mousemove', move);
      cancelAnimationFrame(raf);
      links.forEach((l) => {
        l.removeEventListener('mouseenter', onEnterLink);
        l.removeEventListener('mouseleave', onLeaveLink);
      });
    };
  }, []);

  if (isTouch) return null;

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-accent pointer-events-none z-[9999] mix-blend-difference"
        style={{ transition: 'none' }}
      />
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-accent pointer-events-none z-[9998] opacity-70"
        style={{ transition: 'width 0.3s, height 0.3s, opacity 0.3s' }}
      />
    </>
  );
}
