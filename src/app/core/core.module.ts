import { FooterModule } from './components/footer/footer.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarModule } from './components/navbar/navbar.module';
import { TitleCaseWordPipe } from './pipes/title-case-word.pipe';
import { JoinPipe } from './pipes/join.pipe';


@NgModule({
  imports: [
    CommonModule,
    FooterModule,
    NavbarModule
  ],
  exports: [
    FooterModule,
    NavbarModule,
    TitleCaseWordPipe,
    JoinPipe
  ],
  declarations: [
    TitleCaseWordPipe,
    JoinPipe
  ]
})
export class CoreModule { }