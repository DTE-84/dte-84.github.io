'use client';

import React, { useEffect, useRef } from 'react';

const BgAnimation: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: any[] = [];
    let w: number, h: number;

    const resize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resize);
    resize();

    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      alpha: number;

      constructor() {
        this.x = Math.random() * w;
        this.y = Math.random() * h;
        this.size = Math.random() * 2 + 0.5;
        this.speedX = Math.random() * 1 - 0.5;
        this.speedY = Math.random() * 1 - 0.5;
        this.alpha = Math.random() * 0.5 + 0.1;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > w) this.x = 0;
        else if (this.x < 0) this.x = w;
        if (this.y > h) this.y = 0;
        else if (this.y < 0) this.y = h;
      }

      draw() {
        if (!ctx) return;
        const isYellow = document.documentElement.getAttribute('data-theme') === 'yellow';
        const color = isYellow ? '163, 177, 138' : '125, 211, 252';
        ctx.fillStyle = `rgba(${color}, ${this.alpha})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const init = () => {
      particles = [];
      for (let i = 0; i < 150; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, w, h);
      particles.forEach((p) => {
        p.update();
        p.draw();
      });
      animationFrameId = requestAnimationFrame(animate);
    };

    init();
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="bg-animation fixed inset-0 -z-10 overflow-hidden">
      <canvas ref={canvasRef} id="projector" className="absolute inset-0" />
      <div 
        className="bg-image absolute inset-0 opacity-5 mix-blend-luminosity grayscale contrast-125 brightness-75"
        style={{ backgroundImage: 'url("/assets/proxima.jpg")', backgroundPosition: 'center', backgroundSize: 'cover' }}
      />
      <div className="glow-orb orb1 absolute w-[500px] h-[500px] bg-accent -top-[10%] -left-[10%] rounded-full blur-[80px] opacity-15 animate-[float_8s_ease-in-out_infinite]" />
      <div className="glow-orb orb2 absolute w-[400px] h-[400px] bg-accent bottom-[10%] -right-[5%] rounded-full blur-[80px] opacity-15 animate-[float_8s_ease-in-out_infinite_delay-[-2s]]" />
    </div>
  );
};

export default BgAnimation;
