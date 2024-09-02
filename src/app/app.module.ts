import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimengmoduleModule } from './primengmodule/primengmodule.module';
import { CalenderComponent } from './calender/calender.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from './form/form.component';
import { Form1Component } from './form1/form1.component';
import { InputComponent } from './input/input.component';
import { DroupdownComponent } from './droupdown/droupdown.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { LookupComponent } from './lookup/lookup.component';
import { MiltiselectComponent } from './miltiselect/miltiselect.component';
import { NgControl } from '@angular/forms';
import { RangecalenderComponent } from './rangecalender/rangecalender.component';
import { ClanderpickerComponent } from './clanderpicker/clanderpicker.component';
import { MessageService } from 'primeng/api';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { DatalookupComponent } from './datalookup/datalookup.component';
import { TableComponent } from './table/table.component';
import { GridcomponentComponent } from './gridcomponent/gridcomponent.component';
import { SequenceComponent } from './sequence/sequence.component';
import { Form2Component } from './form2/form2.component';
import { PmultipleComponent } from './pmultiple/pmultiple.component';
import { GriddocumentComponent } from './griddocument/griddocument.component';
import { GetdatafromgridComponent } from './getdatafromgrid/getdatafromgrid.component';
import { DatePipe } from '@angular/common';
import { NewmoduleComponent } from './newmodule/newmodule.component';
import { ChartComponent } from './chart/chart.component';
import { TreeselectComponent } from './treeselect/treeselect.component';
import { TreeSelectModule } from 'primeng/treeselect';
import { GroupcoloumntableComponent } from './groupcoloumntable/groupcoloumntable.component';
import { DisplaygroupcoloumtableComponent } from './displaygroupcoloumtable/displaygroupcoloumtable.component';
import { MyNewDirectiveDirective } from './directive/my-new-directive.directive';
import { TimerComponent } from './timer/timer.component';
import { ThapaswiService } from './thapaswi.service';
import { CustompipePipe } from './custompipe.pipe';
import { Calendartimer12hrsComponent } from './calendartimer12hrs/calendartimer12hrs.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
   
  
    CalenderComponent,
    
    FormComponent,
         Form1Component,
         InputComponent,
         DroupdownComponent,
         CheckboxComponent,
         LookupComponent,
         MiltiselectComponent,
         RangecalenderComponent,
         ClanderpickerComponent,
         DatalookupComponent,
         TableComponent,
         GridcomponentComponent,
         SequenceComponent,
         Form2Component,
         PmultipleComponent,
         GriddocumentComponent,
         GetdatafromgridComponent,
         NewmoduleComponent,
         ChartComponent,
         TreeselectComponent,
         GroupcoloumntableComponent,
         DisplaygroupcoloumtableComponent,
         MyNewDirectiveDirective,
         TimerComponent,
         CustompipePipe,
         Calendartimer12hrsComponent,
         LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    PrimengmoduleModule,ReactiveFormsModule,BrowserAnimationsModule,DatePipe,TreeSelectModule
  ],
  providers: [MessageService,DatePipe,ThapaswiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
