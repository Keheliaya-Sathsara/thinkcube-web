import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

interface Product {
  id: number;
  name: string;
  tagline: string;
  description: string;
  features: string[];
  color: string;
  icon: string;
}

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  activeProduct = signal<number | null>(null);

  products: Product[] = [
    {
      id: 1,
      name: 'ezBiz',
      tagline: 'Business Management Made Easy',
      description: 'A comprehensive platform to digitize and manage your entire business operations. Built on top of next-gen technologies for digital transformation, ezBiz empowers SMEs to streamline their processes.',
      features: ['Inventory Management', 'Sales & Invoicing', 'Customer Management', 'Reports & Analytics'],
      color: 'tc-green',
      icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4'
    },
    {
      id: 2,
      name: 'LeapX',
      tagline: 'Digital Leap for Business',
      description: 'A robust platform that merges Omnichannel Communication with a comprehensive CRM. LeapX leverages cutting-edge AI technology to enhance customer engagement.',
      features: ['Omnichannel Communication', 'AI-Powered CRM', 'Customer Analytics', 'Automated Workflows'],
      color: 'tc-orange',
      icon: 'M13 10V3L4 14h7v7l9-11h-7z'
    },
    {
      id: 3,
      name: 'Hudlmo',
      tagline: 'Team Collaboration Hub',
      description: 'Streamline team communication and project management with Hudlmo. Designed for modern teams, it brings together all collaboration tools in one intuitive platform.',
      features: ['Team Chat', 'Video Conferencing', 'Project Management', 'File Sharing'],
      color: 'tc-green',
      icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z'
    },
    {
      id: 4,
      name: 'Swisher',
      tagline: 'Smart Business Automation',
      description: 'Automate repetitive tasks and workflows with Swisher. Our intelligent automation platform helps businesses save time and reduce errors through smart process automation.',
      features: ['Workflow Automation', 'Task Scheduling', 'Integration APIs', 'Smart Triggers'],
      color: 'tc-orange',
      icon: 'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15'
    }
  ];

  toggleProduct(id: number): void {
    this.activeProduct.update(current => current === id ? null : id);
  }
}
