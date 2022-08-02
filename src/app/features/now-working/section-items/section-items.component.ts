import { Component, Input } from '@angular/core';
import { INowWorkingItem } from '@core/interfaces/now-working.interface';

@Component({
  selector: 'app-now-working-section-items',
  templateUrl: './section-items.component.html',
  styleUrls: ['./section-items.component.css']
})
export class SectionItemsComponent {
  @Input() projectWorking!: boolean;
  @Input() nowWorkingElements: Array<INowWorkingItem> = [];
  headerData: {
    action: string;
    description: string;
  } = {
      action: '',
      description: ''
    }

  ngOnInit() {
    this.headerData = (this.projectWorking) ? {
      action: 'Trabajando en estos proyectos',
      description: 'Proyectos personales en los que estoy trabajando actualmente en mi tiempo libre.'
    } : {
      action: 'Estudiando',
      description: 'Cursos / Libros en los que estoy dedicando tiempo para adquirir nuevos conocimientos'
    }

  }
}
