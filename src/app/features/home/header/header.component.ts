import { Component, OnInit } from '@angular/core';
import { CONTACT_INFO_LINKS } from '@core/constants/contact-info-links';
import { IContactInfoLinks } from '@core/interfaces/contact-info-links.interface';

@Component({
  selector: 'app-home-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  contactInfoLinks: Array<IContactInfoLinks> = CONTACT_INFO_LINKS;
}
