import { Component, Input, OnInit } from '@angular/core';
import { INowWorkingItem } from '@core/interfaces/now-working.interface';

@Component({
  selector: 'app-now-working-section-items',
  templateUrl: './section-items.component.html',
  styleUrls: ['./section-items.component.css'],
})
export class SectionItemsComponent implements OnInit {
  @Input() projectWorking!: boolean;
  @Input() nowWorkingElements: Array<INowWorkingItem> = [];
  headerData: {
    action: string;
    description: string;
  } = {
    action: '',
    description: '',
  };

  ngOnInit() {
    this.headerData = this.projectWorking
      ? {
          action: 'nowWorkingProjects.title',
          description: 'nowWorkingProjects.subtitle',
        }
      : {
          action: 'Estudiando',
          description:
            'Cursos / Libros en los que estoy dedicando tiempo para adquirir nuevos conocimientos',
        };
  }
}
