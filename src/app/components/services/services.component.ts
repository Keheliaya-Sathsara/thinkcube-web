import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

interface Service {
  id: number;
  title: string;
  shortDescription: string;
  fullDescription: string;
  icon: string;
  features: string[];
}

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {
  activeService = signal<number | null>(null);

  services: Service[] = [
    {
      id: 1,
      title: 'Lifecycle Management',
      shortDescription: 'From development to continuous maintenance',
      fullDescription: 'Complete lifecycle management means we do not stop at development. Our team specializes in Product Roadmap Management, Platform Evolution, and Continuous Maintenance to keep your solutions modern and effective.',
      icon: 'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15',
      features: ['Product Roadmap Management', 'Platform Evolution', 'Continuous Maintenance', 'Version Control']
    },
    {
      id: 2,
      title: 'Solution Development',
      shortDescription: 'Web, mobile and enterprise solutions',
      fullDescription: 'We specialize in building Web and Mobile Applications, ERP Solutions and Business Automation Tools. Our expert team delivers end-to-end development solutions tailored to your business needs.',
      icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4',
      features: ['Web Applications', 'Mobile Apps', 'ERP Solutions', 'Business Automation Tools']
    },
    {
      id: 3,
      title: 'Cloud Deployment',
      shortDescription: 'Expert cloud infrastructure deployment',
      fullDescription: 'Leverage our expertise in deploying and managing cloud infrastructure. We specialize in AWS, Azure, GCP and more to ensure your applications are scalable, secure and always available.',
      icon: 'M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z',
      features: ['AWS', 'Microsoft Azure', 'Google Cloud Platform', 'Multi-Cloud Strategy']
    },
    {
      id: 4,
      title: 'Cloud Ops',
      shortDescription: 'Seamless cloud operations management',
      fullDescription: 'Once in the Cloud, we ensure your data is safe and your application is running smoothly through our dedicated Cloud Operations services. We handle monitoring, optimization and incident response.',
      icon: 'M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01',
      features: ['24/7 Monitoring', 'Performance Optimization', 'Security Management', 'Incident Response']
    },
    {
      id: 5,
      title: '24/7 Support',
      shortDescription: 'Round-the-clock technical assistance',
      fullDescription: 'Once deployed, we monitor and support so you can sleep in peace. Our dedicated support team ensures your systems are always running optimally with rapid response times.',
      icon: 'M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z',
      features: ['Round-the-Clock Monitoring', 'Rapid Response', 'Issue Resolution', 'Performance Tracking']
    },
    {
      id: 6,
      title: 'Continuous Engagement',
      shortDescription: 'Beyond development - true partnership',
      fullDescription: 'Our engagement doesn\'t end with deployment. We provide ongoing support, regular updates, and strategic guidance to ensure your solutions continue to evolve with your business needs.',
      icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
      features: ['Strategic Partnership', 'Regular Updates', 'Business Alignment', 'Growth Support']
    }
  ];

  toggleService(id: number): void {
    this.activeService.update(current => current === id ? null : id);
  }
}
