import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Usuario } from "../../models/usuario";
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  public model = new Usuario();
  public arrayData:any[] = [];

  @Output() passDatatable = new EventEmitter<any>();



  constructor() { }

  ngOnInit(): void {
  }

  setUsuario(){
    this.arrayData.push(this.model);
    this.passDatatable.emit(this.arrayData);
  
  }
  savedata(form:NgForm){
  }

  clean(){
    this.model = new Usuario();
  }

}
