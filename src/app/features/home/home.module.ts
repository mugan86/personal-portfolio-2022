import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HeaderModule } from './header/header.module';
import { PortfolioModule } from './portfolio/portfolio.module';
import { WorkExperienceModule } from './work-experience/work-experience.module';
import { SkillsModule } from './skills/skills.module';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HeaderModule,
    PortfolioModule,
    WorkExperienceModule,
    SkillsModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
