import { Component } from '@angular/core';
import * as _ from 'lodash';
import { DatePipe } from '@angular/common';
import { OverlayPanel } from 'primeng/overlaypanel';

@Component({
  selector: 'app-getdatafromgrid',
  templateUrl: './getdatafromgrid.component.html',
  styleUrls: ['./getdatafromgrid.component.css']
})
export class GetdatafromgridComponent {


   dateInputModel:any='';
   constructor(private _datepipe:DatePipe){}
   ondateselectionok(selectedoption:string, datepanel:OverlayPanel){
      let today=new Date();
      let endDateToday=new Date();
      switch(selectedoption){
        case 'today':
        this.dateInputModel=this._datepipe.transform(new Date,"yyyy-MM-dd");
        break;
        case 'yesterday':
        let yesterday=new Date(today.setDate(today.getDate()-1));
        this.dateInputModel=this._datepipe.transform(yesterday,"yyyy-MM-dd");
        break;
        case 'last7days':
        let prev7Day=new Date(today.setDate(today.getDate()-7));
        this.dateInputModel=`${this._datepipe.transform(prev7Day,"yyyy-MM-dd")}-${this._datepipe.transform(endDateToday,"yyyy-MM-dd")}`
        break;
        case 'monthtodate':
          let mon1Date=new Date(today.getFullYear(),today.getMonth(),1);
          this.dateInputModel=`${this._datepipe.transform(mon1Date,"yyyy-MM-dd")}-${this._datepipe.transform(endDateToday,"yyyy-MM-dd")}`
          break;
        case 'yeartodate':
           let year1Date=new Date(today.getFullYear(),0,1);
           this.dateInputModel=`${this._datepipe.transform(year1Date,"yyyy-MM-dd")}-${this._datepipe.transform(endDateToday,"yyyy-MM-dd")}`
           break;

        case 'prevweek':
          let prevlastDate=new Date(today.setDate(today.getDate()));
          let prevfirstdate=new Date(today.setDate(today.getDate()-6));
          this.dateInputModel=`${this._datepipe.transform(prevfirstdate,"yyyy-MM-dd")}-${this._datepipe.transform(prevlastDate,"yyyy-MM-dd")}`
          break;
        case 'prevmon':
          let prevmonfirstdate=new Date(today.getFullYear(),today.getMonth()-1,1);
          let prevmonlastdate=new Date(today.getFullYear(),today.getMonth(),0);
          this.dateInputModel=`${this._datepipe.transform(prevmonfirstdate,"yyyy-MM-dd")}-${this._datepipe.transform(prevmonlastdate,"yyyy-MM-dd")}`
          break;
        case 'prevyear':
          let prevyearfirstdate=new Date(today.getFullYear()-1,0,1);
          let prevyearlastdate=new Date(today.getFullYear() - 1, 11, 31)
          this.dateInputModel=`${this._datepipe.transform(prevyearfirstdate,"yyyy-MM-dd")}-${this._datepipe.transform(prevyearlastdate,"yyyy-MM-dd")}`
      }
   }
}
