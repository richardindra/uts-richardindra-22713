import { Component, OnInit } from '@angular/core';
import { AlertController, IonItemSliding, ToastController } from '@ionic/angular';
import { Product } from '../products.model';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {
  products: Product[];

  constructor(
    private productsService: ProductsService,
    private alertController: AlertController,
    private toastController: ToastController
  ) { }

  ngOnInit(){
    this.products = this.productsService.getAllProducts();
  }

  ionViewWillEnter(){
    this.products = this.productsService.getAllProducts();
    console.log(this.products);
  }

  closeSlidingItem(slidingItem: IonItemSliding){
    slidingItem.close();
  }

  async deleteAlert(productId: number, slidingItem: IonItemSliding){
    const alert = await this.alertController.create({
      header: "Hapus Produk",
      message: "Apakah anda yakin untuk menghapus produk ini?",
      buttons:[
        {
          text: "Batal",
          role: "cancel"
        },
        {
          text: "Hapus",
          handler: () => {
            this.productsService.deleteProduct(productId);
            this.products = this.productsService.getAllProducts();
            this.deleteToast();
          }
        }
      ]
    });
    await alert.present();
    this.closeSlidingItem(slidingItem);
  }

  async deleteToast(){
    const toast = await this.toastController.create({
      message: "Produk berhasil dihapus.",
      color: "danger",
      duration: 3000
    });
    await toast.present();
  }

}
