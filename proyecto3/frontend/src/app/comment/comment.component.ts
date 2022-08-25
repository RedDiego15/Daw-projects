import { Component, OnInit} from '@angular/core';
import {Item} from '../models/item.model';
import {ItemsService} from '../services/items.service';
import { ActivatedRoute } from '@angular/router';
const $comments =  document.getElementById("comments")
@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {


  items:Item[] = [];
  idItem:string | null ='';
  comments:any[]=[];

  item:Item ={
    idItem:5,
    nombre:'Jordan 1',
    descripcion:'Lorem impsum ',
    precio:150,
    category:'',
    urlImg:'',
  }

  constructor(
    private itemsService:ItemsService,
    private route:ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.idItem = params.get('id');
    })

    if(this.idItem !=null){
      this.itemsService.getItem(this.idItem)
      .subscribe(infoItem =>{
        this.item = infoItem;
      })
    }
    this.getItemsByCategory();

    this.getComments();

  }
  ngOnChanges(){
  }

  getComments(){
    if(this.idItem !=null){
      this.itemsService.getItemCommentsData(this.idItem)
      .subscribe(commentsData =>{
        for (let idx in commentsData){
          this.comments.push(commentsData[idx]);
        }
      })

    }
  }

  getItemsByCategory(){
    if(this.item.category !=null){
      this.itemsService.getItemsByCategory(this.item.category).subscribe(data =>{
        this.items = data;
        console.log(this.items)
        })
    }
  }

  chargeComments(event:Event){
    this.comments =[];
    let el = event.target as HTMLInputElement;
    let valor = el.value;
    this.idItem = valor;
    this.getComments();
    if(this.idItem !=null){
      this.itemsService.getItem(this.idItem)
      .subscribe(infoItem =>{
        this.item = infoItem;
      })
    }
  }

}
