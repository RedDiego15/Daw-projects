import { Component, OnInit } from '@angular/core';
import {Item} from '../models/item.model';
@Component({
  selector: 'app-itemdetails',
  templateUrl: './itemdetails.component.html',
  styleUrls: ['./itemdetails.component.css']
})
export class ItemdetailsComponent implements OnInit {

  item:Item ={
    id:0,
    nombre:'Jordan 1',
    descripcion:'Lorem impsum ',
    precio:150,
    category:'',
    urlImg:'',
  }
  constructor() { }

  ngOnInit(): void {
  }

}
