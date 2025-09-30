import { useEffect, useRef } from 'react';

export const Spotlight = () => {
  const spotlightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!spotlightRef.current) return;
      
      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth) * 100;
      const y = (clientY / window.innerHeight) * 100;
      
      spotlightRef.current.style.background = `
        radial-gradient(circle 600px at ${x}% ${y}%, 
          hsl(217 91% 60% / 0.15), 
          transparent 40%),
        radial-gradient(circle 400px at ${x}% ${y}%, 
          hsl(263 70% 65% / 0.1), 
          transparent 40%)
      `;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div 
      ref={spotlightRef}
      className="spotlight-effect animate-spotlight"
      style={{
        background: `
          radial-gradient(circle 600px at 50% 50%, 
            hsl(217 91% 60% / 0.15), 
            transparent 40%),
          radial-gradient(circle 400px at 80% 20%, 
            hsl(263 70% 65% / 0.1), 
            transparent 40%)
        `,
      }}
    />
  );
};
