import { Routes } from '@angular/router';
import { HeaderComponent } from './layout/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { DefaultLayoutComponent } from './layout/default-layout/default-layout.component';
import { NewsComponent } from './pages/news/news.component';
import { ArticlesComponent } from './pages/news/articles/articles.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { HeroComponent } from './pages/home/hero/hero.component';
import { AboutUsComponent } from './pages/home/about-us/about-us.component';
import { EventComponent } from './pages/event/event.component';
import { EventflowComponent } from './pages/event/eventflow/eventflow.component';
import { SectorComponent } from './pages/sector/sector.component';
import { CompanyComponent } from './pages/sector/company/company.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';
import { TermsComponent } from './pages/terms/terms.component';

export const routes: Routes = [
  {
    path: '',
    component: DefaultLayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'aboutus',
        component: AboutusComponent,
      },
      // {
      //   path: 'transportation',
      //   component: TransportationComponent,
      // },
      // {
      //   path: 'industries/sector/:sector',
      //   component: SectorComponent
      // },
      // {
      //   path: 'industries/sector',
      //   component: SectorComponent
      // },
      {
        path: 'sector',
        component: SectorComponent,
      },
      {
        path: 'event',
        component: EventComponent,
      },
      {
        path: 'eventflow/:eventflow',
        component: EventflowComponent,
      },
      {
        path: 'news',
        component: NewsComponent,
      },
      // {
      //   path: 'articles/:id',
      //   component: ArticlesComponent,
      // },
      // { path: '', redirectTo: '/news', pathMatch: 'full' },
      // { path: 'news', component: NewsComponent },
      { path: 'articles/:article', component: ArticlesComponent },
      // { path: '**', redirectTo: '/news' },
      // {
      //   path: '',
      //   redirectTo: '/sector/1',
      //   pathMatch: 'full',
      // },
      // {
      //   path: 'sector/:sector',
      //   component: TransportationComponent,
      // },
      // {
      //   path: '**',
      //   redirectTo: '/sector/1',
      // },
      { path: 'sector/:id', component: SectorComponent },
    ],
  },
  {
    path: 'a',
    component: AboutUsComponent,
  },
  // {
  //   path: 'com',
  //   component: CompanyComponent,
  // },
  {
    path: 'company/:id',
    component: CompanyComponent,
  },
  {
    path: 'privacy-policy',
    component: PrivacyPolicyComponent,
  },
    {
    path: 'terms',
    component: TermsComponent,
  },
];
