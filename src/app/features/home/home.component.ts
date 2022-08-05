import { Component, OnInit } from '@angular/core';
import { CONTACT_INFO_LINKS } from '@core/constants/contact-info-links';
import { IContactInfoLinks } from '@core/interfaces/contact-info-links.interface';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  constructor(private translate: TranslateService) { 
    this.translate.use('es');
  }

  ngOnInit(): void {
    console.log('Features');
  }

}
