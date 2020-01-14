import { Component, OnInit } from '@angular/core';
import { TestScript } from '../models/testscript.model';
import { TestScriptsService } from '../services/testscripts.service';
import { Router } from '@angular/router';
import { ConfirmationDialogService } from '../confirmation-dialog/confirmation-dialog/confirmation-dialog.service';

@Component({
  selector: 'app-testscripts',
  templateUrl: './testscripts.component.html',
  styleUrls: ['./testscripts.component.scss'],
  providers:[TestScriptsService,ConfirmationDialogService]
})
export class TestscriptsComponent implements OnInit {

  testscripts: TestScript[];
  cols:any[];
  loading:boolean = true;
  selectedTestScriptsCols: any[];
  testScriptsCols:any[];
  cities1:any[];
  constructor(private service: TestScriptsService,private router:Router,private confirmationDialogService: ConfirmationDialogService) { }

  ngOnInit() {
    this.loading=true;
    this.getTestScripts();
    this.cols = [
      { label: 'Test CaseID', value: { field: 'testCaseID', header: 'Test CaseID' } },
      { label: 'TC_StepID', value: { field: 'tc_stepID', header: 'TC_StepID' } },
      { label: 'TestScript Name', value: { field: 'testScriptName', header: 'TestScript Name' } },
      { label: 'Function Description', value: { field: 'functionDescription', header: 'Function Description' }},
      { label: 'Function Name', value: { field: 'functionName', header: 'Function Name' } },
      { label: 'Execute', value: { field: 'execute', header: 'Execute' } },
      { label: 'Param1', value: { field: 'param1', header: 'Param1' } },
      { label: 'Param2', value: { field: 'param2', header: 'Param2' } },
      { label: 'Param3', value: { field: 'param3', header: 'Param3' } },
      { label: 'Param4', value: { field: 'param4', header: 'Param4' } },
      { label: 'Feature Name', value: { field: 'featureName', header: 'Feature Name' } },
      { label: 'Actions', value: { field: 'actions', header: 'Actions' } }
    ];

    this.LoadTestScriptsCols();
  }

  getTestScripts(){
    this.service.getTestScripts()
    .subscribe((result)=>{
      //console.log(result);
      this.testscripts = result;
      this.loading =false;
      
    },
     error =>{
       console.log(error.message);
     },
     ()=>{
       //console.log(this.testControllers3);
     })
  }

  deleteScript(id:number){
    if(confirm("Are you sure to delete?")) {
      this.service.deleteTestScript(id);
       setTimeout(f=>{
         this.getTestScripts();
       },2200)
    }
  }

  onRowEditInit(id:number){
    this.router.navigate(['/testscripts/edit', id]);
  }
  LoadTestScriptsCols(){
    this.selectedTestScriptsCols = [];
    this.cols.forEach(col => {
      this.selectedTestScriptsCols.push(col.value);
    });
  }
  deleteTestScript(id:number){
    if(this.confirmationDialogService.confirm('Are you sure you want to delete?')) {
      this.service.deleteTestScript(id);
       setTimeout(f=>{
         this.getTestScripts();
       },2200)
    }
  }
  onRowEditTestScripts(id:number){
    this.router.navigate(['/table-list/testcontroller1/edit', id]);
  }

}
