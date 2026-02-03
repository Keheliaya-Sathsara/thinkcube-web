import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

interface MissionVision {
  title: string;
  description: string;
}

interface Promise {
  number: string;
  label: string;
  description: string;
}

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  mission: MissionVision = {
    title: 'Our Mission',
    description: `Our mission is to empower individuals and organizations with innovative digital solutions, fostering growth, efficiency, and connectivity in an ever-evolving technological landscape. We aim to bridge gaps, simplify complexities, and enhance experiences through our commitment to cutting-edge technology and unwavering dedication to customer success.`
  };

  vision: MissionVision = {
    title: 'Our Vision',
    description: `Our vision is to be a catalyst for positive change in the digital realm, revolutionizing industries, and enriching lives globally. We aspire to be synonymous with excellence, creativity, and reliability, driving forward the boundaries of possibility to shape a brighter future for generations to come.`
  };

  promises: Promise[] = [
    {
      number: '100+',
      label: 'Clients',
      description: 'Join the ranks of our esteemed clientele who have experienced the transformative power of our solutions.'
    },
    {
      number: '50,000+',
      label: 'Online Users',
      description: 'Our solutions have been trusted by thousands to streamline operations and drive growth.'
    },
    {
      number: '4',
      label: 'SaaS Products',
      description: 'A suite of products meticulously crafted to address specific needs and exceed expectations.'
    },
    {
      number: '10+',
      label: 'Years Experience',
      description: 'Almost a decade of expertise in digital transformation and cloud solutions.'
    }
  ];
}
