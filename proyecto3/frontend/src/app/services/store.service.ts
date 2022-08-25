import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BuyedItem} from '../models/buyedItem';
import {Item} from '../models/item.model';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  cartShoes:BuyedItem[] = [];


  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {

  }
  addToCart(newitem:Item){
    const itemIdx = this.cartShoes.findIndex(buyedItem => buyedItem.item.idItem === newitem.idItem)
    if(itemIdx>-1){
      this.cartShoes[itemIdx].quantity = this.cartShoes[itemIdx].quantity+1
    }else{
     let newBuyedItem= {
        item:newitem,
        quantity:1
      }
      this.cartShoes.push(newBuyedItem);
    }
    console.log(this.cartShoes)

  }
  getCartShoes(){
    return this.cartShoes;
  }
  getTotalPay(){
    let acum = 0;
    this.cartShoes.forEach(buyedItem => {
      acum += buyedItem.item.precio * buyedItem.quantity
    })
    return acum;
  }
}
