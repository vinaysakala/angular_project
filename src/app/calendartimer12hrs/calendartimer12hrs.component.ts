import { Component, inject } from '@angular/core';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-calendartimer12hrs',
  templateUrl: './calendartimer12hrs.component.html',
  styleUrls: ['./calendartimer12hrs.component.css']
})
export class Calendartimer12hrsComponent {
  private _datepipe = inject(DatePipe);
  public calModel: any;
  public selectedDate: any;
  public texxt:any=null;

  onsave() {
    let now = new Date();
    let currenthours = now.getHours();
    let currentmin = now.getMinutes();
    let selectedtime = this._datepipe.transform(new Date(this.calModel), 'HH:mm')
    let selecthours = selectedtime?.split(':')[0];
    let selectmin = selectedtime?.split(':')[1];
    if (selecthours != null && selectmin != null) {
      if (parseInt(selecthours) < currenthours) {
      this.texxt='time should be greater then current time';
      } else if (parseInt(selecthours) == currenthours) {
        if (parseInt(selectmin) < currentmin) {
         this.texxt='time should be greater then current time';
        }else{
          this.texxt='correct time';
        }
      }else{
        this.texxt='correct time';
      }
    }else{
      this.texxt='please select time';
    }
  }
}
