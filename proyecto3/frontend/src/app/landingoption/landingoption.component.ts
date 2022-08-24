import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-landingoption',
  templateUrl: './landingoption.component.html',
  styleUrls: ['./landingoption.component.css']
})
export class LandingoptionComponent implements OnInit {

  @Input() title:string = 'Landing'
  constructor() { }

  ngOnInit(): void {
  }

}
