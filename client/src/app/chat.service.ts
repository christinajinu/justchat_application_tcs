import { Injectable } from '@angular/core';

import { userModel} from './register/userModel';
import {HttpClient} from '@angular/common/http';

import { Subject } from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class ChatService {
  readonly baseurl='http://localhost:3000';
  constructor(private http:HttpClient) { }

validateuser(user:any){
  return this.http.post<any>(this.baseurl+`/api/login/user`,{"user":user})

}
getallprofiles(){

  return this.http.get(this.baseurl+`/api/getprofiles`);
}

adduser(item:userModel){

  return this.http.post(this.baseurl+`/api/adduser`,{"user":item})
  .subscribe(data=>{
    console.log(data)
  
   })
}
}