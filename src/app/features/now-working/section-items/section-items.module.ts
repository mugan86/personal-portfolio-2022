import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionItemsComponent } from './section-items.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [SectionItemsComponent],
  imports: [CommonModule, TranslateModule],
  exports: [SectionItemsComponent],
})
export class SectionItemsModule {}
