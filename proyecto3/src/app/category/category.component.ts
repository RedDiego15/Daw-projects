import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ItemsService} from '../services/items.service';
import { Item } from '../models/item.model';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  categoryId:string  | null ='';
  items:Item[] = [];


  constructor(
    private route:ActivatedRoute,
    private itemsService:ItemsService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
        this.categoryId = params.get('id');
        console.log(this.categoryId);
    })

   this.getItemsByCategory();

  }


  getItemsByCategory(){
    if(this.categoryId !=null){
      this.itemsService.getItemsByCategory(this.categoryId).subscribe(data =>{
        this.items = data;
        console.log(this.items)
        })

    }

  }

}
