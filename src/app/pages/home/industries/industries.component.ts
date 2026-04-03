import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-industries',
  imports: [RouterLink],
  templateUrl: './industries.component.html',
  styleUrl: './industries.component.scss',
})
export class IndustriesComponent {
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' }); 
  }
}
