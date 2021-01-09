import { Injectable } from '@angular/core';
import { Product, CPU, RAM, Motherboard, GPU } from './products.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private products: Product[] = [
    {
      id: 0,
      type: "CPU",
      imageUrl: "https://www.nynmedia.com/sites/default/files/all/nyn-placeholder-250x250.png",
      brand: "Intel",
      model: "Model 0",
      price: 10000,
      stock: 10,
      baseClock: 1,
      boostClock: 2,
      core: 4,
      thread: 8
    } as CPU,
    {
      id: 1,
      type: "CPU",
      imageUrl: "https://www.nynmedia.com/sites/default/files/all/nyn-placeholder-250x250.png",
      brand: "Intel",
      model: "Model 1",
      price: 10000,
      stock: 10,
      baseClock: 1,
      boostClock: 2,
      core: 4,
      thread: 8
    } as CPU,
    {
      id: 2,
      type: "CPU",
      imageUrl: "https://www.nynmedia.com/sites/default/files/all/nyn-placeholder-250x250.png",
      brand: "Intel",
      model: "Model 2",
      price: 10000,
      stock: 10,
      baseClock: 1,
      boostClock: 2,
      core: 4,
      thread: 8
    } as CPU,
    {
      id: 3,
      type: "RAM",
      imageUrl: "https://www.nynmedia.com/sites/default/files/all/nyn-placeholder-250x250.png",
      brand: "Corsair",
      model: "Model 3",
      price: 20000,
      stock: 20,
      speed: 2400,
      size: 8
    } as RAM,
    {
      id: 4,
      type: "RAM",
      imageUrl: "https://www.nynmedia.com/sites/default/files/all/nyn-placeholder-250x250.png",
      brand: "Corsair",
      model: "Model 4",
      price: 20000,
      stock: 20,
      speed: 2400,
      size: 8
    } as RAM,
    {
      id: 5,
      type: "RAM",
      imageUrl: "https://www.nynmedia.com/sites/default/files/all/nyn-placeholder-250x250.png",
      brand: "Corsair",
      model: "Model 5",
      price: 20000,
      stock: 0,
      speed: 2400,
      size: 8
    } as RAM,
    {
      id: 6,
      type: "Motherboard",
      imageUrl: "https://www.nynmedia.com/sites/default/files/all/nyn-placeholder-250x250.png",
      brand: "MSI",
      model: "Model 6",
      price: 30000,
      stock: 30,
      chipset: "Type A",
      target: "CPU Model X"
    } as Motherboard,
    {
      id: 7,
      type: "Motherboard",
      imageUrl: "https://www.nynmedia.com/sites/default/files/all/nyn-placeholder-250x250.png",
      brand: "MSI",
      model: "Model 7",
      price: 30000,
      stock: 30,
      chipset: "Type A",
      target: "CPU Model X"
    } as Motherboard,
    {
      id: 8,
      type: "Motherboard",
      imageUrl: "https://www.nynmedia.com/sites/default/files/all/nyn-placeholder-250x250.png",
      brand: "MSI",
      model: "Model 8",
      price: 30000,
      stock: 30,
      chipset: "Type A",
      target: "CPU Model X"
    } as Motherboard,
    {
      id: 9,
      type: "GPU",
      imageUrl: "https://www.nynmedia.com/sites/default/files/all/nyn-placeholder-250x250.png",
      brand: "NVIDIA",
      model: "Model 9",
      price: 40000,
      stock: 40
    } as GPU,
    {
      id: 10,
      type: "GPU",
      imageUrl: "https://www.nynmedia.com/sites/default/files/all/nyn-placeholder-250x250.png",
      brand: "NVIDIA",
      model: "Model 10",
      price: 40000,
      stock: 40
    } as GPU,
    {
      id: 11,
      type: "GPU",
      imageUrl: "https://www.nynmedia.com/sites/default/files/all/nyn-placeholder-250x250.png",
      brand: "NVIDIA",
      model: "Model 11",
      price: 40000,
      stock: 0
    } as GPU
  ]

  constructor() { }

  getAllProducts(){
    return [...this.products];
  }

  getProduct(id: number){
    return this.products.find(
      function(product){
        return product.id === id;
      }
    );
  }

  getNewId(){
    if(this.products.length > 0)
      return this.products[this.products.length - 1].id + 1;
    return 0;
  }

  addCPU(
    imageUrl: string, brand: string, model: string, price: number, stock: number,
    baseClock: number, boostClock: number, core: number, thread: number
  ){
    let newId = this.getNewId();
    this.products.push({
      id: newId, type: "CPU",
      imageUrl: imageUrl, brand: brand, model: model, price: price, stock: stock,
      baseClock: baseClock, boostClock: boostClock, core: core, thread: thread
    } as CPU);
  }

  addRAM(
    imageUrl: string, brand: string, model: string, price: number, stock: number,
    speed: number, size: number
  ){
    let newId = this.getNewId();
    this.products.push({
      id: newId, type: "RAM",
      imageUrl: imageUrl, brand: brand, model: model, price: price, stock: stock,
      speed: speed, size: size
    } as RAM);
  }

  addMotherboard(
    imageUrl: string, brand: string, model: string, price: number, stock: number,
    chipset: string, target: string
  ){
    let newId = this.getNewId();
    this.products.push({
      id: newId, type: "Motherboard",
      imageUrl: imageUrl, brand: brand, model: model, price: price, stock: stock,
      chipset: chipset, target: target
    } as Motherboard);
  }

  addGPU(
    imageUrl: string, brand: string, model: string, price: number, stock: number
  ){
    let newId = this.getNewId();
    this.products.push({
      id: newId, type: "GPU",
      imageUrl: imageUrl, brand: brand, model: model, price: price, stock: stock,
    } as GPU);
  }

  findProductIndex(id: number){
    let index = this.products.findIndex(function(product){
      return product.id == id;
    });
    return index;
  }

  editCPU(
    id: number, imageUrl: string, brand: string, model: string, price: number, stock: number,
    baseClock: number, boostClock: number, core: number, thread: number
  ){
    let index = this.findProductIndex(id);
    this.products[index] = {
      id: id, type: "CPU",
      imageUrl: imageUrl, brand: brand, model: model, price: price, stock: stock,
      baseClock: baseClock, boostClock: boostClock, core: core, thread: thread
    } as CPU;
  }

  editRAM(
    id: number, imageUrl: string, brand: string, model: string, price: number, stock: number,
    speed: number, size: number
  ){
    let index = this.findProductIndex(id);
    this.products[index] = {
      id: id, type: "RAM",
      imageUrl: imageUrl, brand: brand, model: model, price: price, stock: stock,
      speed: speed, size: size
    } as RAM;
  }

  editMotherboard(
    id: number, imageUrl: string, brand: string, model: string, price: number, stock: number,
    chipset: string, target: string
  ){
    let index = this.findProductIndex(id);
    this.products[index] = {
      id: id, type: "Motherboard",
      imageUrl: imageUrl, brand: brand, model: model, price: price, stock: stock,
      chipset: chipset, target: target
    } as Motherboard;
  }

  editGPU(
    id: number, imageUrl: string, brand: string, model: string, price: number, stock: number
  ){
    let index = this.findProductIndex(id);
    this.products[index] = {
      id: id, type: "GPU",
      imageUrl: imageUrl, brand: brand, model: model, price: price, stock: stock,
    } as GPU;
  }

  deleteProduct(id: number){
    this.products = this.products.filter(
      product => {
        return product.id != id;
      }
    )
  }
}
