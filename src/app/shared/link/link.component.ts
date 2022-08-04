import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.css']
})
export class LinkComponent {
  @Input() class: string = '';
  @Input() linkText: string = 'Link';
  @Input() link: string = '';
  @Input() title: string = '';
  @Input() total: number = -1;
  @Input() index: number = -1;
  @Input() footer: string = '';
}
