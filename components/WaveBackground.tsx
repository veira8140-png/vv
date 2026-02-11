
import React, { useEffect, useRef } from 'react';
import { COLORS } from '../constants.tsx';

const WaveBackground: React.FC<{ opacity?: number }> = ({ opacity = 0.15 }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.scale(dpr, dpr);
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Optimized line counts for better performance
      const bundles = 6;
      const linesPerBundle = 4; // Reduced from 12 to 4 for speed
      
      ctx.lineWidth = 0.5;
      ctx.strokeStyle = COLORS.softWavePurple;

      for (let b = 0; b < bundles; b++) {
        const yBase = (window.innerHeight / (bundles + 1)) * (b + 1);
        
        for (let l = 0; l < linesPerBundle; l++) {
          ctx.beginPath();
          ctx.globalAlpha = (opacity / linesPerBundle) * (1 - l / linesPerBundle);
          
          const offset = l * 4;
          const speedFactor = 0.001 + (b * 0.0003);
          
          // Increased step size from 20 to 50 for fewer path commands
          for (let x = 0; x <= window.innerWidth; x += 50) {
            const relX = x / window.innerWidth;
            
            // Simplified parametric curves for reduced CPU load
            const wave1 = Math.sin(relX * 2.5 + time * speedFactor + b) * 35;
            const wave2 = Math.cos(relX * 1.2 - time * (speedFactor * 0.7) + b) * 15;
            
            const y = yBase + wave1 + wave2 + offset;
            
            if (x === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
          }
          ctx.stroke();
        }
      }

      time += 0.8; // Adjusted time increment
      animationFrameId = requestAnimationFrame(draw);
    };

    window.addEventListener('resize', resize);
    resize();
    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [opacity]);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed inset-0 pointer-events-none z-0 bg-[#2C0D36] will-change-transform" 
      aria-hidden="true"
    />
  );
};

export default WaveBackground;
