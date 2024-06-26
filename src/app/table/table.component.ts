import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { SortEvent } from 'primeng/api';
import { HttpClient } from '@angular/common/http';
import * as _ from 'lodash'
import { StudentService } from '../student.service';
import { DocumentService } from '../document.service';
import { Router } from '@angular/router';


interface ColumnOptionsMapping {
  [key: string]: { label: string; value: string }[]; // Define the structure of options for each column
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  
  @Input() columns: any;
  @Input() data: any;
  editdata: any;
  dropdownoptions: any;
  dataAvailable: boolean = false;
 
  constructor(private http: HttpClient, private ss: StudentService, private ds: DocumentService, private router: Router) { }
  ngOnInit() {
    // this.data = localStorage.getItem('formData')
    // if (this.data) {
    //   this.data = JSON.parse(this.data);

    // this.data.forEach((m: { dob: string | number | Date; }) => {

    //   if (typeof m.dob === 'string') {
    //     m.dob = new Date(m.dob);
    //   }
    // });    
  }

  // isValidDate(value: any): boolean {
  //   // Check if the value is a Date instance or a valid date string
  //   if (value instanceof Date) {
  //     return !isNaN(value.getTime());
  //   } else if (typeof value === 'string' || typeof value === 'number') {
  //     const date = new Date(value);
  //     return !isNaN(date.getTime());
  //   }
  //   return false;
  // }

  isValidDate(value: any): boolean {
    return value instanceof Date && !isNaN(value.getTime());
  }

  // getdata(par_flag: string) {

  //   this.ss.getstudent(par_flag).subscribe(res => {
  //     this.data = res
  //     console.log(this.data)
  //     this.dataAvailable = true;
                                            
  //     // if (this.columns) {
  //     //   this.getfilterdata();
  //     // }

  //     _.forEach(this.columns, (col: any) => {
  //       // Convert date fields to Date objects
  //       if (col.datatype === 'date') {
  //         _.forEach(this.data, (row: any) => {
  //           row[col.field] = row[col.field] !== null ? new Date(row[col.field]) : null;
  //         });
  //       }

  //       // Initialize dropdown options for columns with filter dropdown enabled
  //       switch (col.filterdropdowm) {
  //         case 'single':
  //           // Extract unique values using Lodash
  //           col.matchMode = 'equals';
  //           col['uniqueValues'] = _.uniq(_.map(this.data, col.field)).sort();
  //           console.log('uniqueValues', col['uniqueValues'])
  //           break;
  //         case 'multiple':
  //           col.matchMode = ' ';
  //           col['uniqueValues'] = _.uniq(_.map(this.data, col.field)).sort();
  //           console.log('uniqueValues', col['uniqueValues'])
  //           break;


  //         // Map the unique values to options with label and value
  //         // this.columnOptionsMapping[col.field] = _.map(uniqueValues, (value) => ({
  //         //   label: value as string,
  //         //   value: value as string
  //         // }));

  //         // console.log(this.columnOptionsMapping[col.field]);
  //       }
  //     });


  //   })
  // }


  // ngOnChanges(changes: SimpleChanges) {
  //   if (changes['columns']) {
  //     console.log('Columns changed:', this.columns);
  //   }
  //   if (this.columns) {
  //     console.log(this.columns);
  //     console.log(this.columns.length);
  //     for (let i = 0; i <= 5; i++) {
  //       if (this.columns[i].datatype === 'date') {
  //         this.data.forEach((row: any) => {
  //           row[this.columns[i].field] = row[this.columns[i].field] !== null ? new Date(row[this.columns[i].field]) : null;
  //         });
  //       }
  //     }
  //   } else {
  //     console.log('Columns is undefined or not initialized yet');
  //   }
  //   _.forEach(this.columns,(col:any)=>{
  //     if(col.filterdropdowm){
  //       this.dropdownoptions=_.uniq(_.map(this.data,col.field)).sort()
  //     }
  //     console.log(this.dropdownoptions)
  //   })

