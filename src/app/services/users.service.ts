import { Users } from './../interfaces/usersInterface';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  url = 'https://jsonplaceholder.typicode.com/users/'

  constructor(private http:HttpClient) { }

  getUsers(){
    return this.http.get<Users[]>(this.url)
  }

  getUsersInfo(id:string){
    return this.http.get(this.url + id)
  }

  addUser(user:Users){
    return this.http.post(this.url,user)
  }

  deleteUser(id:any){
    return this.http.delete(this.url + id)
  }

  updataUser(id:any,userUpdata:any){
    return this.http.patch(this.url+id,userUpdata)
  }



}