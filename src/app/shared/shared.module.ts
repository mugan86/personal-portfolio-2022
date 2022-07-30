import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LinkModule } from './link/link.module';
import { ModalModule } from './modal/modal.module';
import { OneColumPortfolioModule } from './one-colum-portfolio/one-colum-portfolio.module';
@NgModule({
  imports: [
    CommonModule,
    LinkModule,
    ModalModule,
    OneColumPortfolioModule
  ],
  exports: [ LinkModule, ModalModule ]
})
export class SharedModule { }
