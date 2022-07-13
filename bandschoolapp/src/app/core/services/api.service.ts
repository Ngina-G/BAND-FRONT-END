import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  readonly APIUrl = " https://auth-doyo.herokuapp.com/notes/";
  readonly deleteUrl = " https://auth-doyo.herokuapp.com/deleteNote/";
  readonly updateUrl = " https://auth-doyo.herokuapp.com/updateNote/"
  readonly profileUrl = " https://auth-doyo.herokuapp.com/api/profile/";
  readonly updateProfileUrl = " https://auth-doyo.herokuapp.com//updateProfile/";
 
 
 
   httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})
 
   constructor(private http: HttpClient) { }
 
   getAllNotes(): Observable<any> {
     return this.http.get(this.APIUrl 
       , {headers: this.httpHeaders});
   }
   addNote(val:any){
     return this.http.post(this.APIUrl,val);
   }
 
   updateNote(NoteId:any,val:any):Observable<any> {
     return this.http.put(`${this.updateUrl}${NoteId}/`,val);
   }
 
   deleteNote(val:any){
     return this.http.delete(this.deleteUrl+val);
   }
 
   getProfile(id:any): Observable<any> {
     return this.http.get(`${this.profileUrl}${id}/` 
       , {headers: this.httpHeaders});
   }
   updateProfile(id:any,val:any): Observable<any> {
     return this.http.put(`${this.updateProfileUrl}${id}/`,val, {headers: this.httpHeaders});
   }
 }
 