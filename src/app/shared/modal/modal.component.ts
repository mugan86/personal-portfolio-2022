import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit {
  @Input() modalId: string = '';
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() cover?: string = '';
  @Input() externalRouter?: string | undefined = '';

  ngOnInit(): void {
    this.modalId = this.modalId.slice(1);
  }
}
