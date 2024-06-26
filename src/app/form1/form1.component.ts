import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MessageService } from 'primeng/api';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { StudentService } from '../student.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.css']
})
export class Form1Component implements OnInit {
  data: any = [];
  showview: boolean = false;
  inputdisabled: boolean = false;
  columns: any;
  backgrid = true;
  showform=true;
  name:any;
  editdata: any;
  

  test(){
    this.router.navigate(['/grid']);
  }

  obj = {
    
    name: '',
    date: '  ',
    mobileno: '',
    emailid: '',
    gender: 'M',
    martialstatus: 'single',
   
  }



  errorMessage = {
    nameerror: '',
    doberror: '',
    mobilenoerror: '',
    emailiderror: '',
    gendererror: '',
    multiselecterror: '',
    martialstatuserror: '',
    imgurlserror: ''
  }




  emptyObj = JSON.stringify(this.obj);
  emptyerror = JSON.stringify(this.errorMessage)


  ngOnInit(): void {
    this.getData()
    this.http.get<any>('/assets/data.json').subscribe(response => {
      this.columns = response.column;

    });
    this.route.queryParams.subscribe(params => {
      this.name = params['name'];
      console.log('Sno from URL:', this.name); // Access sno parameter from URL
    });
  
    this.ss.editstudent('e', this.name).subscribe(
      (res) => {
        this.editdata = res[0].json_build_object.student[0];
        this.edit(); // Call the edit method after editdata is assigned
      }
    );
  }

  edit(){
    this.obj.name=this.editdata.name;
    this.obj.date=this.editdata.dob;
    this.obj.emailid=this.editdata.emailid;
    this.obj.mobileno=this.editdata.mobileno;
    this.obj.gender=this.editdata.gender;
    this.obj.martialstatus=this.editdata.martialstatus;
  }


  getData() {
    this.data = localStorage.getItem('formData')
    if (this.data) {
      this.data = JSON.parse(this.data);
    }
  }

  getErrorMsgs(ctrl: any) {


    ctrl = ctrl
    switch (ctrl) {
      case 'obj.name':
        this.errorMessage.nameerror = this.obj.name == '' ? "Name is required" : '';
        break;
      case 'obj.dob':
        this.errorMessage.doberror = this.obj.date == '' || this.obj.date == null ? "DOB is required" : '';
        break;
      case 'obj.mobileno':
        this.errorMessage.mobilenoerror = this.obj.mobileno == '' ? "mobile number is required" : '';
        break;
      case 'obj.emailid':
        if (this.obj.emailid == '') {
          this.errorMessage.emailiderror = 'Email ID is required';
        } else if (!this.validateEmail(this.obj.emailid)) {
          this.errorMessage.emailiderror = 'Invalid email format';
        } else {
          this.errorMessage.emailiderror = '';
        }
        break;
      case 'obj.martialstatus':
        this.errorMessage.martialstatuserror = this.obj.martialstatus == '' ? 'martial status is required' : '';
        break;
      case 'obj.gender':
        this.errorMessage.gendererror = this.obj.gender == '' || this.obj.gender == null ? 'select your gender' : '';
        break;
      // case 'obj.multiplecities':
      //   this.errorMessage.multiselecterror = this.obj.multiplecities == '' || this.obj.multiplecities == null ? 'select atleast one city' : '';
      //   break;
      // case 'obj.imgurls':
      //   this.errorMessage.imgurlserror = this.obj.imgurls == '' ? 'image has to be upload' : '';
      //   break;

    }
  }

  validateEmail(email: string): boolean {
    // Regular expression for email validation
    const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i;
    return emailPattern.test(email);
  }


  Gender = [
    { name: 'Male', id: 'M' },
    { name: 'Female', id: 'F' },
    { name: 'Others', id: 'o' },
  ];
  urls: any;
  showDialog: boolean = false;
  visible: boolean = false;
  src: any;
  iconview: any = false;
  uploadvivew: any = true;
  indexdata: any;

  constructor(private messageService: MessageService,private route:ActivatedRoute, private sanitizer: DomSanitizer, private http: HttpClient, private router: Router,private ss:StudentService) { }

  onShowDialog() {
    this.visible = true;
  }



  // onSelect(event: any) {
  //   if (event.currentFiles.length > 0) {
  //     this.uploadFile(event.currentFiles[0]);
  //   }

  //   this.messageService.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded with Basic Mode' });
  //   this.iconview = true;
  //   this.uploadvivew = false;

  // }

  // uploadFile(files: File): void {
  //   let reader = new FileReader();
  //   reader.onload = (e: any) => {
  //     console.log(e)
  //     let base64 = e.target.result;// base 64 format
  //     this.urls = base64;
  //     this.obj.imgurls = base64;

  //   };
  //   reader.readAsDataURL(files);

  // }

  // Onsave(){

  //   if (this.indexdata !== undefined) {

  //     this.data[this.indexdata] = { ...this.obj };

  //   } else {

  //     this.data.push({ ...this.obj });
  //   }
  //   this.saveToLocalStorage()
  //   this.clearvalidation();

  // }

  Onsave() {
    // Check if any field is empty
    const isEmpty = Object.values(this.obj).some(value => value === '');
    console.log(Object.values(this.obj))
    if (isEmpty) {
      // If any field is empty, show validation errors
      Object.keys(this.obj).forEach(key => {
        this.getErrorMsgs('obj.' + key);
      });
      console.log(Object.keys(this.obj))
      return; // Stop further execution
    }

    // If all fields are filled, proceed with saving
    if (this.indexdata !== undefined) {
      this.data[this.indexdata] = { ...this.obj };
    } else {
      
      this.ss.sendstudent(this.obj).subscribe(response=>{
        console.log('Form data submitted successfully:', response);
      },
      error => {
        console.error('Error submitting form data:', error);
      });


    }
    this.saveToLocalStorage();
    this.clearvalidation();
    this.getData();
    console.log(this.data)
  }


  saveToLocalStorage() {
    localStorage.setItem('formData', JSON.stringify(this.data));
  }


  clearvalidation() {
    this.obj = JSON.parse(this.emptyObj);
    this.errorMessage = JSON.parse(this.emptyerror);
  }


  view(data: any, i: any) {
    this.showview = true;
    this.inputdisabled = true;
    this.obj.name = data[i].name;
    this.obj.date = data[i].dob;
    this.obj.mobileno = data[i].mobileno;
    this.obj.emailid = data[i].emailid;
    this.obj.gender = data[i].gender;
    // this.obj.multiplecities = data[i].multiplecities
    this.obj.martialstatus = data[i].martialstatus
  }


  Onupdate(data: any, i: any) {
    this.inputdisabled = false;

    this.indexdata = i;
    this.obj.name = data[i].name
    this.obj.date = data[i].dob;
    this.obj.mobileno = data[i].mobileno;
    this.obj.emailid = data[i].emailid;
    this.obj.gender = data[i].gender;
    // this.obj.multiplecities = data[i].multiplecities
    this.obj.martialstatus = data[i].martialstatus
  }


}
