import { Injectable, NgZone } from '@angular/core';
import { BehaviorSubject, fromEvent, throttleTime } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScrollAnimationService {
  private scrollPosition = new BehaviorSubject<number>(0);
  public scrollPosition$ = this.scrollPosition.asObservable();

  private scrollDirection = new BehaviorSubject<'up' | 'down'>('down');
  public scrollDirection$ = this.scrollDirection.asObservable();

  private lastScrollTop = 0;

  constructor(private ngZone: NgZone) {
    this.initScrollListener();
  }

  private initScrollListener(): void {
    this.ngZone.runOutsideAngular(() => {
      fromEvent(window, 'scroll')
        .pipe(throttleTime(16))
        .subscribe(() => {
          const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
          
          this.ngZone.run(() => {
            this.scrollPosition.next(scrollTop);
            this.scrollDirection.next(scrollTop > this.lastScrollTop ? 'down' : 'up');
            this.lastScrollTop = scrollTop;
          });
        });
    });
  }

  public revealElements(): void {
    const reveals = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    const windowHeight = window.innerHeight;
    const revealPoint = 150;

    reveals.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top;
      
      if (elementTop < windowHeight - revealPoint) {
        element.classList.add('active');
      }
    });
  }

  public smoothScrollTo(elementId: string): void {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
