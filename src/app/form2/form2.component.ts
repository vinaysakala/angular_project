import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DocumentService } from '../document.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.css']
})
export class Form2Component implements OnInit{
  sno:any;
  editdata:any;
   constructor(private router:Router,private ds:DocumentService,private route:ActivatedRoute){}
   ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.sno = params['sno'];
      console.log('Sno from URL:', this.sno); // Access sno parameter from URL
    });
  
    this.ds.editstudent('e', this.sno).subscribe(
      (res) => {
        this.editdata = res[0].json_build_object.student[0];
        this.edit(); // Call the edit method after editdata is assigned
      }
    );
  }
    
  obj={
    sno:0,
    document_name:'',
    primary_url:'',
    secondary_url:'',
    Approval:3,
    Authority:3,
    status:1,
    remarks:''
  }
  
  emptyObj = JSON.stringify(this.obj);


  errormessage={
    documentNameerror:'',
    primaryUrlerror:''
  }
  edit(){
    this.obj.sno=this.editdata.sno;
    this.obj.document_name=this.editdata.document_name;
    this.obj.primary_url=this.editdata.primary_url;
    this.obj.secondary_url=this.editdata.secondary_url;
    this.obj.Approval=this.editdata.approval;
    this.obj.Authority=this.editdata.authority;
    this.obj.status=this.editdata.status;
    this.obj.remarks=this.editdata.remarks;
  }

  getErrorMsgs(ctrl: any) {
    switch (ctrl) {
      case 'obj.documentName':
        this.errormessage.documentNameerror = this.obj.document_name == '' ? "Document name is required" : '';
        break;
      case 'obj.primaryUrl':
        this.errormessage.primaryUrlerror = this.obj.primary_url == '' ? "primary url is required" : '';
        break;
    }
  }


  status = [
    { name: 'Active', id: 1 },
    { name: 'Disactive', id: 2}
    
  ];
  


  save(){
    this.ds.sendstudent(this.obj).subscribe(response=>{
      console.log('Form data submitted successfully:', response);
    });
    this.clear();
  }
  clear(){
    this.obj = JSON.parse(this.emptyObj);
  }

  grideview(){
    this.router.navigate(['/doc']);
  }
}
