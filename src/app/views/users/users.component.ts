import { UsersService } from './../../services/users.service';
import { Users } from './../../interfaces/usersInterface';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: Users[] = []; 
  constructor(private fb:FormBuilder, private userService:UsersService) { }

  //Create Form
  loginForm = this.fb.group({
    username:['',[Validators.required]],
    email:['',[Validators.required,Validators.email]]
  })

  get myValues():any{
    return this.loginForm.controls
  }


  onSubmit(loginForm:any){
    console.log(loginForm);
  }


  // Get Users
  getUsers(){
    this.userService.getUsers().subscribe({
      
        next:(res:any)=>{
          console.log(res);
          this.users = res
        },
        error:(httpError:any)=>{
          console.log(httpError);
        }
      })
  }

  addUser(user:any){
    this.userService.addUser(user).subscribe(
      {
        next:()=>{
          console.log(user);
          this.users.splice(0,0,user)
        }
      }
    )
  }

  deleteUser(user:any,i:number){
    this.userService.deleteUser(user).subscribe(
      {
        next:()=>{
          this.users.splice(i,1)
        },
        error:(httpError:any)=>{
          console.log(httpError);
        }
      }
    )
  }






  ngOnInit(): void {
    this.getUsers()
  }

}
