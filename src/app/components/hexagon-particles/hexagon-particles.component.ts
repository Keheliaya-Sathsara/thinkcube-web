import { Component, OnInit, OnDestroy, ElementRef, ViewChild, AfterViewInit, inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ThemeService } from '../../services/theme.service';

interface TrailPoint {
  x: number;
  y: number;
  hue: number;
  age: number;
}

interface Particle {
  x: number;
  y: number;
  hue: number;
  hueSpeed: number;
  angle: number;
  turnAngle: number;
  stepCount: number;
  stepsPerSide: number;
  currentSide: number;
  speed: number;
  trail: TrailPoint[];
  maxTrailLength: number;
  size: number;
}

@Component({
  selector: 'app-hexagon-particles',
  standalone: true,
  imports: [CommonModule],
  template: `
    <canvas 
      #particleCanvas 
      class="fixed inset-0 pointer-events-none"
      [style.zIndex]="0">
    </canvas>
  `,
  styles: [`
    canvas {
      width: 100%;
      height: 100%;
    }
  `]
})
export class HexagonParticlesComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('particleCanvas', { static: true }) canvasRef!: ElementRef<HTMLCanvasElement>;
  
  private themeService = inject(ThemeService);
  private platformId = inject(PLATFORM_ID);
  private ctx!: CanvasRenderingContext2D;
  private particles: Particle[] = [];
  private animationId: number = 0;
  private resizeObserver!: ResizeObserver;
  private isBrowser = false;
  private lastEmitTime = 0;
  
  // Configuration matching tsParticles settings
  private readonly EMIT_DELAY = 250; // ms between emissions
  private readonly PARTICLE_SPEED = 3;
  private readonly TRAIL_LENGTH = 50;
  private readonly TURN_STEPS = 30; // steps before turning
  private readonly SIDES = 6; // hexagon
  private readonly HUE_SPEED = 10;

  ngOnInit(): void {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngAfterViewInit(): void {
    if (this.isBrowser) {
      this.setupCanvas();
      this.startAnimation();
      this.setupResizeObserver();
    }
  }

  ngOnDestroy(): void {
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
    }
    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
    }
  }

  private setupCanvas(): void {
    const canvas = this.canvasRef.nativeElement;
    this.ctx = canvas.getContext('2d')!;
    this.resizeCanvas();
  }

  private resizeCanvas(): void {
    const canvas = this.canvasRef.nativeElement;
    const dpr = window.devicePixelRatio || 1;
    canvas.width = window.innerWidth * dpr;
    canvas.height = window.innerHeight * dpr;
    canvas.style.width = window.innerWidth + 'px';
    canvas.style.height = window.innerHeight + 'px';
    this.ctx.scale(dpr, dpr);
  }

  private setupResizeObserver(): void {
    this.resizeObserver = new ResizeObserver(() => {
      this.resizeCanvas();
    });
    this.resizeObserver.observe(document.body);
  }

  private createParticle(): Particle {
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const startAngle = Math.random() * Math.PI * 2;
    
    return {
      x: centerX,
      y: centerY,
      hue: Math.random() * 360,
      hueSpeed: this.HUE_SPEED,
      angle: startAngle,
      turnAngle: (Math.PI * 2) / this.SIDES, // 60 degrees for hexagon
      stepCount: 0,
      stepsPerSide: this.TURN_STEPS,
      currentSide: 0,
      speed: this.PARTICLE_SPEED,
      trail: [],
      maxTrailLength: this.TRAIL_LENGTH,
      size: 2
    };
  }

  private emitParticle(): void {
    const now = performance.now();
    if (now - this.lastEmitTime > this.EMIT_DELAY) {
      this.particles.push(this.createParticle());
      this.lastEmitTime = now;
    }
  }

  private startAnimation(): void {
    const animate = () => {
      this.emitParticle();
      this.update();
      this.draw();
      this.animationId = requestAnimationFrame(animate);
    };
    animate();
  }

  private update(): void {
    const width = window.innerWidth;
    const height = window.innerHeight;
    
    this.particles = this.particles.filter(p => {
      // Add current position to trail
      p.trail.push({
        x: p.x,
        y: p.y,
        hue: p.hue,
        age: 0
      });

      // Limit trail length
      if (p.trail.length > p.maxTrailLength) {
        p.trail.shift();
      }

      // Age trail points
      p.trail.forEach(point => point.age++);

      // Move particle along current direction
      p.x += Math.cos(p.angle) * p.speed;
      p.y += Math.sin(p.angle) * p.speed;

      // Increment step count
      p.stepCount++;

      // Turn at hexagon corners
      if (p.stepCount >= p.stepsPerSide) {
        p.stepCount = 0;
        p.currentSide = (p.currentSide + 1) % this.SIDES;
        p.angle += p.turnAngle; // Turn 60 degrees
      }

      // Animate hue (rainbow color cycling)
      p.hue = (p.hue + p.hueSpeed * 0.1) % 360;

      // Destroy if out of bounds
      const margin = 50;
      return !(p.x < -margin || p.x > width + margin || 
               p.y < -margin || p.y > height + margin);
    });
  }

  private draw(): void {
    const canvas = this.canvasRef.nativeElement;
    const isDark = this.themeService.currentTheme() === 'dark';
    
    // Semi-transparent clear for trail fade effect
    this.ctx.fillStyle = isDark ? 'rgba(0, 0, 0, 0.05)' : 'rgba(255, 255, 255, 0.05)';
    this.ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);

    // Draw all particles and their trails
    this.particles.forEach(p => {
      this.drawParticleWithTrail(p, isDark);
    });
  }

  private drawParticleWithTrail(p: Particle, isDark: boolean): void {
    // Draw trail
    if (p.trail.length > 1) {
      for (let i = 1; i < p.trail.length; i++) {
        const point = p.trail[i];
        const prevPoint = p.trail[i - 1];
        
        // Calculate opacity based on position in trail (older = more faded)
        const trailProgress = i / p.trail.length;
        const opacity = trailProgress * (isDark ? 1 : 0.8);
        
        // Calculate width based on position (thinner at the end)
        const width = 1 + trailProgress * 3;

        this.ctx.beginPath();
        this.ctx.moveTo(prevPoint.x, prevPoint.y);
        this.ctx.lineTo(point.x, point.y);
        this.ctx.strokeStyle = `hsla(${point.hue}, 100%, 50%, ${opacity})`;
        this.ctx.lineWidth = width;
        this.ctx.lineCap = 'round';
        this.ctx.stroke();
      }
    }

    // Draw particle head (brighter circle)
    this.ctx.beginPath();
    this.ctx.arc(p.x, p.y, p.size + 1, 0, Math.PI * 2);
    this.ctx.fillStyle = `hsl(${p.hue}, 100%, 50%)`;
    this.ctx.fill();
    
    // Add glow effect
    this.ctx.shadowColor = `hsl(${p.hue}, 100%, 50%)`;
    this.ctx.shadowBlur = 10;
    this.ctx.fill();
    this.ctx.shadowBlur = 0;
  }
}
