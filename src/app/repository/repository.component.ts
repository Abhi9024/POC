import { Component, OnInit } from '@angular/core';
import { Repository } from '../models/repository.model';
import { RepositoryService } from '../services/repository.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.scss'],
  providers:[RepositoryService]
})
export class RepositoryComponent implements OnInit {
  repositories: Repository[];
  cols:any[];
  loading:boolean = true;
  selectedRepositoryCols:any[];
  constructor(private service: RepositoryService,private router:Router) { }
  ngOnInit() {
    this.loading = true;
    this.getRepositories();
    this.cols=[
      { label: 'Logical Name', value:{ field: 'logicalName', header: 'Logical Name' }},
      { label: 'Find Method', value:{ field: 'findMethod', header: 'Find Method' }},
      { label: 'XPathQuery', value:{ field: 'xpathQuery_PropertyName', header: 'XPathQuery' }},
      { label: 'Property Value', value:{ field: 'propertyValue', header: 'Property Value' }},
      { label: 'Tag Name', value:{ field: 'tagName', header: 'Tag Name' }},
      { label: 'Feature Name', value:{ field: 'featureName', header: 'Feature Name' }},
      { label: 'Actions', value:{ field: 'actions', header: 'Actions'}}
  ];
  this.LoadRepositoryCols();
  }

  getRepositories(){
    this.service.getRepositories()
    .subscribe((result)=>{
      //console.log(result);
      this.repositories = result;
      this.loading=false;
    },
     error =>{
       console.log(error.message);
     },
     ()=>{
       console.log(this.repositories);
     })
  }

  deleteRepository(id:number){
    if(confirm("Are you sure to delete?")) {
      this.service.deleteRepository(id);
       setTimeout(f=>{
         this.getRepositories();
       },2200)
    }
  }

  onRowEditInit(id:number){
    this.router.navigate(['/repository/edit', id]);
  }

  LoadRepositoryCols(){
    this.selectedRepositoryCols = [];
    this.cols.forEach(col => {
      this.selectedRepositoryCols.push(col.value);
    });
  }
}
