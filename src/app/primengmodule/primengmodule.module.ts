import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { CascadeSelectModule } from 'primeng/cascadeselect';
import { CheckboxModule } from 'primeng/checkbox';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputNumberModule } from 'primeng/inputnumber';
import { DialogModule } from 'primeng/dialog';
import { PasswordModule } from 'primeng/password';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MultiSelectModule } from 'primeng/multiselect';
import { ListboxModule } from 'primeng/listbox';
import { KeyFilterModule } from 'primeng/keyfilter';
import { MessagesModule } from 'primeng/messages';
import { TooltipModule } from 'primeng/tooltip';
import { FileUploadModule } from 'primeng/fileupload';
import {RadioButtonModule} from 'primeng/radiobutton';
import { TableModule } from 'primeng/table';
import { CardModule } from 'primeng/card';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { PanelModule } from 'primeng/panel';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { SelectButtonModule } from 'primeng/selectbutton';
import { TreeSelectModule } from 'primeng/treeselect';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,AutoCompleteModule,CascadeSelectModule,CheckboxModule,CalendarModule,DropdownModule,InputTextModule,InputTextareaModule,InputNumberModule
    ,PasswordModule,DialogModule,BrowserAnimationsModule,MultiSelectModule,ListboxModule,KeyFilterModule,MessagesModule,TooltipModule,FileUploadModule
    ,RadioButtonModule,TableModule,CardModule,OverlayPanelModule,PanelModule,ScrollPanelModule,SelectButtonModule,TreeSelectModule
  ],exports:[
    AutoCompleteModule,CascadeSelectModule,CheckboxModule,CalendarModule,DropdownModule,InputTextModule,InputTextareaModule,InputNumberModule
    ,PasswordModule,DialogModule,BrowserAnimationsModule,MultiSelectModule,ListboxModule,KeyFilterModule,MessagesModule,TooltipModule,FileUploadModule
    ,RadioButtonModule,TableModule,CardModule,OverlayPanelModule,PanelModule,ScrollPanelModule,SelectButtonModule,TreeSelectModule
  ]
})
export class PrimengmoduleModule { }
