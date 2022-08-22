import { Component, OnInit,Input } from '@angular/core';
import {Item} from '../models/item.model';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-itemdetails',
  templateUrl: './itemdetails.component.html',
  styleUrls: ['./itemdetails.component.css']
})
export class ItemdetailsComponent implements OnInit {

  shoeId:string  | null ='';

  item:Item ={
    idItem:5,
    nombre:'Jordan 1',
    descripcion:'Lorem impsum ',
    precio:150,
    category:'',
    urlImg:'',
  }
  constructor(
    private route:ActivatedRoute
    ){

    }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.shoeId = params.get('id');
      console.log(`El shoe id: ${this.shoeId}`);
  })
  }

}
