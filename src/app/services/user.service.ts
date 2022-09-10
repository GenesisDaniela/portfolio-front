import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  URL = ""
  constructor(private http:HttpClient) { }

  getUser(idUser:number): Observable<any>{
    return this.http.get<any>(this.URL+"user/"+idUser)
  }

  getUserProjects(idUser:number): Observable<any>{
    return this.http.get<any>(this.URL+"user/"+idUser+"/projects")
  }

  getUserSkills(idUser:number): Observable<any>{
    return this.http.get<any>(this.URL+"user/"+idUser+"/skills")
  }

}
