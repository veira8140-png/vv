
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
      
      // Construction: Thousands of thin, continuous lines
      // We simulate "thousands" by rendering a few dozen parametric bundles
      const bundles = 8;
      const linesPerBundle = 12;
      
      ctx.lineWidth = 0.5;
      ctx.strokeStyle = COLORS.softWavePurple;

      for (let b = 0; b < bundles; b++) {
        const yBase = (window.innerHeight / (bundles + 1)) * (b + 1);
        
        for (let l = 0; l < linesPerBundle; l++) {
          ctx.beginPath();
          ctx.globalAlpha = (opacity / linesPerBundle) * (1 - l / linesPerBundle);
          
          const offset = l * 2;
          const speedFactor = 0.002 + (b * 0.0005);
          
          for (let x = 0; x <= window.innerWidth; x += 20) {
            const relX = x / window.innerWidth;
            
            // Parametric curves: Layered parallax, constant speed
            const wave1 = Math.sin(relX * 3 + time * speedFactor + b) * 40;
            const wave2 = Math.cos(relX * 1.5 - time * (speedFactor * 0.8) + b) * 20;
            const wave3 = Math.sin(relX * 5 + time * 0.01 + l * 0.1) * 5;
            
            const y = yBase + wave1 + wave2 + wave3 + offset;
            
            if (x === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
          }
          ctx.stroke();
        }
      }

      time += 1;
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
      className="fixed inset-0 pointer-events-none z-0 bg-[#2C0D36]" 
    />
  );
};

export default WaveBackground;
