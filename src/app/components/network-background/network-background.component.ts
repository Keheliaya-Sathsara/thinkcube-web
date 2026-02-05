import { Component, OnInit, OnDestroy, ElementRef, ViewChild, AfterViewInit, inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ThemeService } from '../../services/theme.service';

interface Particle {
  x: number;
  y: number;
  z: number;
  baseX: number;
  baseY: number;
  baseZ: number;
  radius: number;
  opacity: number;
  pulsePhase: number;
  pulseSpeed: number;
}

@Component({
  selector: 'app-network-background',
  standalone: true,
  imports: [CommonModule],
  template: `
    <canvas 
      #networkCanvas 
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
export class NetworkBackgroundComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('networkCanvas', { static: true }) canvasRef!: ElementRef<HTMLCanvasElement>;
  
  private themeService = inject(ThemeService);
  private platformId = inject(PLATFORM_ID);
  private ctx!: CanvasRenderingContext2D;
  private particles: Particle[] = [];
  private animationId: number = 0;
  private resizeObserver!: ResizeObserver;
  private isBrowser = false;
  private rotation = 0;
  private mouse = { x: 0, y: 0 };
  private lastFrameTime = 0;
  private cachedConnections: [number, number, number][] = [];
  private connectionUpdateCounter = 0;
  
  // Optimized Configuration - reduced for performance
  private readonly PARTICLE_COUNT = 250; // Reduced from 800
  private readonly CONNECTION_DISTANCE = 35;
  private readonly ROTATION_SPEED = 0.002;
  private readonly TARGET_FPS = 30; // Limit to 30 FPS
  private readonly FRAME_INTERVAL = 1000 / 30;
  
  // Brand colors - Dark theme (bright cyan)
  private readonly PRIMARY_COLOR_DARK = { r: 45, g: 180, b: 140 };
  // Brand colors - Light theme (darker green for visibility)
  private readonly PRIMARY_COLOR_LIGHT = { r: 30, g: 120, b: 90 };

  ngOnInit(): void {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngAfterViewInit(): void {
    if (this.isBrowser) {
      this.setupCanvas();
      this.initBrainParticles();
      this.startAnimation();
      this.setupResizeObserver();
      this.setupMouseTracking();
    }
  }

  ngOnDestroy(): void {
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
    }
    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
    }
    if (this.isBrowser) {
      window.removeEventListener('mousemove', this.handleMouseMove);
    }
  }

  private setupCanvas(): void {
    const canvas = this.canvasRef.nativeElement;
    this.ctx = canvas.getContext('2d', { alpha: true })!;
    this.resizeCanvas();
  }

  private resizeCanvas(): void {
    const canvas = this.canvasRef.nativeElement;
    // Use lower resolution for performance
    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    canvas.width = window.innerWidth * dpr;
    canvas.height = window.innerHeight * dpr;
    canvas.style.width = window.innerWidth + 'px';
    canvas.style.height = window.innerHeight + 'px';
    this.ctx.scale(dpr, dpr);
  }

  private setupResizeObserver(): void {
    let resizeTimeout: any;
    this.resizeObserver = new ResizeObserver(() => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => this.resizeCanvas(), 200);
    });
    this.resizeObserver.observe(document.body);
  }

  private setupMouseTracking(): void {
    this.handleMouseMove = this.handleMouseMove.bind(this);
    window.addEventListener('mousemove', this.handleMouseMove, { passive: true });
  }

  private handleMouseMove = (e: MouseEvent): void => {
    this.mouse.x = (e.clientX / window.innerWidth - 0.5) * 2;
    this.mouse.y = (e.clientY / window.innerHeight - 0.5) * 2;
  };

  private initBrainParticles(): void {
    this.particles = [];
    
    // Reduced particle counts for each section
    this.createBrainSection(0, -20, 0, 120, 90, 100, 130, 'cerebrum');
    this.createBrainSection(0, 50, -20, 50, 40, 45, 50, 'cerebellum');
    this.createBrainSection(0, 80, -10, 15, 40, 15, 25, 'stem');
    this.createBrainSection(-70, 20, 20, 40, 35, 50, 25, 'temporal');
    this.createBrainSection(70, 20, 20, 40, 35, 50, 25, 'temporal');
  }

  private createBrainSection(
    offsetX: number, offsetY: number, offsetZ: number,
    scaleX: number, scaleY: number, scaleZ: number,
    count: number, section: string
  ): void {
    for (let i = 0; i < count; i++) {
      let x, y, z;
      
      if (section === 'cerebrum') {
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.random() * Math.PI * 0.6;
        const r = 0.8 + Math.random() * 0.2;
        const wrinkle = Math.sin(theta * 8) * 0.1 + Math.sin(phi * 6) * 0.1;
        
        x = (r + wrinkle) * Math.sin(phi) * Math.cos(theta) * scaleX;
        y = (r + wrinkle) * Math.cos(phi) * scaleY - scaleY * 0.3;
        z = (r + wrinkle) * Math.sin(phi) * Math.sin(theta) * scaleZ;
        
        if (y > scaleY * 0.3) y = scaleY * 0.3 + (y - scaleY * 0.3) * 0.3;
        
      } else if (section === 'cerebellum') {
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.random() * Math.PI * 0.5 + Math.PI * 0.3;
        const r = 0.7 + Math.random() * 0.3;
        const wrinkle = Math.sin(theta * 12) * 0.15;
        
        x = (r + wrinkle) * Math.sin(phi) * Math.cos(theta) * scaleX;
        y = (r + wrinkle) * Math.cos(phi) * scaleY;
        z = (r + wrinkle) * Math.sin(phi) * Math.sin(theta) * scaleZ - scaleZ;
        
      } else if (section === 'stem') {
        const theta = Math.random() * Math.PI * 2;
        const h = Math.random();
        const r = 0.8 + Math.random() * 0.2;
        
        x = r * Math.cos(theta) * scaleX;
        y = h * scaleY;
        z = r * Math.sin(theta) * scaleZ;
        
      } else {
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.random() * Math.PI;
        const r = 0.8 + Math.random() * 0.2;
        
        x = r * Math.sin(phi) * Math.cos(theta) * scaleX;
        y = r * Math.cos(phi) * scaleY;
        z = r * Math.sin(phi) * Math.sin(theta) * scaleZ;
      }

      this.particles.push({
        x: x + offsetX,
        y: y + offsetY,
        z: z + offsetZ,
        baseX: x + offsetX,
        baseY: y + offsetY,
        baseZ: z + offsetZ,
        radius: 1.5 + Math.random() * 1,
        opacity: 0.4 + Math.random() * 0.4,
        pulsePhase: Math.random() * Math.PI * 2,
        pulseSpeed: 0.02 + Math.random() * 0.02
      });
    }
  }

  private startAnimation(): void {
    const animate = (currentTime: number) => {
      this.animationId = requestAnimationFrame(animate);
      
      // Frame rate limiting
      const elapsed = currentTime - this.lastFrameTime;
      if (elapsed < this.FRAME_INTERVAL) return;
      
      this.lastFrameTime = currentTime - (elapsed % this.FRAME_INTERVAL);
      
      this.update();
      this.draw();
    };
    this.animationId = requestAnimationFrame(animate);
  }

  private update(): void {
    this.rotation += this.ROTATION_SPEED + this.mouse.x * 0.001;
    
    const cos = Math.cos(this.rotation);
    const sin = Math.sin(this.rotation);
    const mouseY = this.mouse.y * 5;
    
    // Update particles
    for (let i = 0; i < this.particles.length; i++) {
      const p = this.particles[i];
      p.pulsePhase += p.pulseSpeed;
      p.x = p.baseX * cos - p.baseZ * sin;
      p.z = p.baseX * sin + p.baseZ * cos;
      p.y = p.baseY + mouseY;
    }

    // Update connections every 5 frames for performance
    this.connectionUpdateCounter++;
    if (this.connectionUpdateCounter >= 5) {
      this.connectionUpdateCounter = 0;
      this.updateConnections();
    }
  }

  private updateConnections(): void {
    this.cachedConnections = [];
    const distSq = this.CONNECTION_DISTANCE * this.CONNECTION_DISTANCE;
    
    for (let i = 0; i < this.particles.length; i++) {
      const p1 = this.particles[i];
      for (let j = i + 1; j < this.particles.length; j++) {
        const p2 = this.particles[j];
        const dx = p1.x - p2.x;
        const dy = p1.y - p2.y;
        const dz = p1.z - p2.z;
        const d = dx * dx + dy * dy + dz * dz;
        
        if (d < distSq) {
          this.cachedConnections.push([i, j, Math.sqrt(d)]);
        }
      }
    }
  }

  private draw(): void {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const isDark = this.themeService.currentTheme() === 'dark';
    const centerX = width * 0.5;
    const centerY = height * 0.45;
    const scale = Math.min(width, height) * 0.003;
    
    this.ctx.clearRect(0, 0, width, height);

    // Draw connections (cached)
    this.drawConnections(centerX, centerY, scale, isDark);
    
    // Draw particles (no sorting for performance)
    for (let i = 0; i < this.particles.length; i++) {
      this.drawParticle(this.particles[i], centerX, centerY, scale, isDark);
    }
  }

  private drawConnections(centerX: number, centerY: number, scale: number, isDark: boolean): void {
    const color = isDark ? this.PRIMARY_COLOR_DARK : this.PRIMARY_COLOR_LIGHT;
    this.ctx.lineWidth = isDark ? 0.5 : 0.8;
    
    for (let i = 0; i < this.cachedConnections.length; i++) {
      const [idx1, idx2, dist] = this.cachedConnections[i];
      const p1 = this.particles[idx1];
      const p2 = this.particles[idx2];
      
      const x1 = centerX + p1.x * scale;
      const y1 = centerY + p1.y * scale;
      const x2 = centerX + p2.x * scale;
      const y2 = centerY + p2.y * scale;
      
      const opacity = (1 - dist / this.CONNECTION_DISTANCE) * (isDark ? 0.12 : 0.25);
      
      this.ctx.beginPath();
      this.ctx.moveTo(x1, y1);
      this.ctx.lineTo(x2, y2);
      this.ctx.strokeStyle = `rgba(${color.r}, ${color.g}, ${color.b}, ${opacity})`;
      this.ctx.stroke();
    }
  }

  private drawParticle(p: Particle, centerX: number, centerY: number, scale: number, isDark: boolean): void {
    const x = centerX + p.x * scale;
    const y = centerY + p.y * scale;
    
    const depth = (p.z + 150) / 300;
    const pulse = 1 + Math.sin(p.pulsePhase) * 0.2;
    const radius = p.radius * scale * depth * pulse;
    // Higher opacity for light theme to make particles more visible
    const alpha = p.opacity * depth * (isDark ? 0.8 : 0.9);

    const color = isDark ? this.PRIMARY_COLOR_DARK : this.PRIMARY_COLOR_LIGHT;

    // Simple glow - single gradient instead of complex multi-stop
    const glowRadius = radius * (isDark ? 2.5 : 3);
    const gradient = this.ctx.createRadialGradient(x, y, 0, x, y, glowRadius);
    gradient.addColorStop(0, `rgba(${color.r}, ${color.g}, ${color.b}, ${alpha * (isDark ? 0.4 : 0.6)})`);
    gradient.addColorStop(1, `rgba(${color.r}, ${color.g}, ${color.b}, 0)`);
    
    this.ctx.beginPath();
    this.ctx.arc(x, y, glowRadius, 0, Math.PI * 2);
    this.ctx.fillStyle = gradient;
    this.ctx.fill();

    // Core dot - darker for light theme
    this.ctx.beginPath();
    this.ctx.arc(x, y, radius * (isDark ? 1 : 1.2), 0, Math.PI * 2);
    const coreColor = isDark 
      ? `rgba(${color.r + 60}, ${color.g + 60}, ${color.b + 60}, ${alpha})`
      : `rgba(${color.r - 10}, ${color.g - 10}, ${color.b - 10}, ${alpha})`;
    this.ctx.fillStyle = coreColor;
    this.ctx.fill();
  }
}
