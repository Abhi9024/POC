import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Keywords } from '../models/keyword.model';
import { KeywordService } from '../services/keyword.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-keywords',
  templateUrl: './keywords.component.html',
  styleUrls: ['./keywords.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class KeywordsComponent implements OnInit {

  keywords: Keywords[];
  cols:any[];
  constructor(private service: KeywordService,private router:Router) { }

  ngOnInit() {
    this.getKeywords();
    this.cols=[
      { field: 'functionName', header: 'Function Name' },
      { field: 'stepDescription', header: 'Step Description' },
      { field: 'actionOrKeyword', header: 'Action/Keyword' },
      { field: 'objectLogicalName', header: 'Object LogicalName' },
      { field: 'execute', header: 'Execute' },
      { field: 'param1', header: 'Param1' },
      { field: 'param2', header: 'Param2' },
      { field: 'param3', header: 'Param3' },
      { field: 'param4', header: 'Param4' },
      { field: 'featureName', header: 'Feature Name' },
      { field: 'actions', header: 'Actions' }
  ];
  }

  getKeywords(){
    this.service.getKeywords()
    .subscribe((result)=>{
      //console.log(result);
      this.keywords = result;
      
    },
     error =>{
       console.log(error.message);
     },
     ()=>{
       //console.log(this.testControllers3);
     })
  }

  deleteKeyword(id:number){
    if(confirm("Are you sure to delete?")) {
      this.service.deleteKeyword(id);
       setTimeout(f=>{
         this.getKeywords();
       },2200)
    }
  }
  onRowEditInit(id:number){
    this.router.navigate(['/keywords/edit', id]);
  }
}
