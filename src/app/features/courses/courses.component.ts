import { Component } from '@angular/core';
import { GENERAL } from '@core/constants/general-configs';
import { COURSES_OFFERS } from '@core/constants/online-courses';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent {
  onlineCourses = COURSES_OFFERS;
  coupon: { code: string; active: boolean; data_finish: string } =
    GENERAL.coupon;
}