  // }
  // ngOnChanges(changes: SimpleChanges) {
  //   if (changes['columns']) {
  //     // Check if data is available before calling getfilterdata()
  //     if (this.dataAvailable) {
  //       this.getfilterdata();
  //     }
  //   }
  // }


  // onedit(par_flag:string,par_sno:number){
  //   this.router.navigate(['/form2'])

  //   this.ds.editstudent(par_flag,par_sno).subscribe(res => {
  //    this.editdata=res[0].json_build_object.student[0];
  //   });  
  // }
  onedit(par_flag: string, par_sno: number) {
    this.router.navigate(['/form2'], { queryParams: { sno: par_sno } });

  }


  edit(par_name: string) {
    this.router.navigate(['/form1'], { queryParams: { name: par_name } });
  }


  getfilterdata() {
    // if (changes['columns']) {
    //   console.log('Columns changed:', this.columns);
    // }

    if (this.columns && this.columns.length > 0) {
      console.log('Columns:', this.columns);

      // this.columnOptionsMapping = {};
      // Iterate through each column
      _.forEach(this.columns, (col: any) => {
        // Convert date fields to Date objects
        if (col.datatype === 'date') {
          _.forEach(this.data, (row: any) => {
            row[col.field] = row[col.field] !== null ? new Date(row[col.field]) : null;
          });
        }

        // Initialize dropdown options for columns with filter dropdown enabled
        switch (col.filterdropdowm) {
          case 'single':
            // Extract unique values using Lodash
            col.matchMode = 'equals';
            col['uniqueValues'] = _.uniq(_.map(this.data, col.field)).sort();
            console.log('uniqueValues', col['uniqueValues'])
            break;
          case 'multiple':
            col.matchMode = ' ';
            col['uniqueValues'] = _.uniq(_.map(this.data, col.field)).sort();
            console.log('uniqueValues', col['uniqueValues'])
            break;


          // Map the unique values to options with label and value
          // this.columnOptionsMapping[col.field] = _.map(uniqueValues, (value) => ({
          //   label: value as string,
          //   value: value as string
          // }));

          // console.log(this.columnOptionsMapping[col.field]);
        }
      });
    } else {
      console.log('Columns is undefined or not initialized yet');
    }
  }





  //   isValidDate(value: any): boolean {
  //     if (value instanceof Date) {
  //         return true;
  //     }
  //     if (typeof value === 'string' || typeof value === 'number') {
  //         const date = new Date(value);
  //         return !isNaN(date.getTime());
  //     }
  //     return false;
  // }

  // // Function to identify date columns
  // identifyDateColumns(data: any[]): string[] {
  //     const dateColumns: string[] = [];

  //     // Check each column in the data
  //     const sampleItem = data[0]; // Use the first item as a sample
  //     if (sampleItem) {
  //         Object.keys(sampleItem).forEach(key => {
  //             // Check if the column contains valid date values
  //             const isDateColumn = data.every(item => this.isValidDate(item[key]));
  //             if (isDateColumn) {
  //                 dateColumns.push(key);
  //             }
  //         });
  //     }

  //     return dateColumns;
  // }

  // ngOnInit() {
  //     const formData = localStorage.getItem('formData');
  //     if (formData) {
  //         this.data = JSON.parse(formData);

  //         // Identify date columns
  //         const dateColumns = this.identifyDateColumns(this.data);

  //         // Convert date strings in identified date columns to Date objects
  //         this.data.forEach((item: { [x: string]: string | number | Date; }) => {
  //             dateColumns.forEach(dateColumn => {
  //                 if (item[dateColumn] && typeof item[dateColumn] === 'string') {
  //                     item[dateColumn] = new Date(item[dateColumn]);
  //                 }
  //             });
  //         });
  //     }
  // }
  filterCallback(value: any, filter: (event: any, mode: string) => void) {
    console.log("Value passed:", value);
    filter(value, 'equals');
  }
}
