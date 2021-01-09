import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, CPU, RAM, Motherboard, GPU } from 'src/app/products.model';
import { ProductsService } from 'src/app/products.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.page.html',
  styleUrls: ['./product-detail.page.scss'],
})
export class ProductDetailPage implements OnInit {
  product: Product;

  constructor(
    private productsService: ProductsService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap =>{
      if(!paramMap.has('productId')) return;
      let productId = parseInt(paramMap.get('productId'));
      this.product = this.productsService.getProduct(productId);
    })
  }

  formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
  }

}
