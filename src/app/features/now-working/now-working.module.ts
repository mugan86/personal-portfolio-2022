import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NowWorkingComponent } from './now-working.component';
import { NowWorkingRoutingModule } from './now-working-routing.module';
import { SectionItemsModule } from './section-items/section-items.module';


@NgModule({
  declarations: [
    NowWorkingComponent
  ],
  imports: [
    CommonModule,
    SectionItemsModule,
    NowWorkingRoutingModule
  ]
})
export class NowWorkingModule { }
