import { Component, OnInit } from '@angular/core';
import {ItemsService } from '../services/items.service'
import {Item} from '../models/item.model'

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  categories:string[] = [];

  constructor(
    private itemsService:ItemsService
  ) { }

  ngOnInit(): void {
    this.itemsService.getAll()
    .subscribe(data => {
      this.categories = [...new Set (data.map(item => item.category))];
      this.categories = this.categories.filter(cat => {return cat!=null});
    })


  }




}
