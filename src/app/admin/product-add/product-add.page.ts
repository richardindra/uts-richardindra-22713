import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { ProductsService } from 'src/app/products.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.page.html',
  styleUrls: ['./product-add.page.scss'],
})
export class ProductAddPage implements OnInit {
  productType: string;

  constructor(
    private productsService: ProductsService,
    private toastController: ToastController,
    private router: Router
  ) { }

  ngOnInit() { }

  setProductType($event){
    this.productType = $event.target.value;
  }

  onSubmit(form: NgForm){
    if(!form.valid) return;
    let f = form.value;
    switch(this.productType){
      case "CPU":
        this.productsService.addCPU(
          f.imageUrl, f.brand, f.model, f.price, f.stock,
          f.baseClock, f.boostClock, f.core, f.thread
        );
      break;
      case "RAM":
        this.productsService.addRAM(
          f.imageUrl, f.brand, f.model, f.price, f.stock,
          f.speed, f.size
        );
      break;
      case "Motherboard":
        this.productsService.addMotherboard(
          f.imageUrl, f.brand, f.model, f.price, f.stock,
          f.chipset, f.target
        );
      break;
      case "GPU":
        this.productsService.addGPU(
          f.imageUrl, f.brand, f.model, f.price, f.stock
        );
      break;
    }
    
    this.router.navigate(["/admin"]);
    this.addToast();
  }

  async addToast(){
    const toast = await this.toastController.create({
      message: "Produk berhasil ditambah.",
      color: "success",
      duration: 3000
    });
    await toast.present();
  }

}
