import { Component, Input, OnInit } from '@angular/core';
import { Deal } from 'src/app/_models/deal';

@Component({
  selector: 'app-deal-table-row-minimal',
  templateUrl: './deal-table-row-minimal.component.html',
  styleUrls: ['./deal-table-row-minimal.component.css'],
})
export class DealTableRowMinimalComponent implements OnInit {
  @Input() deal: Deal;

  constructor() {
    this.deal = {
      title: 'Grand Theft Auto V',
      dealID: 0,
      storeID: 0,
      gameID: '',
      salePrice: 0,
      normalPrice: 0,
      savings: 0,
      metacriticScore: 0,
      thumb: '',
      storeName: '',
      images: {
        icon: '',
      },
    };
  }

  ngOnInit(): void {}

  redirectToDeal() {
    window.open(
      `https://www.cheapshark.com/redirect?dealID=${this.deal.dealID}`,
      '_blank'
    );
  }
}
