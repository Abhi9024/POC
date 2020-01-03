import { Component, OnInit } from '@angular/core';
import { TestScript } from '../models/testscript.model';
import { TestScriptsService } from '../services/testscripts.service';

@Component({
  selector: 'app-testscripts',
  templateUrl: './testscripts.component.html',
  styleUrls: ['./testscripts.component.scss'],
  providers:[TestScriptsService]
})
export class TestscriptsComponent implements OnInit {

  testscripts: TestScript[];
  constructor(private service: TestScriptsService) { }

  ngOnInit() {
    this.getTestScripts();
  }

  getTestScripts(){
    this.service.getTestScripts()
    .subscribe((result)=>{
      //console.log(result);
      this.testscripts = result;
      
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

}
