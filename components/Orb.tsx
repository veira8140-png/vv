
import React, { useState, useEffect, useRef, useMemo } from 'react';
import { OrbState } from '../types';
import { COLORS } from '../constants.tsx';

interface OrbProps {
  state?: OrbState;
  size?: number;
  className?: string;
  interactive?: boolean;
}

const Orb: React.FC<OrbProps> = ({ state = OrbState.IDLE, size = 300, className = "", interactive = true }) => {
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  // Smooth mouse tracking physics (Lerp)
  useEffect(() => {
    if (!interactive) return;

    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    const lerp = (start: number, end: number, factor: number) => start + (end - start) * factor;

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      targetX = (clientX / innerWidth - 0.5) * 40;
      targetY = (clientY / innerHeight - 0.5) * 40;
    };

    const animate = () => {
      currentX = lerp(currentX, targetX, 0.05);
      currentY = lerp(currentY, targetY, 0.05);
      setOffset({ x: currentX, y: currentY });
      requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove);
    const animId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animId);
    };
  }, [interactive]);

  const glowIntensity = useMemo(() => {
    switch (state) {
      case OrbState.ACTIVE: return 0.9;
      case OrbState.SYNCING: return 0.6;
      case OrbState.SUCCESS: return 1.2;
      case OrbState.OFFLINE: return 0.2;
      default: return 0.4;
    }
  }, [state]);

  const pulseDuration = state === OrbState.SYNCING ? '2s' : '6s';

  return (
    <div 
      ref={containerRef}
      className={`relative flex items-center justify-center transition-all duration-1000 ${className}`}
      style={{ 
        width: size, 
        height: size,
        transform: `translate(${offset.x}px, ${offset.y}px)`,
      }}
    >
      {/* Veira Orb Halo (Outer Glow) */}
      <div 
        className="absolute inset-0 rounded-full blur-[60px] transition-opacity duration-1000"
        style={{ 
          background: `radial-gradient(circle, ${COLORS.highlightPurpleStart} 0%, transparent 70%)`,
          opacity: glowIntensity * 0.4,
          transform: `scale(${1 + glowIntensity * 0.2})`,
        }}
      />
      
      {/* Main Orb Body - Updated to Plain Purple Gradient */}
      <div 
        className="relative w-full h-full rounded-full overflow-hidden shadow-[inset_0_2px_15px_rgba(255,255,255,0.3)] border border-white/10"
        style={{
          background: `radial-gradient(circle at 35% 35%, ${COLORS.highlightPurpleEnd} 0%, ${COLORS.highlightPurpleStart} 100%)`,
        }}
      >
        {/* Layer 1: Intelligence Motion (Subtle) */}
        <div 
          className="absolute inset-[-50%] opacity-20 mix-blend-soft-light animate-[spin_25s_linear_infinite]"
          style={{
            background: `conic-gradient(from 0deg, transparent, white, transparent, white, transparent)`,
            filter: 'blur(20px)',
          }}
        />
        
        {/* Layer 2: Data Flow (Subtle) */}
        <div 
          className="absolute inset-0 opacity-20 animate-[pulse_4s_ease-in-out_infinite]"
          style={{
            backgroundImage: `radial-gradient(circle at 50% 50%, white 0%, transparent 10%)`,
            backgroundSize: '40% 40%',
            animationDuration: pulseDuration
          }}
        />

        {/* Top Surface Specular Highlight */}
        <div 
          className="absolute top-1 left-1/4 w-1/2 h-1/4 opacity-40 rounded-full"
          style={{
            background: `linear-gradient(to bottom, white, transparent)`,
            filter: 'blur(6px)',
            transform: `translate(${offset.x * 0.3}px, ${offset.y * 0.3}px)`,
          }}
        />
      </div>
    </div>
  );
};

export default Orb;
