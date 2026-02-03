import { Directive, ElementRef, Input, OnInit, OnDestroy, Renderer2, NgZone } from '@angular/core';
import { fromEvent, Subscription, throttleTime } from 'rxjs';

@Directive({
  selector: '[appScrollReveal]',
  standalone: true
})
export class ScrollRevealDirective implements OnInit, OnDestroy {
  @Input() revealDelay = 0;
  @Input() revealDirection: 'up' | 'left' | 'right' = 'up';
  @Input() revealThreshold = 150;

  private scrollSubscription?: Subscription;
  private hasRevealed = false;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    private ngZone: NgZone
  ) {}

  ngOnInit(): void {
    this.setupInitialStyles();
    this.checkVisibility();
    this.initScrollListener();
  }

  ngOnDestroy(): void {
    this.scrollSubscription?.unsubscribe();
  }

  private setupInitialStyles(): void {
    this.renderer.setStyle(this.el.nativeElement, 'opacity', '0');
    this.renderer.setStyle(this.el.nativeElement, 'transition', `all 0.8s cubic-bezier(0.4, 0, 0.2, 1) ${this.revealDelay}ms`);

    switch (this.revealDirection) {
      case 'left':
        this.renderer.setStyle(this.el.nativeElement, 'transform', 'translateX(-50px)');
        break;
      case 'right':
        this.renderer.setStyle(this.el.nativeElement, 'transform', 'translateX(50px)');
        break;
      default:
        this.renderer.setStyle(this.el.nativeElement, 'transform', 'translateY(50px)');
    }
  }

  private initScrollListener(): void {
    this.ngZone.runOutsideAngular(() => {
      this.scrollSubscription = fromEvent(window, 'scroll')
        .pipe(throttleTime(16))
        .subscribe(() => {
          this.ngZone.run(() => this.checkVisibility());
        });
    });
  }

  private checkVisibility(): void {
    if (this.hasRevealed) return;

    const rect = this.el.nativeElement.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    if (rect.top < windowHeight - this.revealThreshold) {
      this.reveal();
    }
  }

  private reveal(): void {
    this.hasRevealed = true;
    this.renderer.setStyle(this.el.nativeElement, 'opacity', '1');
    this.renderer.setStyle(this.el.nativeElement, 'transform', 'translate(0)');
    this.scrollSubscription?.unsubscribe();
  }
}
