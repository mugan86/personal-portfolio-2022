import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OneColumPortfolioComponent } from './one-colum-portfolio.component';
import { BadgeModule } from '@shared/badge/badge.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [OneColumPortfolioComponent],
  imports: [CommonModule, BadgeModule, TranslateModule],
  exports: [OneColumPortfolioComponent],
})
export class OneColumPortfolioModule {}
