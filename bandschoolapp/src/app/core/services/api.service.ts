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
  readonly oneNoteUrl = " https://auth-doyo.herokuapp.com/oneNote/";
  readonly addTaskUrl = " https://auth-doyo.herokuapp.com/tasks/";
  readonly deleteTaskUrl = " https://auth-doyo.herokuapp.com/deleteTask/";
  readonly updateTaskUrl = " https://auth-doyo.herokuapp.com/updateTask/";
 
 
 
   httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})
 
   constructor(private http: HttpClient) { }
 
   getAllNotes(): Observable<any> {
     return this.http.get(this.APIUrl 
       , {headers: this.httpHeaders});
   }
   addNote(val:any){
     return this.http.post(this.APIUrl,val);
   }
   getOneNote(NoteId:any): Observable<any> {
    return this.http.get(`${this.oneNoteUrl}${NoteId}/` );
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
   addTask(val:any){
    return this.http.post(this.addTaskUrl,val);
  }
  getAllTasks():Observable<any>{
    return this.http.get(this.addTaskUrl);
  }
  updateTask(TaskId:any,val:any):Observable<any> {
    return this.http.put(`${this.updateTaskUrl}${TaskId}/`,val);
  }

  deleteTask(val:any){
    return this.http.delete(this.deleteTaskUrl+val);
  }
 }
 