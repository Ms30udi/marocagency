import React, { memo, useCallback, useEffect, useRef } from 'react';
import { animate } from 'framer-motion';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

const cn = (...inputs) => {
  return twMerge(clsx(inputs));
};

const GlowingEffect = memo(({
  blur = 8,
  inactiveZone = 0.01,
  proximity = 80,
  spread = 60,
  glow = true,
  className,
  movementDuration = 0.8,
  borderWidth = 3,
  disabled = false,
}) => {
  const containerRef = useRef(null);
  const lastPosition = useRef({ x: 0, y: 0 });
  const animationFrameRef = useRef(0);

  const handleMove = useCallback((e) => {
    if (!containerRef.current) return;

    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }

    animationFrameRef.current = requestAnimationFrame(() => {
      const element = containerRef.current;
      if (!element) return;

      const { left, top, width, height } = element.getBoundingClientRect();
      const mouseX = e?.x ?? lastPosition.current.x;
      const mouseY = e?.y ?? lastPosition.current.y;

      if (e) {
        lastPosition.current = { x: mouseX, y: mouseY };
      }

      const center = [left + width * 0.5, top + height * 0.5];
      const distanceFromCenter = Math.hypot(mouseX - center[0], mouseY - center[1]);
      const inactiveRadius = 0.5 * Math.min(width, height) * inactiveZone;

      if (distanceFromCenter < inactiveRadius) {
        element.style.setProperty('--active', '0');
        return;
      }

      const isActive =
        mouseX > left - proximity &&
        mouseX < left + width + proximity &&
        mouseY > top - proximity &&
        mouseY < top + height + proximity;

      element.style.setProperty('--active', isActive ? '1' : '0');

      if (!isActive) return;

      const currentAngle = parseFloat(element.style.getPropertyValue('--start')) || 0;
      let targetAngle = (180 * Math.atan2(mouseY - center[1], mouseX - center[0])) / Math.PI + 90;

      const angleDiff = ((targetAngle - currentAngle + 180) % 360) - 180;
      const newAngle = currentAngle + angleDiff;

      animate(currentAngle, newAngle, {
        duration: movementDuration,
        ease: [0.16, 1, 0.3, 1],
        onUpdate: (value) => {
          element.style.setProperty('--start', String(value));
        },
      });
    });
  }, [inactiveZone, proximity, movementDuration]);

  useEffect(() => {
    if (disabled) return;

    const handleScroll = () => handleMove();
    const handlePointerMove = (e) => handleMove(e);

    window.addEventListener('scroll', handleScroll, { passive: true });
    document.body.addEventListener('pointermove', handlePointerMove, { passive: true });

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      window.removeEventListener('scroll', handleScroll);
      document.body.removeEventListener('pointermove', handlePointerMove);
    };
  }, [handleMove, disabled]);

  return (
    <>
      <div
        ref={containerRef}
        style={{
          '--blur': `${blur}px`,
          '--spread': spread,
          '--start': '0',
          '--active': '0',
          '--glowingeffect-border-width': `${borderWidth}px`,
        }}
        className={cn(
          'pointer-events-none absolute inset-0 rounded-[inherit] transition-opacity',
          blur > 0 && 'blur-[var(--blur)]',
          className,
          disabled && '!hidden'
        )}
      >
        <div className={cn(
          'glow rounded-[inherit]',
          'after:content-[""] after:rounded-[inherit] after:absolute after:inset-[calc(-1*var(--glowingeffect-border-width))]',
          'after:[border:var(--glowingeffect-border-width)_solid_transparent]',
          'after:[background:conic-gradient(from_calc((var(--start)-var(--spread))*1deg),transparent_0deg,#092f73_calc(var(--spread)*1deg),transparent_calc(var(--spread)*2deg))]',
          'after:[background-attachment:fixed]',
          'after:opacity-[var(--active)] after:transition-opacity after:duration-500',
          'after:[mask-clip:padding-box,border-box]',
          'after:[mask-composite:intersect]',
          'after:[mask:linear-gradient(#000,#000)_padding-box,linear-gradient(#000,#000)]'
        )} />
      </div>
    </>
  );
});

GlowingEffect.displayName = 'GlowingEffect';

export { GlowingEffect };
