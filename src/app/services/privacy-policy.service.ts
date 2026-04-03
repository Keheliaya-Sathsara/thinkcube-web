import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface PrivacyPolicySection {
  title: string;
  content: string;
}

@Injectable({
  providedIn: 'root'
})
export class PrivacyPolicyService {

  constructor() { }

  getSections(): Observable<PrivacyPolicySection[]> {
    const sections: PrivacyPolicySection[] = [
      {
        title: 'Introduction',
        content: '<p>At Kapital Group, we value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard the data you provide when using our website.</p>'
      },
      {
        title: '1. Information We Collect',
        content: `<p>We may collect personal information when you:</p><br>
          <ul>
            <li>1. Fill out forms on our website (e.g., contact forms, inquiries).</li>
            <li>2. Subscribe to newsletters or updates.</li>
            <li>3. Interact with our website through cookies and analytics tools.</li>
          </ul><br>
          <p>This may include your name, email address, phone number, company details, and other relevant information.</p>`
      },
      {
        title: '2. How We Use Your Information',
        content: `<p>We use the information we collect to:</p><br>
          <ul>
            <li>1. Respond to your inquiries and provide requested services.</li>
            <li>2. Improve our website, services, and user experience.</li>
            <li>3. Share updates, news, and relevant information about Kapital Group (only if you consent).</li>
            <li>4. Comply with legal and regulatory requirements.</li>
          </ul>`
      },
      {
        title: '3. Cookies and Tracking',
        content: '<p>Our website may use cookies and similar technologies to enhance user experience and analyze traffic. You can choose to disable cookies in your browser settings, but some features of the site may not function properly.</p>'
      },
      {
        title: '4. Data Security',
        content: '<p>We implement appropriate technical and organizational measures to protect your information from unauthorized access, misuse, or disclosure. However, no online system is completely secure, and we cannot guarantee absolute protection.</p>'
      },
      {
        title: '5. Sharing of Information',
        content: '<p>Kapital Group does not sell, rent, or trade your personal information to third parties. We may share information only with trusted service providers or if required by law.</p>'
      },
      {
        title: '6. Third-Party Links',
        content: '<p>Our website may contain links to external websites. Kapital Group is not responsible for the privacy practices or content of those sites.</p>'
      },
      {
        title: '7. Your Rights',
        content: `<p>You have the right to:</p><br>
          <ul>
            <li>1. Request access to the personal data we hold about you.</li>
            <li>2. Request corrections or updates to your information.</li>
            <li>3. Request deletion of your data, subject to legal obligations.</li>
            <li>4. Opt out of marketing communications at any time.</li>
          </ul>`
      },
      {
        title: '8. Changes to Privacy Policy',
        content: '<p>Kapital Group reserves the right to update or modify this Privacy Policy when necessary. Updates will be posted on this page with the revised date.</p>'
      }
    ];

    return of(sections);
  }

  getLastUpdated(): Observable<string> {
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
    return of(formattedDate);
  }

  getCompanyName(): Observable<string> {
    return of('Kapital Group');
  }

  getContactEmail(): Observable<string> {
    return of('info@kapitalcorp.lk');
  }

  getIntroText(): Observable<string> {
    return of('At Kapital Group, we value your privacy and are committed to protecting your personal information.');
  }
}