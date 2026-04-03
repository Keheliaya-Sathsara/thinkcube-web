import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { HeroComponent } from './hero/hero.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { OurTeamComponent } from './our-team/our-team.component';
import { IndustriesComponent } from './industries/industries.component';
import { CompanyNewsComponent } from './company-news/company-news.component';

@Component({
  selector: 'app-home',
  imports: [
    FontAwesomeModule,
    HeroComponent,
    AboutUsComponent,
    OurTeamComponent,
    IndustriesComponent,
    CompanyNewsComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  faCircleCheck = faCircleCheck;
}
