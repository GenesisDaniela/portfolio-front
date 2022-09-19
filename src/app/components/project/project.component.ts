import { UserService } from 'src/app/services/user.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  id: string | null;
  project: any;
  constructor(
    private aRouter: ActivatedRoute,
    private uservice: UserService) {
   this.id = aRouter.snapshot.paramMap.get('idProject');
   this.loadProject()
   }

   loadProject(){
    this.uservice.getProject(Number(this.id)).subscribe(project =>{
      this.project = project
      console.log(this.project)
    })
   }
  ngOnInit(): void {
  }

}
