import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pmultiple',
  templateUrl: './pmultiple.component.html',
  styleUrls: ['./pmultiple.component.css']
})
export class PmultipleComponent {
@Input() inputmodel:any;
@Input() cities:any;
@Input() placeholder:any;
}
