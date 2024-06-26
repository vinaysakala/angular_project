import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
interface City {
  name: string,
  code: string
}

@Component({
  selector: 'app-lookup',
  templateUrl: './lookup.component.html',
  styleUrls: ['./lookup.component.css']
})
export class LookupComponent implements OnInit{
  inputModel:any;
  @Input() disabled:any;
  @Output() inputModelChange: EventEmitter<string> = new EventEmitter<string>();
  value:any;
  visible: boolean = false;
  data:any=[];
 

    showDialog() {
        this.visible = true;
    }

    selectItem(name: string) {
      this.inputModel =  name; // Modify as needed
      this.visible = false; // Close the dialog
      this.inputModelChange.emit(this.inputModel); // Emit the selected name
    }


    columns: any;
    cities!: City[];

    selectedCity!: City;
    
   constructor(private http: HttpClient) {}
    
    ngOnInit() {
      this.data=localStorage.getItem('formData')
      if (this.data) {
        this.data = JSON.parse(this.data);
      }
     

        this.cities = [
            { name: 'New York', code: 'NY' },
            { name: 'Rome', code: 'RM' },
            { name: 'London', code: 'LDN' },
            { name: 'Istanbul', code: 'IST' },
            { name: 'Paris', code: 'PRS' },
            { name:'Mumbai',code:'MI' },
            {name:'Hyderabad',code:'HYD'} 
        ];


        this.http.get<any>('/assets/data.json').subscribe(response => {
          this.columns = response.columns;
          
        });

       
    }


   

    

    selectedCity1!: City;
    
    cities1: any[] = ['New York', 'Rome', 'London', 'Istanbul', 'Paris', 'Mumbai', 'Hyderabad', 'San Diego','india'];
    filteredCities: string[] = [];
    searchTerm: string = '';
  
    filterCities() {
      this.filteredCities = this.cities1.filter(city =>
        city.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }

    cities2: any[] = ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix', 'Philadelphia', 'San Antonio', 'San Diego','india'];
    filteredCities1: string[] = [];
    searchTerm1: string = '';
    filterCities1() {
      this.filteredCities1 = this.cities2.filter(city =>
        city.toLowerCase().includes(this.searchTerm1.toLowerCase())
      );
    }


    save(){
      this.inputModelChange.emit(this.inputModel)
    }


    Onupdate(){

    }
    view(){
      
    }

    
}
