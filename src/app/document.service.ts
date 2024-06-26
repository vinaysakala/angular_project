import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient ,HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {


  constructor(private http:HttpClient) { }

  sendstudent(obj:any):Observable<any>{
    return this.http.post('http://localhost:8000/insertdocumnet',obj)
  }

  
  getstudent(par_flag: string): Observable<any> {
    // Construct parameters
    const params = new HttpParams().set('par_flag', par_flag);

    // Make HTTP GET request with parameters
    return this.http.get<any>('http://localhost:8000/getdocument', { params });
  }


  editstudent(par_flag:string,par_sno:number): Observable<any>{
    let params = new HttpParams();
    params= params.set('par_flag', par_flag);
    params=params.set('par_sno',par_sno);

     
    return this.http.get<any>('http://localhost:8000/editdocument', { params });
     
  }



}


