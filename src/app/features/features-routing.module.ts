import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeaturesComponent } from './features.component';

const routes: Routes = [
  {
    path: '',
    component: FeaturesComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./home/home.module').then(m => m.HomeModule),
      },
      {
        path: 'projects',
        loadChildren: () =>
          import('./portfolio/portfolio.module').then(m => m.PortfolioModule),
      },
      {
        path: 'courses',
        loadChildren: () =>
          import('./courses/courses.module').then(m => m.CoursesModule),
      },
      {
        path: 'now-working',
        loadChildren: () =>
          import('./now-working/now-working.module').then(
            m => m.NowWorkingModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeaturesRoutingModule {}
