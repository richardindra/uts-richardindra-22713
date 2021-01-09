import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Product } from 'src/app/products.model';
import { ProductsService } from 'src/app/products.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.page.html',
  styleUrls: ['./product-edit.page.scss'],
})
export class ProductEditPage implements OnInit {
  product: Product;
  @ViewChild('form', null) form: NgForm
  constructor(
    private productsService: ProductsService,
    private toastController: ToastController,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap =>{
      if(!paramMap.has('productId')) return;
      let productId = parseInt(paramMap.get('productId'));
      this.product = this.productsService.getProduct(productId);
      setTimeout(() => {
        this.form.setValue(this.product);
      })
    });
  }

  onSubmit(form: NgForm){
    if(!form.valid) return;
    let f = form.value;
    switch(this.product.type){
      case "CPU":
        this.productsService.editCPU(
          f.id, f.imageUrl, f.brand, f.model, f.price, f.stock,
          f.baseClock, f.boostClock, f.core, f.thread
        );
      break;
      case "RAM":
        this.productsService.editRAM(
          f.id, f.imageUrl, f.brand, f.model, f.price, f.stock,
          f.speed, f.size
        );
      break;
      case "Motherboard":
        this.productsService.editMotherboard(
          f.id, f.imageUrl, f.brand, f.model, f.price, f.stock,
          f.chipset, f.target
        );
      break;
      case "GPU":
        this.productsService.editGPU(
          f.id, f.imageUrl, f.brand, f.model, f.price, f.stock
        );
      break;
    }
    this.router.navigate(["/admin"]);
  }

}
