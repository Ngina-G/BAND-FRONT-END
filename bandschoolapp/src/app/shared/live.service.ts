import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import {  Observable } from 'rxjs';
import { throwError  } from 'rxjs';
import { catchError } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class LiveService {

  // private apiurl = 'https://jsonplaceholder.typicode.com/todos';
 readonly APIUrl = " https://auth-doyo.herokuapp.com/notes/";
 readonly deleteUrl = " https://auth-doyo.herokuapp.com/deleteNote/";
 readonly updateUrl = " https://auth-doyo.herokuapp.com/updateNote/"
 readonly profileUrl = " https://auth-doyo.herokuapp.com/api/profile/";
 readonly updateProfileUrl = " https://auth-doyo.herokuapp.com//updateProfile/";

  constructor(private http: HttpClient) {}
  httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})


  getAllNotes(){
   return this.http.get(this.APIUrl).pipe(
     catchError(this.handleError)
   );
     
  }
  addNote(val:any){
    return this.http.post(this.APIUrl,val);
  }
  // updateNote(NoteId,val):Observable<any> {
  //   return this.http.put(`${this.updateUrl}${NoteId}/`,val);
  // }
  deleteNote(val:any){
    return this.http.delete(this.deleteUrl+val);
  }
  // getProfile(id): Observable<any> {
  //   return this.http.get(`${this.profileUrl}${id}/`
  //     , {headers: this.httpHeaders});
  // }
  // updateProfile(id,val): Observable<any> {
  //   return this.http.put(`${this.updateProfileUrl}${id}/`,val, {headers: this.httpHeaders});
  // }

  private handleError(error: HttpErrorResponse) {

    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }


  }



