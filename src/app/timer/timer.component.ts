import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {

timer:string="00:00";
seconds:number=0;
interval:any;


ngOnInit(): void {
  this.starttimer();
}
///for start the timer while page is reloading
starttimer(){
  this.interval=setInterval(()=>{
    this.seconds++;
    this.timer=this.getsecondsasdigitalclock(this.seconds);
    
  },1000);
}
getsecondsasdigitalclock(inputSeconds:number){
let minutes:number=Math.floor(inputSeconds/60);
let seconds:number=inputSeconds-minutes*60;
let minstr:string=this.panumber(minutes);
let secstr:string=this.panumber(seconds);
return `${minstr}:${secstr}`;
}
panumber(num:number){
 return (num<10?'0':'')+num;
}



////convert base64 url to file object
base64String: string = '';
  fileObject: File | null = null;

  constructor() {}

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = this.handleReaderLoaded.bind(this);
      reader.readAsDataURL(file);
    }
  }

  handleReaderLoaded(e: any) {
    this.base64String = e.target.result;
    console.log('Base64 String:', this.base64String);
    this.fileObject = this.base64ToFile(this.base64String, 'uploaded_image.png');
    console.log('File Object:', this.fileObject);
  }

  base64ToFile(base64: string, filename: string): File {
    // Decode the Base64 string
    const binaryString = window.atob(base64.split(',')[1]);
    const len = binaryString.length;
    const bytes = new Uint8Array(len);

    for (let i = 0; i < len; i++) {
      bytes[i] = binaryString.charCodeAt(i);
    }

    // Create a Blob from the bytes
    const blob = new Blob([bytes], { type: 'image/png' }); // Update MIME type if necessary

    // Convert the Blob to a File
    const file = new File([blob], filename, { type: 'image/png' }); // Update MIME type if necessary
     console.log(file)
    return file;
  }
}
