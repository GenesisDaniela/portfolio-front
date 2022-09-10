import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  URL = "http://127.0.0.1:5000/"
  // URL = "https://portfoliogv.herokuapp.com/api/"
  constructor(private http:HttpClient) { }

  getUser(idUser:number): Observable<any>{
    return this.http.get<any>(this.URL+"users/"+idUser)
  }

  getUserProjects(idUser:number): Observable<any>{
    return this.http.get<any>(this.URL+"projects/"+idUser+"/project")
  }

  getUserSkills(idUser:number): Observable<any>{
    return this.http.get<any>(this.URL+"skills/"+idUser+"/skill")
  }

}
