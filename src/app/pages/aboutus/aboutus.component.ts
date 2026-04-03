import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import {
  FormsModule,
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ApiService, ContactFormData } from './api.service';

interface AccordionItem {
  title: string;
  content: string;
  isOpen: boolean;
  seeMoreLink: string;
}

@Component({
  selector: 'app-aboutus',
  imports: [CommonModule, FormsModule, ReactiveFormsModule, HttpClientModule, RouterModule],
  templateUrl: './aboutus.component.html',
  styleUrl: './aboutus.component.scss',
  providers: [ApiService],
})
export class AboutusComponent {
  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

    companyMappings = {
    '1.png': '4', // Kapital Corp
    '2.png': '3', // Medcube  
    '3.png': '12', // Medcube USA 
    '4.png': '1', // Thinkcube
    '5.png': '5', // Kapital Energy Solution
    '6.png': '10' // Kapital Leisure Adventure
  };

  navigateToCompany(imageSrc: string): void {

    const filename = imageSrc.split('/').pop();
    
    if (filename && this.companyMappings[filename as keyof typeof this.companyMappings]) {
      const companyId = this.companyMappings[filename as keyof typeof this.companyMappings];
      this.router.navigate(['/company', companyId]);
    }
  }


  navigateToCompanyByIndex(index: number): void {
    const companyIds = ['4', '3', '3', '1', '5', '10']; 
    
    if (index >= 0 && index < companyIds.length) {
      this.router.navigate(['/company', companyIds[index]]);
    }
  }

  contactForm: FormGroup;
  accordionItems: AccordionItem[] = [
    // {
    //   title: 'Transportation',
    //   content:
    //     'Modern transportation infrastructure is vital for economic growth. This sector includes road networks, railways, airports, and maritime facilities that enable efficient movement of people and goods across regions. Enhanced transportation systems reduce logistics costs and improve market access.',
    //   isOpen: false,
    //   seeMoreLink: '/sector/10'
    // },
    // {
    //   title: 'Telecommunication & IT',
    //   content:
    //     'Telecommunication and IT infrastructure forms the backbone of the digital economy. This sector encompasses broadband networks, data centers, mobile communications, cloud computing facilities, and other digital technologies that enable connectivity and information exchange across businesses and consumers.',
    //   isOpen: false,
    //   seeMoreLink: '/sector/10'
    // },
    {
      title: 'Business Processing Outsourcing',
      content:
        'Business Processing Outsourcing (BPO) has transformed how companies manage operations by delegating specific business functions to third-party service providers. This sector includes call centers, finance and accounting services, human resources management, and other back-office operations that enable businesses to focus on their core competencies.',
      isOpen: false,
      seeMoreLink: '/sector/2'
    },
    {
      title: 'Power Energy',
      content:
        'The power energy sector is fundamental to economic development and quality of life. This infrastructure includes power generation facilities, transmission lines, distribution networks, and renewable energy installations that ensure reliable and sustainable electricity supply to homes, businesses, and industries.',
      isOpen: false,
      seeMoreLink: '/sector/4'
    },
  ];

  formSubmitting = false;
  formSubmissionSuccess = false;
  formSubmissionError = '';
  
  // Countries for the phone code dropdown
  countries = [
    [
      { code: '+1', flag: '🇺🇸' },
      { code: '+44', flag: '🇬🇧' },
      { code: '+91', flag: '🇮🇳' },
      { code: '+86', flag: '🇨🇳' },
      { code: '+81', flag: '🇯🇵' },
      { code: '+49', flag: '🇩🇪' },
      { code: '+33', flag: '🇫🇷' },
      { code: '+61', flag: '🇦🇺' },
      { code: '+7', flag: '🇷🇺' },
      { code: '+39', flag: '🇮🇹' },
      { code: '+34', flag: '🇪🇸' },
      { code: '+55', flag: '🇧🇷' },
      { code: '+52', flag: '🇲🇽' },
      { code: '+82', flag: '🇰🇷' },
      { code: '+966', flag: '🇸🇦' },
      { code: '+971', flag: '🇦🇪' },
      { code: '+20', flag: '🇪🇬' },
      { code: '+27', flag: '🇿🇦' },
      { code: '+94', flag: '🇱🇰' },
      { code: '+65', flag: '🇸🇬' },
      { code: '+60', flag: '🇲🇾' },
      { code: '+66', flag: '🇹🇭' },
      { code: '+92', flag: '🇵🇰' },
      { code: '+880', flag: '🇧🇩' },
      { code: '+234', flag: '🇳🇬' },
    ],
  ];

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,
    private fb: FormBuilder,
    private router: Router 
  ) {
    this.contactForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.pattern(/^[a-zA-Z ]+$/)]],
      email: [
        '',
        [
          Validators.required,
          Validators.email,
          Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.com$/),
        ],
      ],
      selectedCountry: ['+94', [Validators.required]],
      phoneNumber: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      message: ['', []],
      agreeTerms: [false, [Validators.requiredTrue]],
    });
  }

  ngOnInit() {
    this.route.fragment.subscribe((fragment) => {
      if (fragment) {
        setTimeout(() => {
          const element = document.getElementById(fragment);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }
    });
  }

  toggleAccordion(index: number): void {
    this.accordionItems[index].isOpen = !this.accordionItems[index].isOpen;
  }

  // Updated method to handle "see more" navigation with scroll to top
  navigateToSeeMore(link: string): void {
    // First scroll to top
    this.scrollToTop();
    
    // Then navigate after a small delay to allow scroll animation to complete
    setTimeout(() => {
      this.router.navigateByUrl(link);
    }, 300); // 300ms delay to allow smooth scroll to complete
  }

  onSubmit() {
    if (this.contactForm.invalid) {
      this.formSubmissionError = 'Please fill all required fields and agree to the privacy policy';
      return;
    }

    this.formSubmitting = true;
    this.formSubmissionError = '';

    const formData: ContactFormData = {
      fullName: this.contactForm.value.fullName,
      email: this.contactForm.value.email,
      selectedCountry: this.contactForm.value.selectedCountry,
      phoneNumber: this.contactForm.value.phoneNumber,
      message: this.contactForm.value.message,
      agreeTerms: this.contactForm.value.agreeTerms,
    };

    this.apiService.submitContactForm(formData).subscribe({
      next: (response) => {
        console.log('Form submitted successfully:', response);
        this.formSubmitting = false;
        this.formSubmissionSuccess = true;
        this.contactForm.reset({
          selectedCountry: '+94',
          agreeTerms: false,
        });
      },
      error: (error) => {
        console.error('Error submitting form:', error);
        this.formSubmitting = false;
        this.formSubmissionError =
          error.message || 'Failed to submit form. Please try again later.';

        setTimeout(() => {
          this.formSubmissionError = '';
        }, 5000);
      },
    });
  }

  validatePhoneNumber(phone: string): boolean {
    const phonePattern = /^[0-9()\-\s\.]+$/;
    return phonePattern.test(phone);
  }
}