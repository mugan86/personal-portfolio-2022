import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  constructor(private translate: TranslateService) { 
    this.translate.use('es');
  }

  ngOnInit(): void {
    console.log('Portfolio');
  }

}
