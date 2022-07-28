import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioComponent } from './portfolio.component';
import { SharedModule } from '@shared/shared.module';



@NgModule({
  declarations: [
    PortfolioComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    PortfolioComponent
  ]
})
export class PortfolioModule { }
