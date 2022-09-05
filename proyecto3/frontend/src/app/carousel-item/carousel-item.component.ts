import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-carousel-item',
  templateUrl: './carousel-item.component.html',
  styleUrls: ['./carousel-item.component.css']
})
export class CarouselItemComponent implements OnInit {
  @Input() imgSrc:string ='https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/3cc67bbc-9d4f-47b0-8268-fcbe34df4c41/air-jordan-1-mid-shoes-tFvhbH.png'
  constructor() { }

  ngOnInit(): void {
  }

}
