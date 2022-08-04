import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OneColumPortfolioComponent } from './one-colum-portfolio.component';
import { BadgeModule } from '@shared/badge/badge.module';



@NgModule({
  declarations: [
    OneColumPortfolioComponent
  ],
  imports: [
    CommonModule,
    BadgeModule
  ],
  exports: [
    OneColumPortfolioComponent
  ],
})
export class OneColumPortfolioModule { }
