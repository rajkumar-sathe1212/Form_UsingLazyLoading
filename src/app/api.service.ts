import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  Mainurl = "http://localhost:3000/"

  constructor(private http:HttpClient) { }

  get(url:string){
    return this.http.get(this.Mainurl + url);
  }

  post(url:string,data:any){
    return this.http.post(this.Mainurl + url,data);
  }

  put(url:string,data:any){
    return this.http.put(this.Mainurl,data);
  }

  delete(url:string,data:any){
    return this.http.delete(this.Mainurl + url + "/" + data.id);
  }
}
