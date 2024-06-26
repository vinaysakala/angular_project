import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-droupdown',
  templateUrl: './droupdown.component.html',
  styleUrls: ['./droupdown.component.css']
})
export class DroupdownComponent {
  @Input() disabled:any;
  @Input() placeholder:any;
  @Input() dropModels: any = '';
  @Input() optionValue:any;
  @Output() dropModelsChange = new EventEmitter<any>();
   @Input()  options:any;
@Input() errorMessage:any;



@Output() onBlur=new EventEmitter();

cities: any;

selectedCity: any;


onBlurControl(event: any) {
  this.onBlur.emit(true)
  console.log('blur Work')
}


send() {
  
  this.dropModelsChange.emit(this.dropModels);
 
  // if (typeof this.dropModels === 'object' && this.dropModels !== null) {
  //   // Emitting the code value of the selected city
  //   this.dropModelsChange.emit(this.dropModels.code);
  // } else {
  //   this.dropModelsChange.emit(this.dropModels)
  //   // console.log('nul value')
  // }
}
 }
