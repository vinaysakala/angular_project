import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-treeselect',
  templateUrl: './treeselect.component.html',
  styleUrls: ['./treeselect.component.css']
})
export class TreeselectComponent implements OnInit{
  nodesarry:any=[];
  selectedNodes:any
  obj:any={};
  
  ngOnInit(): void {
    
  }
  nodes = [
    {
      parent_id:'1',
      label: 'Node 1',
      data:'c',
      children: [
        {
          child_id:'1',
          label: 'Node 1.1',
          children: [
            { subchild_id:'1',label: 'Node 1.1.1',data:'c++' },
            { subchild_id:'2',label: 'Node 1.1.2' ,data:'c#'}
          ]
        },
        {child_id:'2', label: 'Node 1.2',data:'python' }
      ]
    },
    {
      parent_id:'2',
      label: 'Node 2',
      data:'javascript',
      children: [
        {child_id:'1', label: 'Node 2.1',data:'html' },
        { child_id:'2',label: 'Node 2.2' ,data:'css'}
      ]
    }
  ];


  

  save(){
    
   
    console.log('selected_id :',this.selectedNodes.id)
    
    if(this.selectedNodes.parent){
      console.log('parent_id :',this.selectedNodes.parent.id)
      // this.selectedNodes.push(this.selectedNodes.parent.id)
    }
  }
  
  
}
