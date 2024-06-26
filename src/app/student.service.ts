import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class StudentService {

  
  //  http://localhost:3000/student
  // http://localhost:3000/getstudent


  // http://localhost:5000/todos
  // http://localhost:5000/getdata
  constructor(private http: HttpClient) {}

  sendstudent(obj:any):Observable<any>{
    return this.http.post('http://localhost:5000/todos',obj)
  }

  getstudent(par_flag: string,par_fromdate:string,par_todate:string): Observable<any> {
    
    let params = new HttpParams();
    params= params.set('par_flag', par_flag);
    params= params.set('par_fromdate', par_fromdate);
    params= params.set('par_todate', par_todate);
    return this.http.get<any>('http://localhost:5000/getdata', { params });
  }
  


  editstudent(par_flag:string,par_name:string): Observable<any>{
    let params = new HttpParams();
    params= params.set('par_flag', par_flag);
    params=params.set('par_name',par_name);

     
    return this.http.get<any>('http://localhost:5000/editdata', { params });
     
  }
}
