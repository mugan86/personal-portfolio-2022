import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HeaderModule } from './header/header.module';
import { PortfolioModule } from './portfolio/portfolio.module';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HeaderModule,
    PortfolioModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
