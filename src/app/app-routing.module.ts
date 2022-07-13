import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'',component:HomeComponent,title:'Home Component'},
  {path:'protfolio',component:PortfolioComponent,title:'PortFolio Component'},
  {path:'about',component:AboutComponent,title:'About Component'},
  {path:'contact',component:ContactComponent,title:'Contact Component'},
  {path:'**',component:PageNotFoundComponent,title:'PAGE NOT FOUND'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
