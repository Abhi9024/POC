import { Component, OnInit } from '@angular/core';
import { Repository } from '../models/repository.model';
import { RepositoryService } from '../services/repository.service';

@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.scss'],
  providers:[RepositoryService]
})
export class RepositoryComponent implements OnInit {
  repositories: Repository[];
  constructor(private service: RepositoryService) { }
  ngOnInit() {
    this.getRepositories();
  }

  getRepositories(){
    this.service.getRepositories()
    .subscribe((result)=>{
      //console.log(result);
      this.repositories = result;
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

}
