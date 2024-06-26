import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-rangecalender',
  templateUrl: './rangecalender.component.html',
  styleUrls: ['./rangecalender.component.css']
})
export class RangecalenderComponent {
  @Input() rangecal:any;
  @Output() rangecalChange = new EventEmitter();
  updaterangeCalModel(value: any) {
    this.rangecal = value;
    this.rangecalChange.emit(this.rangecal);
  }
}
