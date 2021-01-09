import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/products.model';

@Component({
  selector: 'product-item-list',
  templateUrl: './product-item-list.component.html',
  styleUrls: ['./product-item-list.component.scss'],
})
export class ProductItemListComponent implements OnInit {
  @Input() product: Product;
  constructor() { }

  ngOnInit() {}

  formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
  }

}
