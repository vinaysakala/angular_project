import { Component } from '@angular/core';

@Component({
  selector: 'app-displaygroupcoloumtable',
  templateUrl: './displaygroupcoloumtable.component.html',
  styleUrls: ['./displaygroupcoloumtable.component.css']
})
export class DisplaygroupcoloumtableComponent {
  dateofbirth:any;
 onselectdate(e:any){
    this.dateofbirth=e
    console.log(this.dateofbirth)
 }
}
