import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor() { }

  public passDataChild:any;

  ngOnInit(): void {
  }

  getData(data:any){
    this.passDataChild = data;
  }

}
