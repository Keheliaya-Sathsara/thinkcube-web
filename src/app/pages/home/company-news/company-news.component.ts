import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-company-news',
  imports: [ RouterLink ],
  templateUrl: './company-news.component.html',
  styleUrl: './company-news.component.scss'
})
export class CompanyNewsComponent {
scrollToTop(): void {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
}
