import { Component } from '@angular/core';
import { PORTFOLIO_ITEMS } from '@core/constants/portfolio';
import { shuffled } from '@core/helpers/random-array-values';

@Component({
  selector: 'app-home-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
  projects = shuffled(PORTFOLIO_ITEMS).slice(0, 9);
}
