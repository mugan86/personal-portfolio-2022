import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioComponent } from './portfolio.component';
import { SharedModule } from '@shared/shared.module';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';



@NgModule({
  declarations: [
    PortfolioComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule,
    SharedModule
  ],
  exports: [
    PortfolioComponent
  ]
})
export class PortfolioModule { }
