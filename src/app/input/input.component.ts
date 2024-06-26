import { Component, EventEmitter, Input, Optional, Output, Self } from '@angular/core';
import { NgControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {


  @Input() inputModel: any = '';
  @Input() placeholder: any;
  @Input() filter: any
  @Input() name: any;
  @Input() errorMessage: any;
  @Input() disabled:any;




  @Output() onBlur = new EventEmitter();
  @Output() onChange = new EventEmitter();



  @Output() inputModelChange: EventEmitter<string> = new EventEmitter<string>();
  @Output() onInput: EventEmitter<any> = new EventEmitter<any>();


  // constructor( @Self() public ngControl:NgControl){}


  send() {
    this.inputModelChange.emit(this.inputModel)
  }

  onBlurControl(event: any) {
    this.onBlur.emit(true)
    console.log('blur Work')
  }
  onChangeControl(event: any) {
    this.onChange.emit(true)

    console.log('change Work')
  }
  // onControl() {
  //   if (this.ngControl != null) {
  //     this.markMandatory = (this.isMandatory && (this.ngControl.control?.value == null || this.ngControl.control?.value == ""));
  //   }
  //   else {
  //     this.markMandatory = (this.markMandatory && (this.inputModel == null || this.inputModel == ""));
  //   }
  //   this.onBlur.emit()
  // }
}
