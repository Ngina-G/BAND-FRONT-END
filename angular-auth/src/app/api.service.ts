import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

 readonly APIUrl = "http://127.0.0.1:8000/notes/";
 readonly deleteUrl = "http://127.0.0.1:8000/deleteNote/";
 readonly updateUrl = "http://127.0.0.1:8000/updateNote/"
 readonly profileUrl = "http://127.0.0.1:8000/api/profile/";
 readonly updateProfileUrl = "http://127.0.0.1:8000/updateProfile/";



  httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})

  constructor(private http: HttpClient) { }

  getAllNotes(): Observable<any> {
    return this.http.get(this.APIUrl 
      , {headers: this.httpHeaders});
  }
  addNote(val:any){
    return this.http.post(this.APIUrl,val);
  }

  updateNote(NoteId,val):Observable<any> {
    return this.http.put(`${this.updateUrl}${NoteId}/`,val);
  }

  deleteNote(val:any){
    return this.http.delete(this.deleteUrl+val);
  }

  getProfile(id): Observable<any> {
    return this.http.get(`${this.profileUrl}${id}/` 
      , {headers: this.httpHeaders});
  }
  updateProfile(id,val): Observable<any> {
    return this.http.put(`${this.updateProfileUrl}${id}/`,val, {headers: this.httpHeaders});
  }
}
