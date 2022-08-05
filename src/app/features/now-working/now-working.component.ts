import { Component } from '@angular/core';
import { NOW_WORKING_LEARN, NOW_WORKING_PROJECTS } from '@core/constants/now-working';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-now-working',
  templateUrl: './now-working.component.html',
  styleUrls: ['./now-working.component.css']
})
export class NowWorkingComponent {
  projects = NOW_WORKING_PROJECTS;
  learn= NOW_WORKING_LEARN;
  constructor(private translate: TranslateService) {
    this.translate.use('es');
  }
}
