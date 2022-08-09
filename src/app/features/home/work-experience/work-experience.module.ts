import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkExperienceComponent } from './work-experience.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [WorkExperienceComponent],
  imports: [CommonModule, TranslateModule],
  exports: [WorkExperienceComponent],
})
export class WorkExperienceModule {}
