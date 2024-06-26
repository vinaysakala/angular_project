import { Component, inject } from '@angular/core';
import { ThapaswiService } from '../thapaswi.service';

@Component({
  selector: 'app-newmodule',
  templateUrl: './newmodule.component.html',
  styleUrls: ['./newmodule.component.css']
})
export class NewmoduleComponent {


  private service = inject(ThapaswiService);

  
public  birthday = new Date(1987, 6, 18);
  public obj: any = {
    module_id:0,
    module_name: '',
    module_desc: '',
    status: 'A',
    sub_module: [{
      submodule_id:0,
      submodule_name: '',
      submodule_description: ''
    }]      
  }
  public status: any = [
    { id: 'A', name: 'Active' },
    { id: 'I', name: 'Inactive' }
  ];

  ngOnInit(){
    var data =this.service.getData();
    console.log('data',data)
  }
  
  addSubModule() {
    this.obj.sub_module.push({submodule_id:0, submodule_name: '', submodule_description: '' });
  }


  deleteSubModule(index: number) {
    if (this.obj.sub_module.length > 1) {
      this.obj.sub_module.splice(index, 1);
    }
  }
  onsave() { 
    console.log(this.obj)
    // this.clear();
  }
   clear(){
    this.obj.module_name='';
    this.obj.module_desc='';
    this.obj.status='A';
    
   }
  

}
