import { Component } from '@angular/core';

@Component({
  selector: 'app-clanderpicker',
  templateUrl: './clanderpicker.component.html',
  styleUrls: ['./clanderpicker.component.css']
})
export class ClanderpickerComponent {
  obj: any = {
    
    clarange: '',
   
  };
  selectedOption: string = 'today';
  showCalendarForRange: boolean = true;

  onOptionChange() {
    switch (this.selectedOption) {
      case 'today':
        this.setToday();
        break;
      case 'yesterday':
        this.setYesterday();
        break;
      case 'tomorrow':
        this.setTomorrow();
        break;
      case 'currentmonth':
        this.setcurrentmonth();
        break;
      case 'nextweek':
        this.setnextweek();
        break;
      case 'lastweek':
        this.setlastweek();
        break;
      case 'lastmonth':
        this.setpreviousmonth();
        break;
      case 'nextmonth':
        this.setnextmonth();
        break;
      case 'yeartodate':
        this.setyeartodate();
        break;
      case 'lastyear':
        this.setlastyear();
        break;
      default:
        break;
    }
  }

  setToday() {
    const today = new Date();
    this.obj.clarange = [today];
  }

  setYesterday() {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    this.obj.clarange = [yesterday];
  }

  setTomorrow() {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    this.obj.clarange = [tomorrow];
  }

 
  setnextweek(){
    const nextweek = new Date();
    nextweek.setDate(nextweek.getDate() + 7);
    this.obj.clarange = [nextweek];
  }

  setlastweek(){
    const today=new Date();
    const lastweek = new Date();
    lastweek.setDate(lastweek.getDate() - 7);
    this.obj.clarange = [lastweek,today];
  }
  setcurrentmonth(){
    const today = new Date();
    const firstDayOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
    const lastDayOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0);
    this.obj.clarange = [firstDayOfMonth, lastDayOfMonth];
  }
  setpreviousmonth(){
    const today=new Date();
    const previousdayofmonth=new Date(today.getFullYear(),today.getMonth()-1,1);
    const previouslastofmonth=new Date(today.getFullYear(),today.getMonth(),0);
    this.obj.clarange = [previousdayofmonth, previouslastofmonth];
  }
  setnextmonth(){
    const today=new Date();
    const nextdayofmonth=new Date(today.getFullYear(),today.getMonth()+1,1);
    const nextlastofmonth=new Date(today.getFullYear(),today.getMonth()+2,0);
    this.obj.clarange = [nextdayofmonth, nextlastofmonth];
  }
  setyeartodate(){
    const today=new Date();
    const fistdayofyear=new Date(today.getFullYear(),0,1)
    this.obj.clarange=[fistdayofyear,today]
  }
  setlastyear(){
    const today=new Date();
    const fistdayofyear=new Date(today.getFullYear()-1,0,1)
    const lastdayofyear=new Date(today.getFullYear(),0,0)
    this.obj.clarange=[fistdayofyear,lastdayofyear]
  }
}
