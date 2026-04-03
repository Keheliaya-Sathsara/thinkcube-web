import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';




@Component({
  selector: 'app-our-team',
  imports: [CommonModule, RouterModule],
  templateUrl: './our-team.component.html',
  styleUrl: './our-team.component.scss'
})
export class OurTeamComponent {
  
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' }); 
}
}
