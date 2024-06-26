import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-griddocument',
  templateUrl: './griddocument.component.html',
  styleUrls: ['./griddocument.component.css']
})
export class GriddocumentComponent implements OnInit{
  
  columns:any;
constructor(private http:HttpClient,private router:Router){}

ngOnInit(): void {
  this.http.get<any>('/assets/data.json').subscribe(resp=>{
    this.columns=resp.document_grid_coloumn;
   })
   
}


tests(){
  this.router.navigate(['/form2'])
  
}
}
