import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.css']
})
export class FormComponent {
    // username: any ='';
    // lastname: any ='';
    obj: any = {
        username: '',
        lastname: '',
        calender:'',
        clarange:'',
        citydrop:'',
        flodrop:'',
        selectedCities:''

    }
    emptyObj = JSON.stringify(this.obj);

    errorMessage = {
        firstNameerror: '',
        lastNameerror: '',
        calendererror:'',
        dropdownerror:'',
        dropdownfloerror:'',
        multiselecterror:''
    }


    cities = [
        {name: 'New York', code: 'NY'},
        {name: 'Rome', code: 'RM'},
        {name: 'London', code: 'LDN'},
        {name: 'Istanbul', code: 'IST'},
        {name: 'Paris', code: 'PRS'},
        
    ];


    flower = [
        {name: 'rose', id: 'rs'},
        {name: 'lilly', id: 'ly'},
        {name: 'jasmine', id: 'js'},
        {name: 'lotus', id: 'lo'},
        {name: 'Sun Flower', id: 'sf'}
    ];

    groupedColumnTable = [
        {
          groupName: "Group 1",
          columns: ["Column A", "Column B", "Column C"]
        },
        {
          groupName: "Group 2",
          columns: ["Column X", "Column Y", "Column Z"]
        }
      ];


    
    emptyerror=JSON.stringify(this.errorMessage)

    getErrorMsgs(ctrl: any) {

        ctrl = ctrl
        switch (ctrl) {
            case 'obj.username':
                this.errorMessage.firstNameerror = this.obj.username == '' ? "Firstname is required" : '';
                break;
            case 'obj.lastname':
                this.errorMessage.lastNameerror = this.obj.lastname == '' && this.obj.username !== '' ? "lastname is required" : '';
                break;
            case 'obj.calender':
                this.errorMessage.calendererror=this.obj.calender=='' || this.obj.calender == null?"date must select":'';
                break;
            case 'obj.citydrop':
                 this.errorMessage.dropdownerror=this.obj.citydrop=='' || this.obj.citydrop== null?'select the city':'';
                 break;
            case 'obj.selectedCities':
                this.errorMessage.multiselecterror=this.obj.selectedCities==''|| this.obj.selectedCities== null|| this.obj.selectedCities.length==0?'select atleast one city':'';
                break;
            case 'obj.flodrop':
                this.errorMessage.dropdownfloerror=this.obj.flodrop==''|| this.obj.flodrop== null|| this.obj.flodrop.length==0?'select a flower':'';
                 break;
        }

    }

    // clearErrorMessages() {
    //     if(this.obj.username !== ''){
    //         this.errorMessage.firstNameerror = '';
    //     }else  if(this.obj.lastname !== ''  || this.obj.username == ''){

    //         this.errorMessage.lastNameerror = '';
    //     }
    // }

    clearvalidation() {
        // this.errorMessage.firstNameerror='';
        // this.errorMessage.lastNameerror='';
        // this.obj.username='';  
        // this.obj.lastname='';
       
        this.obj = JSON.parse(this.emptyObj);
        console.log('2',this.obj)
        this.errorMessage=JSON.parse(this.emptyerror);

    }

    visible: boolean = false;
    showValidation: boolean = false;

    showDialog() {
        this.visible = true;
    }

    saveData() {

    }

}
