import { Component, OnInit } from '@angular/core';
import {BuyedItem} from '../models/buyedItem';
import {StoreService} from '../services/store.service';
@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css']
})
export class PurchaseComponent implements OnInit {

  items:BuyedItem[] = []

  total:number = 0;
  constructor(
    private storeService:StoreService
  ) { }

  ngOnInit(): void {
    this.items = this.storeService.getCartShoes();
    this.calculateTotal()
  }

  ngOnChanges(){

  }
  private calculateTotal(){
    this.total =  this.storeService.getTotalPay()
  }

}
