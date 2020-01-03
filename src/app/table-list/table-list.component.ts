import { Component, OnInit } from '@angular/core';
import { TestController3 } from '../models/testcontroller3.model';
import { TestControllerService } from '../services/testcontroller.service';
import { TestController2 } from '../models/testcontrolller2.model';
import { TestController1 } from '../models/testcontroller1.model';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css'],
  providers:[TestControllerService]
})
export class TableListComponent implements OnInit {

  testControllers3: TestController3[];
  testControllers1: TestController1[];
  testControllers2: TestController2[];
  constructor(private svc: TestControllerService) { }

  ngOnInit() {
    this.getControllers();
    this.getControllers1();
    this.getControllers2();
  }

  getControllers(){
    this.svc.getAllController3()
    .subscribe((result)=>{
      //console.log(result);
      this.testControllers3 = result;
      
    },
     error =>{
       console.log(error.message);
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
    if(confirm("Are you sure to delete?")) {
      this.svc.deleteTestController3(id);
       setTimeout(f=>{
         this.getControllers();
       },2200)
    }
  }

  deleteController2(id:number){
    if(confirm("Are you sure to delete?")) {
      this.svc.deleteTestController2(id);
       setTimeout(f=>{
         this.getControllers();
       },2200)
    }
  }
  deleteController1(id:number){
    if(confirm("Are you sure to delete?")) {
      this.svc.deleteTestController1(id);
       setTimeout(f=>{
         this.getControllers();
       },2200)
    }
  }

  onedit(id:number) {

  }

}
