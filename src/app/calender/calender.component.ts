import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.css']
})
export class CalenderComponent {
       @Input() disabled:any;
       @Input() errorMessage: any;
          @Input() calModel:any;
          @Output() calModelChange = new EventEmitter();
           @Output() onBlur=new EventEmitter();


          updateCalModel(value: any) {
            this.calModel = value;
            this.calModelChange.emit(this.calModel);
          }
          onBlurControl(event: any) {
            this.onBlur.emit(true)
            console.log('blur Work')
          }
}
