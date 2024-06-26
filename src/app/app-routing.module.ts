import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { Form1Component } from './form1/form1.component';
import { DatalookupComponent } from './datalookup/datalookup.component';
import { TableComponent } from './table/table.component';
import { GridcomponentComponent } from './gridcomponent/gridcomponent.component';
import { SequenceComponent } from './sequence/sequence.component';
import { Form2Component } from './form2/form2.component';
import { GriddocumentComponent } from './griddocument/griddocument.component';
import { GetdatafromgridComponent } from './getdatafromgrid/getdatafromgrid.component';
import { NewmoduleComponent } from './newmodule/newmodule.component';
import { ChartComponent } from './chart/chart.component';
import { GroupcoloumntableComponent } from './groupcoloumntable/groupcoloumntable.component';
import { DisplaygroupcoloumtableComponent } from './displaygroupcoloumtable/displaygroupcoloumtable.component';
import { TimerComponent } from './timer/timer.component';

const routes: Routes = [
  {path:'',redirectTo:'mod',pathMatch:'full'},
  {path:'form',component:FormComponent},
  {path:'form1',component:Form1Component},
  {path:'datalookup',component:DatalookupComponent},
  {path:'table',component:TableComponent},
  {path:'grid',component:GridcomponentComponent},
  {path:'seq',component:SequenceComponent},
  {path:'form2',component:Form2Component},
  {path:'doc',component:GriddocumentComponent},
  {path:'d',component:GetdatafromgridComponent},
  {path:'mod',component:NewmoduleComponent},
  {path:'c',component:ChartComponent},
  {path:'g',component:GroupcoloumntableComponent},
  {path:'gc',component:DisplaygroupcoloumtableComponent},
  {path:'t',component:TimerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
 
}
