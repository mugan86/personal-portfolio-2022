import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillsComponent } from './skills.component';
import { TranslateModule } from '@ngx-translate/core';



@NgModule({
  declarations: [
    SkillsComponent
  ],
  imports: [
    CommonModule, TranslateModule
  ],
  exports: [
    SkillsComponent
  ],
})
export class SkillsModule { }
