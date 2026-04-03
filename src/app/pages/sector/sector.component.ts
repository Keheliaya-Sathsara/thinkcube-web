import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SectorService, Sector } from '../../services/sector.service';

@Component({
  selector: 'app-sector',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './sector.component.html',
  styleUrls: ['./sector.component.scss'],
})
export class SectorComponent implements OnInit {
  sector: Sector | undefined;
  companyCards: Sector[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private sectorService: SectorService,
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const id = params['id'];
      this.loadSector(id);
      this.loadCompanyCards(id);
    });
  }

  loadSector(id: string): void {
    this.sectorService.getSectorById(id).subscribe(
      (sector) => {
        if (sector) {
          this.sector = sector;
          this.sectorService.setSelectedSector(sector);
        }
      },
      (error) => {
        console.error('Error fetching sector:', error);
      },
    );
  }

  loadCompanyCards(sectorId: string): void {
    this.sectorService.getCompanyCardsBySectorId(sectorId).subscribe(
      (cards) => {
        this.companyCards = cards;
      },
      (error) => {
        console.error('Error fetching company cards:', error);
      },
    );
  }

  trackById(index: number, item: Sector): string {
    return item.id;
  }

  navigateToCompany(companyId: string): void {
    this.router.navigate(['/company', companyId]).then(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}