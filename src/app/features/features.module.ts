import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';
import { FeaturesComponent } from './features.component';
import { CoreModule } from '../core/core.module';
import { SharedModule } from '@shared/shared.module';


@NgModule({
  declarations: [
    FeaturesComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    FeaturesRoutingModule
  ]
})
export class FeaturesModule { }
