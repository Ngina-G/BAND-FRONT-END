import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

 readonly APIUrl = "https://api-angie.herokuapp.com/notes/";
  httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})

  constructor(private http: HttpClient) { }

  getAllNotes(): Observable<any> {
    return this.http.get(this.APIUrl 
      , {headers: this.httpHeaders});
  }
  addNote(val:any){
    return this.http.post(this.APIUrl,val);
  }

  updateNote(val:any){
    return this.http.put(this.APIUrl,val);
  }

  deleteNote(val:any){
    return this.http.delete(this.APIUrl+val);
  }
}
