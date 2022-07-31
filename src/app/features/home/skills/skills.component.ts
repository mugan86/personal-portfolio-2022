import { Component } from '@angular/core';
import { SKILLS_LIST } from '@core/constants/skills';

@Component({
  selector: 'app-home-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  skills = SKILLS_LIST;
}
