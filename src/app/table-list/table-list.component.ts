import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { TestController3 } from '../models/testcontroller3.model';
import { TestControllerService } from '../services/testcontroller.service';
import { TestController2 } from '../models/testcontrolller2.model';
import { TestController1 } from '../models/testcontroller1.model';
import { Router } from '@angular/router';
import { ConfirmationDialogService } from '../confirmation-dialog/confirmation-dialog/confirmation-dialog.service';
import * as Chartist from 'chartist';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css'],
  providers:[TestControllerService,ConfirmationDialogService],
  encapsulation:ViewEncapsulation.None
})
export class TableListComponent implements OnInit {

  testControllers3: TestController3[];
  testControllers1: TestController1[];
  testControllers2: TestController2[];
  controller3Cols:any[];
  controller2Cols:any[];
  controller1Cols:any[];
  loading:boolean = true;

  // Cards
  

  constructor(private svc: TestControllerService,private router: Router,
    private confirmationDialogService: ConfirmationDialogService) { }

    public hexToRGB(hex, alpha) {
      var r = parseInt(hex.slice(1, 3), 16),
        g = parseInt(hex.slice(3, 5), 16),
        b = parseInt(hex.slice(5, 7), 16);
  
      if (alpha) {
        return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
      } else {
        return "rgb(" + r + ", " + g + ", " + b + ")";
      }
    }

  ngOnInit() {
    


    this.loading = false;
    this.getControllers();
    this.getControllers1();
    this.getControllers2();
    this.controller3Cols = [
      { field: 'vmid', header: 'VMID' },
      { field: 'browser', header: 'Browser' },
      { field: 'exec', header: 'Exec' },
      { field: 'actions', header: 'Actions' }
      ];

      this.controller1Cols = [
        { field: 'slno', header: 'SLNO' },
        { field: 'moduleID', header: 'Module ID' },
        { field: 'moduleSeqID', header: 'Module SeqID' },
        { field: 'machineID', header: 'Machine ID' },
        { field: 'machineSequenceID', header: 'Machine SequenceID' },
        { field: 'execute', header: 'Execute' },
        { field: 'actions', header: 'Actions' }
      ];

      this.controller2Cols = [
        { field: 'sno', header: 'SNO' },
        { field: 'featureID', header: 'Feature ID' },
        { field: 'testCaseID', header: 'TestCase ID' },
        { field: 'run', header: 'Run' },
        { field: 'iterations', header: 'Iterations' },
        { field: 'browsers', header: 'Browsers' },
        { field: 'sequenceID', header: 'Sequence ID' },
        { field: 'testType', header: 'Test Type' },
        { field: 'jira_ID', header: 'Jira ID' },
        { field: 'stepsCount', header: 'Steps Count' },
        { field: 'testScriptName', header: 'TestScript Name' },
        { field: 'testScriptDescription', header: 'TestScript Description' },
        { field: 'actions', header: 'Actions' }
      ];
      
 
     
    
  }



  getControllers(){
    this.svc.getAllController3()
    .subscribe((result)=>{
      //console.log(result);
      this.testControllers3 = result;
      this.loading = false;
      
      
    },
     error =>{
       //console.log(error.message);
       this.testControllers3 = [];
       let obj = new TestController3();
       obj.id = 1;
       obj.vmid="some id";
       obj.browser="chrome";
       obj.exec="yes";

       this.testControllers3.push(obj);
       this.testControllers3.push(obj);
       this.testControllers3.push(obj);
     },
     ()=>{
       //console.log(this.testControllers3);
     })
  }

  getControllers1(){
    this.svc.getAllController1()
    .subscribe((result)=>{
      console.log(result);
      this.testControllers1 = result;
      
    },
     error =>{
       console.log(error.message);
     },
     ()=>{
       console.log(this.testControllers1);
     })
  }
  getControllers2(){
    this.svc.getAllController2()
    .subscribe((result)=>{
      console.log(result);
      this.testControllers2 = result;
      
    },
     error =>{
       console.log(error.message);
     },
     ()=>{
       console.log(this.testControllers3);
     })
  }

  deleteController3(id:number){
    if(this.confirmationDialogService.confirm('Are you sure you want to delete?')) {
      this.svc.deleteTestController3(id);
       setTimeout(f=>{
         this.getControllers();
       },2200)
    }
  }

  deleteController2(id:number){
    if(this.confirmationDialogService.confirm('Are you sure you want to delete?')) {
      this.svc.deleteTestController2(id);
       setTimeout(f=>{
         this.getControllers();
       },2200)
    }
  }
  deleteController1(id:number){
    if(this.confirmationDialogService.confirm('Are you sure you want to delete?')) {
      this.svc.deleteTestController1(id);
       setTimeout(f=>{
         this.getControllers();
       },2200)
    }
  }

  onRowEditController2(id:number){
    this.router.navigate(['/table-list/testcontroller2/edit', id]);
  }
  onRowEditController1(id:number){
    this.router.navigate(['/table-list/testcontroller1/edit', id]);
  }
  onRowEditController3(id:number){
    this.router.navigate(['/table-list/testcontroller3/edit', id]);
  }

  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }

}
