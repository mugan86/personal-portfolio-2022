import { Component, OnInit } from '@angular/core';
import { CONTACT_INFO_LINKS } from '@core/constants/contact-info-links';
import { GENERAL } from '@core/constants/general-configs';
import { IContactInfoLinks } from '@core/interfaces/contact-info-links.interface';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
  title=GENERAL.title;
  contactInfoLinks: Array<IContactInfoLinks> = CONTACT_INFO_LINKS;
}
