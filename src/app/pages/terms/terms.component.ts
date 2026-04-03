import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TermsService, TermsSection } from '../../services/terms.service';
import { HeaderComponent } from '../../layout/header/header.component';
import { FooterComponent } from "../../layout/footer/footer.component";

@Component({
  selector: 'app-terms',
  standalone: true,
  imports: [CommonModule, FooterComponent, HeaderComponent],
  templateUrl: './terms.component.html',
  styleUrls: ['./terms.component.scss']
})
export class TermsComponent implements OnInit {
  sections: TermsSection[] = [];
  lastUpdated: string = '';
  companyName: string = '';
  contactEmail: string = '';
  introText: string = '';
  isLoading: boolean = true;
  currentYear: number = new Date().getFullYear();

  constructor(private termsService: TermsService) { }

  ngOnInit(): void {
    this.loadTermsData();
  }

  private loadTermsData(): void {
    // Load all terms data
    this.termsService.getSections().subscribe({
      next: (sections) => {
        this.sections = sections;
        this.checkLoadingComplete();
      },
      error: (error) => {
        console.error('Error loading terms sections:', error);
        this.isLoading = false;
      }
    });

    this.termsService.getLastUpdated().subscribe({
      next: (date) => {
        this.lastUpdated = date;
        this.checkLoadingComplete();
      },
      error: (error) => {
        console.error('Error loading last updated date:', error);
      }
    });

    this.termsService.getCompanyName().subscribe({
      next: (name) => {
        this.companyName = name;
        this.checkLoadingComplete();
      },
      error: (error) => {
        console.error('Error loading company name:', error);
      }
    });

    this.termsService.getContactEmail().subscribe({
      next: (email) => {
        this.contactEmail = email;
        this.checkLoadingComplete();
      },
      error: (error) => {
        console.error('Error loading contact email:', error);
      }
    });

    this.termsService.getIntroText().subscribe({
      next: (intro) => {
        this.introText = intro;
        this.checkLoadingComplete();
      },
      error: (error) => {
        console.error('Error loading intro text:', error);
      }
    });
  }

  private checkLoadingComplete(): void {
    if (this.sections.length > 0 && this.lastUpdated && this.companyName && this.contactEmail) {
      this.isLoading = false;
    }
  }

  onEmailClick(): void {
    // Optional: Add analytics tracking here
    // Analytics.track('terms_email_clicked', { email: this.contactEmail });
  }

  // Add trackBy function for better performance
  trackBySection(index: number, section: TermsSection): string {
    return section.title;
  }
}