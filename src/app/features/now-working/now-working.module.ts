import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NowWorkingComponent } from './now-working.component';
import { NowWorkingRoutingModule } from './now-working-routing.module';
import { SectionItemsModule } from './section-items/section-items.module';
import { FEATURE_DIRECTORIES_I18N } from '@core/constants/i18n';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { CustomTranslateLoader } from '@core/helpers/i18n';
import { HttpClient } from '@angular/common/http';
export const createTranslateLoader = (http: HttpClient) => {
  return new CustomTranslateLoader(http, FEATURE_DIRECTORIES_I18N.nowWorking);
};

@NgModule({
  declarations: [NowWorkingComponent],
  imports: [
    CommonModule,
    SectionItemsModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient],
      },
      isolate: true,
    }),
    NowWorkingRoutingModule,
  ],
})
export class NowWorkingModule {}
