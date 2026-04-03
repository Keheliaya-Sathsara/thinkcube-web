// header.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { inject } from '@angular/core';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  isScrolled = false;
  isMobileMenuOpen = false;
  isMobileIndustriesOpen = false;

  private router = inject(Router);

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 10;
  }

  @HostListener('document:keydown.escape', ['$event'])
  onEscapePress(event: Event) {
    if (this.isMobileMenuOpen) {
      this.closeMobileMenu();
    }
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
    if (this.isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'; // Prevent background scrolling
    } else {
      document.body.style.overflow = 'unset';
      this.isMobileIndustriesOpen = false; // Close industries dropdown when menu closes
    }
  }

  closeMobileMenu() {
    this.isMobileMenuOpen = false;
    this.isMobileIndustriesOpen = false;
    document.body.style.overflow = 'unset';
  }

  toggleMobileIndustries() {
    this.isMobileIndustriesOpen = !this.isMobileIndustriesOpen;
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  navigateAndScrollTop(route: string): void {
    this.router.navigate([route]).then(() => {
      // Small delay to ensure navigation is complete before scrolling
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);
    });
  }

  navigateAndCloseMobile(route: string): void {
    this.closeMobileMenu();
    this.router.navigate([route]).then(() => {
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);
    });
  }

  navigateToSector(sectorId: string): void {
    this.router.navigate([`sector/${sectorId}`]).then(() => {
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);
    });
  }

  navigateToSectorAndClose(sectorId: string): void {
    this.closeMobileMenu();
    this.router.navigate([`sector/${sectorId}`]).then(() => {
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);
    });
  }

  navigateToContact(): void {
    const currentUrl = this.router.url;

    if (currentUrl === '/aboutus') {
      this.scrollToSection('contact');
    } else {
      this.router.navigate(['/aboutus'], { fragment: 'contact' });
    }
  }

  navigateToContactAndClose(): void {
    this.closeMobileMenu();
    const currentUrl = this.router.url;

    if (currentUrl === '/aboutus') {
      this.scrollToSection('contact');
    } else {
      this.router.navigate(['/aboutus'], { fragment: 'contact' });
    }
  }

  scrollToSection(elementId: string): void {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      // If element not found, navigate to home with fragment
      this.router.navigate(['/'], { fragment: elementId });
    }
  }

  handleIndustriesClick(): void {
    // Navigate to home page and scroll to Industries section
    this.router.navigate(['/']).then(() => {
      setTimeout(() => {
        const element = document.getElementById('Industries');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        } else {
          // If Industries section not found, just scroll to top
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, 100);
    });
  }
}