import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/products.model';

@Component({
  selector: 'product-item-grid',
  templateUrl: './product-item-grid.component.html',
  styleUrls: ['./product-item-grid.component.scss'],
})
export class ProductItemGridComponent implements OnInit {
  @Input() product: Product;
  constructor() { }

  ngOnInit() {}

  formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
  }

}
