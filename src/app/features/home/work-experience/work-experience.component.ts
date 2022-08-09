import { Component } from '@angular/core';
import { workExperienceDetails } from '@core/constants/work-experience';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css'],
})
export class WorkExperienceComponent {
  works = workExperienceDetails;
}
