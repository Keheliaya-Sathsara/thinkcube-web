import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about-us',
  imports: [CommonModule],
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent {
  
  constructor(private router: Router) {}


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
}