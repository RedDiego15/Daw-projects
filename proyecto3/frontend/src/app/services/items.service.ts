import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Item} from '../models/item.model';
@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor(
    private http:HttpClient
  ) { }

  getAll(){
    return this.http.get<Item[]>(`http://localhost:3000/api/items`);
  }
  getItemsByCategory(category:string){
    return this.http.get<Item[]>(`http://localhost:3000/api/items/${category}`)
  }
   getItem(id:string){
    return  this.http.get<Item>(`http://localhost:3000/api/items/item/${id}`)
  }

  getItemCommentsData(id:string){
    return this.http.get<any[]>(`https://shoescommentdata-default-rtdb.firebaseio.com/comments.json?orderBy=%22shoeId%22&equalTo=${id}`)
  }
}
