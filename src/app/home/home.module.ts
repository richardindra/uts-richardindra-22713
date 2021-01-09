import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { ProductItemGridComponent } from '../components/product-item-grid/product-item-grid.component';
import { ProductItemListComponent } from '../components/product-item-list/product-item-list.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [
    HomePage,
    ProductItemGridComponent,
    ProductItemListComponent
  ]
})
export class HomePageModule {}
