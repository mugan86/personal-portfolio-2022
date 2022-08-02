import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NowWorkingComponent } from './now-working.component';
import { NowWorkingRoutingModule } from './now-working-routing.module';


@NgModule({
  declarations: [
    NowWorkingComponent
  ],
  imports: [
    CommonModule,
    NowWorkingRoutingModule
  ]
})
export class NowWorkingModule { }
