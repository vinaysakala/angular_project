import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
interface City {
  name: string,
  code: string
}
@Component({
  selector: 'app-miltiselect',
  templateUrl: './miltiselect.component.html',
  styleUrls: ['./miltiselect.component.css']
})
export class MiltiselectComponent {
  cities!: City[];
  @Input() optionValue:any;
  @Input() disabled:any;
  @Input() multiselect:any;
  @Input() errorMessage:any;
  @Output() onBlur=new EventEmitter();
  @Output() multiselectChange = new EventEmitter<any>();

  constructor() {
      this.cities = [
          {name: 'New York', code: 'NY'},
          {name: 'Rome', code: 'RM'},
          {name: 'London', code: 'LDN'},
          {name: 'Istanbul', code: 'IST'},
          {name: 'Paris', code: 'PRS'}
      ];
  }
  
  send(event: any) {
    this.multiselectChange.emit(event);
  }

  onBlurControl(event: any) {
    this.onBlur.emit(true)
    console.log('blur Work')
  }

     
}
