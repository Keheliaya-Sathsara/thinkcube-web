import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Company, CompanyService } from '../../../services/company.service';
import { HeaderComponent } from '../../../layout/header/header.component';
import { FooterComponent } from '../../../layout/footer/footer.component';

@Component({
  selector: 'app-company',
  standalone: true,
  imports: [CommonModule, HeaderComponent, FooterComponent],
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit {
  company: Company | undefined;

  constructor(
    private route: ActivatedRoute,
    private companyService: CompanyService
  ) { }

  // ngOnInit(): void {
  //   const companyId = this.route.snapshot.paramMap.get('id') || '2' || '11';
  //   this.loadCompany(companyId);
  // }

  // In company.component.ts, update the ngOnInit
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const companyId = params['id'];
      this.loadCompany(companyId);
    });
  }

  loadCompany(id: string): void {
    this.companyService.getCompanyById(id).subscribe({
      next: (company: Company | undefined) => {
        if (company) {
          this.company = company;
          this.companyService.setSelectedCompany(company);
        }
      },
      error: (error: Error) => {
        console.error('Error fetching company:', error);
      }
    });
  }

  shouldShowCard(): boolean {
    return (this.company?.id === '2' || this.company?.id === '11' || this.company?.id === '14') && this.company?.showCard === true;
  }

  shouldShowCardFromService(): boolean {
    return this.company?.showCard === true;
  }

  trackById(index: number, item: Company): string {
    return item.id;
  }

  hasContact(): boolean {
    return !!this.company?.contact;
  }

  scrollToTop(): void {
    window.scrollTo(0, 0);
  }


}