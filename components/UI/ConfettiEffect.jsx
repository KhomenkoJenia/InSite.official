import { useEffect, useRef, useState } from "react";
import styles from "./ConfettiEffect.module.css";

export default function ConfettiEffect() {
  const canvasRef = useRef(null);
  const particles = useRef([]);
  const mousePos = useRef({ x: 0, y: 0 });
  const colors = ["#ffffff", "#c71411", "#888787", "#d1aeae"];
  const [isActive, setIsActive] = useState(false);

  class Particle {
    constructor(x, y, size, color, speedX, speedY) {
      this.x = x;
      this.y = y;
      this.size = size;
      this.color = color;
      this.speedX = speedX * 0.5; // Уменьшаем начальную скорость по X
      this.speedY = speedY * 0.5; // Уменьшаем начальную скорость по Y
    }

    update() {
      this.x += this.speedX;
      this.y += this.speedY;
      this.size *= 0.995; // Медленное уменьшение размера
    }

    draw(ctx) {
      ctx.fillStyle = this.color;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.closePath();
      ctx.fill();
    }
  }

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const confettiContainer = canvas.parentNode;

    const resizeCanvas = () => {
      canvas.width = confettiContainer.clientWidth;
      canvas.height = confettiContainer.clientHeight;
    };
    resizeCanvas();

    const createExplosion = (x, y) => {
      const particleCount = 50;
      for (let i = 0; i < particleCount; i++) {
        const size = Math.random() * 5 + 2;
        const color = colors[Math.floor(Math.random() * colors.length)];
        const speedX = (Math.random() * 2 - 1) * 0.5; // Уменьшаем скорость по X
        const speedY = (Math.random() * 2 - 1) * 0.5; // Уменьшаем скорость по Y
        particles.current.push(new Particle(x, y, size, color, speedX, speedY));
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.current = particles.current.filter((particle) => {
        particle.update();
        particle.draw(ctx);
        return particle.size > 0.5;
      });
      requestAnimationFrame(animate);
    };

    const handleMouseMove = (event) => {
      const rect = canvas.getBoundingClientRect();
      mousePos.current.x = event.clientX - rect.left;
      mousePos.current.y = event.clientY - rect.top;
    };

    const handleMouseEnter = () => setIsActive(true);
    const handleMouseLeave = () => {
      setIsActive(false);
      particles.current = []; // Очистка частиц при выходе курсора
    };

    animate();

    confettiContainer.addEventListener("mousemove", handleMouseMove);
    confettiContainer.addEventListener("mouseenter", handleMouseEnter);
    confettiContainer.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("resize", resizeCanvas);

    const interval = setInterval(() => {
      if (isActive) createExplosion(mousePos.current.x, mousePos.current.y);
    }, 50);

    return () => {
      clearInterval(interval);
      confettiContainer.removeEventListener("mousemove", handleMouseMove);
      confettiContainer.removeEventListener("mouseenter", handleMouseEnter);
      confettiContainer.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [isActive]);

  return <canvas ref={canvasRef} className={styles.canvas} />;
}
