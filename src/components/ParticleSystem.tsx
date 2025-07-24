import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  color: string;
  size: number;
}

interface ParticleSystemProps {
  mood: string;
  isActive: boolean;
}

export const ParticleSystem: React.FC<ParticleSystemProps> = ({ mood, isActive }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number>();

  const getMoodConfig = (mood: string) => {
    switch (mood) {
      case 'energetic':
        return {
          colors: ['#ff6b35', '#f7931e', '#ffaa00'],
          particleCount: 50,
          speed: 3,
          size: 4
        };
      case 'calm':
        return {
          colors: ['#60a5fa', '#3b82f6', '#1d4ed8'],
          particleCount: 30,
          speed: 1,
          size: 6
        };
      case 'melancholic':
        return {
          colors: ['#8b5cf6', '#7c3aed', '#6d28d9'],
          particleCount: 25,
          speed: 0.5,
          size: 3
        };
      case 'happy':
        return {
          colors: ['#fbbf24', '#f59e0b', '#d97706'],
          particleCount: 40,
          speed: 2,
          size: 5
        };
      default:
        return {
          colors: ['#667eea', '#764ba2', '#f093fb'],
          particleCount: 35,
          speed: 1.5,
          size: 4
        };
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !isActive) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const config = getMoodConfig(mood);
    
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const createParticle = (): Particle => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * config.speed,
      vy: (Math.random() - 0.5) * config.speed,
      life: 0,
      maxLife: Math.random() * 200 + 100,
      color: config.colors[Math.floor(Math.random() * config.colors.length)],
      size: Math.random() * config.size + 1
    });

    // Initialize particles
    particlesRef.current = Array.from({ length: config.particleCount }, createParticle);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particlesRef.current.forEach((particle, index) => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.life++;

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Calculate opacity based on life
        const opacity = 1 - (particle.life / particle.maxLife);
        
        if (particle.life >= particle.maxLife) {
          particlesRef.current[index] = createParticle();
        } else {
          ctx.save();
          ctx.globalAlpha = opacity * 0.6;
          ctx.fillStyle = particle.color;
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();
        }
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [mood, isActive]);

  if (!isActive) return null;

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-10"
      style={{ opacity: 0.4 }}
    />
  );
};