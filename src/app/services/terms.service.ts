import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface TermsSection {
  title: string;
  content: string;
}

@Injectable({
  providedIn: 'root'
})
export class TermsService {

  constructor() { }

  getSections(): Observable<TermsSection[]> {
    const sections: TermsSection[] = [
      {
        title: "Use of Website",
        content: `<p>This website is intended to provide information about Kapital Group and its subsidiaries. You agree to use this website only for lawful purposes and in a manner that does not infringe the rights of others.</p>`
      },
      {
        title: "Intellectual Property",
        content: `<p>All content, logos, graphics, and materials on this website are the property of Kapital Group unless otherwise stated. Unauthorized use, reproduction, or distribution of this content is strictly prohibited.</p>`
      },
      {
        title: "Information Accuracy",
        content: `<p>While we strive to ensure that all information on this site is accurate and up to date, Kapital Group does not warrant the completeness, reliability, or accuracy of the content. Information may be updated or changed without prior notice.</p>`
      },
      {
        title: "Third-Party Links",
        content: `<p>Our website may contain links to third-party websites. Kapital Group is not responsible for the content, policies, or practices of any linked sites. Accessing third-party links is at your own risk.</p>`
      },
      {
        title: "Limitation of Liability",
        content: `<p>Kapital Group will not be held liable for any damages, losses, or claims arising from the use of this website or reliance on its content.</p>`
      },
      {
        title: "Privacy",
        content: `<p>Any personal data shared with us will be handled in accordance with our Privacy Policy.</p>`
      },
      {
        title: "Changes to Terms",
        content: `<p>Kapital Group reserves the right to modify or update these Terms and Conditions at any time. Continued use of this website constitutes acceptance of any changes.</p>`
      },
      {
        title: "Governing Law",
        content: `<p>These Terms and Conditions shall be governed by and interpreted in accordance with the laws of Sri Lanka.</p>`
      }
    ];

    return of(sections);
  }

  getLastUpdated(): Observable<string> {
    return of('January 2025');
  }

  getCompanyName(): Observable<string> {
    return of('Kapital Group');
  }

  getContactEmail(): Observable<string> {
    return of('info@kapitalgroup.lk');
  }

  getIntroText(): Observable<string> {
    return of('Welcome to Kapital Group. By accessing and using our website, you agree to comply with and be bound by the following Terms and Conditions. Please read them carefully before using our services.');
  }
}