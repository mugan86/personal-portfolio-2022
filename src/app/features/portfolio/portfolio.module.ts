import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortfolioRoutingModule } from './portfolio-routing.module';
import { PortfolioComponent } from './portfolio.component';
import { OverviewModule } from './overview/overview.module';
import { HttpClient } from '@angular/common/http';

import { FEATURE_DIRECTORIES_I18N } from '@core/constants/i18n';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { CustomTranslateLoader } from '@core/helpers/i18n';
export const createTranslateLoader = (http: HttpClient) => {
  return new CustomTranslateLoader(http, FEATURE_DIRECTORIES_I18N.portfolio);
};
@NgModule({
  declarations: [
    PortfolioComponent
  ],
  imports: [
    CommonModule,
    PortfolioRoutingModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient],
      },
      isolate: true,
    }),
    OverviewModule,
  ]
})
export class PortfolioModule { }
