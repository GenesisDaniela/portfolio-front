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
    this.user={
      "first_name":"Génesis Daniela",
      "last_name":"Vargas Jauregui",
      "myself_info":"Genesis is a student in her last semesters of systems engineering, she is 20 years old and has knowledge in web development using technologies such as springboot, Flask, angular, node.js and scrum as agile development methodology. She also has good soft skills that allow her to facilitate communication and solve problems with her team, also has knowledge in good coding practices and clean architecture.",
      "role":"Backend Developer, Frontend Developer",
      "phone":"3313123",
      "linkedin_url":"https://www.linkedin.com/in/genesis-vargas-9a3b12230/",
      "email":"genesisdvargas4@gmail.com"
    }

    this.skills = [{
      "name_skill":"Java",
      "icon":"https://bugdeveloper.tech/wp-content/uploads/2019/06/java.jpg",
      "technology":"Backend"
    },{
      "name_skill":"Spring boot",
      "icon":"https://www.armadilloamarillo.com/wp-content/uploads/course-image.png",
      "technology":"Backend"
    },
    {
      "name_skill":"Python",
      "icon":"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png",
      "technology":"Backend"
    },
    {
      "name_skill":"Flask",
      "icon":"https://damiandeluca.com.ar/wp-content/uploads/2020/05/flask.jpg",
      "technology":"Backend"
    },
    
  ]
    // this.getUserByID()
    // this.getProjects()
    
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
    
  }

}
