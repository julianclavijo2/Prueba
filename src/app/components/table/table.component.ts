import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input() passDataChild2:any

  constructor() { }

  ngOnInit(): void {
   
    if (this.passDataChild2 !== undefined) {
      console.log(this.passDataChild2);
    }
  }

  delete(index:number){
    console.log(index);
    var a = this.passDataChild2.map((item:any) => item.cedula = index);
    console.log(a);
  }

}
