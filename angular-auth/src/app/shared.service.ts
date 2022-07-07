import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SharedService {
readonly APIUrl = "http://127.0.0.1:8000/notes/";
readonly PhotoUrl = "http://127.0.0.1:8000/media/";

  constructor(private http:HttpClient) { }

  getDepList():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl);
  }

  addDepartment(val:any){
    return this.http.post(this.APIUrl,val);
  }

  updateDepartment(val:any){
    return this.http.put(this.APIUrl,val);
  }

  deleteDepartment(val:any){
    return this.http.delete(this.APIUrl+val);
  }
}