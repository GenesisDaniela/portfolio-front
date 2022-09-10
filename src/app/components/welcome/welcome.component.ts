import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  idUser = 1
  user!:any
  projects:any = []
  skills:any =[]
  education:any = []

  constructor(private userService:UserService) { }

  ngOnInit(): void {

    this.getUserByID()
    this.getProjects()
    this.getSkills()
  }

  getUserByID(){
    this.userService.getUser(this.idUser).subscribe(user=>{
      this.user=user
    })
  }

  getProjects(){
    this.userService.getUserProjects(this.idUser).subscribe(projects=>{
      this.projects = projects
    })
  }

  getSkills(){
    this.userService.getUserSkills(this.idUser).subscribe(skills=>{
      this.skills = skills
      console.log(skills)
    })
  }

}
