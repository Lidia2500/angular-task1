import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Users } from 'src/app/interfaces/usersInterface';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  users:Users = {}

  constructor(private userService:UsersService , private route:ActivatedRoute, private routing:Router, private fb:FormBuilder) { }

  loginForm = this.fb.group({
    username:[''],
    company:['']
  })

  id:string = this.route.snapshot.params['id']
  getSingleUser(){
    this.userService.getUsersInfo(this.id).subscribe({
      next:(res:any)=>{
        console.log(res);
        this.users = res
      },
      error:(httpError:any)=>{
        console.log(httpError);
      }
    })
  }

  updataPost(data:any){
    this.userService.updataUser(this.id,data).subscribe(
      {
        next:()=>{
          console.log(data);
          this.routing.navigateByUrl('/')
        },
        error:(httpError:any)=>{
          console.log(httpError);
        }
      }
    )
  }


  ngOnInit(): void {
    this.getSingleUser()
  }

}