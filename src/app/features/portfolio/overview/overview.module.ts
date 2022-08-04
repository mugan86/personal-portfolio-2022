import { FormsModule } from '@angular/forms';
import { OneColumPortfolioModule } from '@shared/one-colum-portfolio/one-colum-portfolio.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OverviewComponent } from './overview.component';
import { PaginationModule } from '@shared/pagination/pagination.module';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [
    OverviewComponent,
  ],
  imports: [
    CommonModule,
    OneColumPortfolioModule,
    PaginationModule,
    FormsModule,
    TranslateModule
  ],
  exports: [OverviewComponent]
})
export class OverviewModule { }
