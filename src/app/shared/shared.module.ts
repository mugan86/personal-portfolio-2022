import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LinkModule } from './link/link.module';
import { ModalModule } from './modal/modal.module';
@NgModule({
  imports: [
    CommonModule,
    LinkModule,
    ModalModule
  ],
  exports: [ LinkModule, ModalModule ]
})
export class SharedModule { }
