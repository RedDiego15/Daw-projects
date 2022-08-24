import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-addcartbtn',
  templateUrl: './addcartbtn.component.html',
  styleUrls: ['./addcartbtn.component.css']
})
export class AddcartbtnComponent implements OnInit {
  @Input() title = ''
  constructor() { }

  ngOnInit(): void {
  }

}
