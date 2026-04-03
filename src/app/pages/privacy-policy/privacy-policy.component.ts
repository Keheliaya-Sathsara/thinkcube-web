import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrivacyPolicyService, PrivacyPolicySection } from '../../services/privacy-policy.service';
import { HeaderComponent } from "../../layout/header/header.component";
import { FooterComponent } from '../../layout/footer/footer.component';


@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [CommonModule, HeaderComponent, FooterComponent],
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.scss']
})
export class PrivacyPolicyComponent implements OnInit {
  sections: PrivacyPolicySection[] = [];
  lastUpdated: string = '';
  companyName: string = '';
  contactEmail: string = '';
  introText: string = '';
  isLoading: boolean = true;
  currentYear: number = new Date().getFullYear();

  constructor(private privacyPolicyService: PrivacyPolicyService) { }

  ngOnInit(): void {
    this.loadPrivacyPolicyData();
  }

  private loadPrivacyPolicyData(): void {
    // Load all privacy policy data
    this.privacyPolicyService.getSections().subscribe({
      next: (sections) => {
        this.sections = sections;
        this.checkLoadingComplete();
      },
      error: (error) => {
        console.error('Error loading privacy policy sections:', error);
        this.isLoading = false;
      }
    });

    this.privacyPolicyService.getLastUpdated().subscribe({
      next: (date) => {
        this.lastUpdated = date;
        this.checkLoadingComplete();
      },
      error: (error) => {
        console.error('Error loading last updated date:', error);
      }
    });

    this.privacyPolicyService.getCompanyName().subscribe({
      next: (name) => {
        this.companyName = name;
        this.checkLoadingComplete();
      },
      error: (error) => {
        console.error('Error loading company name:', error);
      }
    });

    this.privacyPolicyService.getContactEmail().subscribe({
      next: (email) => {
        this.contactEmail = email;
        this.checkLoadingComplete();
      },
      error: (error) => {
        console.error('Error loading contact email:', error);
      }
    });

    this.privacyPolicyService.getIntroText().subscribe({
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
    // Analytics.track('privacy_policy_email_clicked', { email: this.contactEmail });
  }

  // Add trackBy function for better performance
  trackBySection(index: number, section: PrivacyPolicySection): string {
    return section.title;
  }
}