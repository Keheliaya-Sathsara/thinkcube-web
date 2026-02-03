import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
  newsletterEmail = '';

  quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Products', href: '#products' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ];

  services = [
    'Lifecycle Management',
    'Solution Development',
    'Cloud Deployment',
    'Cloud Ops',
    '24/7 Support',
    'Continuous Engagement'
  ];

  products = [
    'ezBiz',
    'LeapX',
    'Hudlmo',
    'Swisher'
  ];

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  subscribeNewsletter(): void {
    if (this.newsletterEmail) {
      // Handle newsletter subscription
      console.log('Newsletter subscription:', this.newsletterEmail);
      this.newsletterEmail = '';
    }
  }
}
