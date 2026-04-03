import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { inject } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterModule, RouterLink, CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  private router = inject(Router);

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  navigateToContact(): void {
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
}
