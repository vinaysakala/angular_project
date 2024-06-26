import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OverlayPanel } from 'primeng/overlaypanel';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-gridcomponent',
  templateUrl: './gridcomponent.component.html',
  styleUrls: ['./gridcomponent.component.css']
})
export class GridcomponentComponent implements OnInit {
  columns: any;
  showform = true;
  form = false;
  getstudentdata: any;
  constructor(private http: HttpClient, private router: Router, private _datepipe: DatePipe, private ss: StudentService) { }
  ngOnInit(): void {
    this.http.get<any>('/assets/data.json').subscribe(resp => {
      this.columns = resp.column
    })
  }




  tests() {
    this.router.navigate(['/form1']);
  }

  dateInputModel: any = '2024/04/18-2024/04/25';


  ondateselectionok(selectedoption: string, datepanel: OverlayPanel) {
    let today = new Date();
    let endDateToday = new Date();
    switch (selectedoption) {
      case 'today':
        this.dateInputModel = this._datepipe.transform(new Date, "yyyy/MM/dd");
        break;
      case 'yesterday':
        let yesterday = new Date(today.setDate(today.getDate() - 1));
        this.dateInputModel = this._datepipe.transform(yesterday, "yyyy/MM/dd");
        break;
      case 'last7days':
        let prev7Day = new Date(today.setDate(today.getDate() - 7));
        this.dateInputModel = `${this._datepipe.transform(prev7Day, "yyyy/MM/dd")}-${this._datepipe.transform(endDateToday, "yyyy/MM/dd")}`
        break;
      case 'monthtodate':
        let mon1Date = new Date(today.getFullYear(), today.getMonth(), 1);
        this.dateInputModel = `${this._datepipe.transform(mon1Date, "yyyy/MM/dd")}-${this._datepipe.transform(endDateToday, "yyyy/MM/dd")}`
        break;
      case 'yeartodate':
        let year1Date = new Date(today.getFullYear(), 0, 1);
        this.dateInputModel = `${this._datepipe.transform(year1Date, "yyyy/MM/dd")}-${this._datepipe.transform(endDateToday, "yyyy/MM/dd")}`
        break;

      case 'prevweek':
        let prevlastDate = new Date(today.setDate(today.getDate()));
        let prevfirstdate = new Date(today.setDate(today.getDate() - 6));
        this.dateInputModel = `${this._datepipe.transform(prevfirstdate, "yyyy/MM/dd")}-${this._datepipe.transform(prevlastDate, "yyyy/MM/dd")}`
        break;
      case 'prevmon':
        let prevmonfirstdate = new Date(today.getFullYear(), today.getMonth() - 1, 1);
        let prevmonlastdate = new Date(today.getFullYear(), today.getMonth(), 0);
        this.dateInputModel = `${this._datepipe.transform(prevmonfirstdate, "yyyy/MM/dd")}-${this._datepipe.transform(prevmonlastdate, "yyyy/MM/dd")}`
        break;
      case 'prevyear':
        let prevyearfirstdate = new Date(today.getFullYear() - 1, 0, 1);
        let prevyearlastdate = new Date(today.getFullYear() - 1, 11, 31)
        this.dateInputModel = `${this._datepipe.transform(prevyearfirstdate, "yyyy/MM/dd")}-${this._datepipe.transform(prevyearlastdate, "yyyy/MM/dd")}`
        break;

    }

  }


  getdata() {
    let dates = this.dateInputModel.split("-");
    let fromDt = dates[0];
    let toDate = (dates.length > 1 ? dates[1] : dates[0])
    this.ss.getstudent('g', fromDt, toDate).subscribe(res => {
      this.getstudentdata = res;

    });

  }


}
