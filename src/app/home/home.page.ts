import { Component } from '@angular/core';
import { Product } from '../products.model';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  products: Product[];
  viewMode: number;

  constructor(
    private productsService: ProductsService
  ) {}

  ngOnInit(){
    this.viewMode = 0;
    this.products = this.productsService.getAllProducts();
  }

  ionViewWillEnter(){
    this.products = this.productsService.getAllProducts();
  }

  toggleView(){
    this.viewMode = 1 - this.viewMode;
  }

}
