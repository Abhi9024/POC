import { Component, OnInit } from '@angular/core';
import { Keywords } from '../models/keyword.model';
import { KeywordService } from '../services/keyword.service';

@Component({
  selector: 'app-keywords',
  templateUrl: './keywords.component.html',
  styleUrls: ['./keywords.component.scss']
})
export class KeywordsComponent implements OnInit {

  keywords: Keywords[];
  constructor(private service: KeywordService) { }

  ngOnInit() {
    this.getKeywords();
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
}
