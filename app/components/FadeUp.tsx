'use client';

import { useEffect, useRef, useState } from 'react';

type FadeUpProps = {
  children?: React.ReactNode;
  delay?: 0 | 1 | 2 | 3;
  className?: string;
} & React.HTMLAttributes<HTMLDivElement>;

export default function FadeUp({ children, delay, className = '', ...rest }: FadeUpProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(node);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const delayClass = delay ? `delay-${delay}` : '';

  return (
    <div
      ref={ref}
      className={`fade-up ${delayClass} ${isVisible ? 'is-visible' : ''} ${className}`}
      {...rest}
    >
      {children}
    </div>
  );
}