import { UsersService } from './../../services/users.service';
import { Users } from './../../interfaces/usersInterface';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  users:Users = {}

  constructor(private userService:UsersService , private route:ActivatedRoute) { }

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


  ngOnInit(): void {
    this.getSingleUser()
  }

}