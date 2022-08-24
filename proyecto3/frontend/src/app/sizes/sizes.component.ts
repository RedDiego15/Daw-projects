import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-sizes',
  templateUrl: './sizes.component.html',
  styleUrls: ['./sizes.component.css']
})
export class SizesComponent implements OnInit {
  @Input() size:string = '7';
  constructor() { }

  ngOnInit(): void {
  }

}
