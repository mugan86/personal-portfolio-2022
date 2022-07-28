import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  @Input() modalId: string = '';
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() cover?: string = '';
}
