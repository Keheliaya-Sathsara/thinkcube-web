import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  quote: string;
  image?: string;
}

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss'
})
export class TestimonialsComponent {
  activeTestimonial = signal<number>(1);

  testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'John Smith',
      position: 'CEO',
      company: 'Tech Solutions Inc.',
      quote: 'ThinkCube\'s innovative approach to digital transformation has revolutionized our business processes. Their team\'s expertise and dedication exceeded our expectations.'
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      position: 'Director of Operations',
      company: 'Global Enterprises',
      quote: 'Working with ThinkCube has been a game-changer for our organization. Their cloud solutions have improved our efficiency by over 40%.'
    },
    {
      id: 3,
      name: 'Michael Brown',
      position: 'CTO',
      company: 'Innovation Labs',
      quote: 'The ezBiz platform has streamlined our entire business management. ThinkCube\'s support team is always there when we need them.'
    },
    {
      id: 4,
      name: 'Emily White',
      position: 'Managing Director',
      company: 'Prime Holdings',
      quote: 'From initial consultation to deployment and beyond, ThinkCube has been an exceptional partner in our digital journey. Highly recommended!'
    }
  ];

  setActiveTestimonial(id: number): void {
    this.activeTestimonial.set(id);
  }

  nextTestimonial(): void {
    const current = this.activeTestimonial();
    const next = current >= this.testimonials.length ? 1 : current + 1;
    this.activeTestimonial.set(next);
  }

  prevTestimonial(): void {
    const current = this.activeTestimonial();
    const prev = current <= 1 ? this.testimonials.length : current - 1;
    this.activeTestimonial.set(prev);
  }
}
