import { Component } from '@angular/core';
import { User } from "./UserApp.model";
import { UsersService } from "../../app/services/users.service";
import { Router, RouterModule, Routes } from '@angular/router';

@Component({
  templateUrl: './UserApp.AddView.html',
})



export class AddComponent {
  constructor(public servicea: UsersService,
    private route: Router){

  }
  
  UserModel : User = new User();
  UserModels : Array<User> = new Array<User>();
  Add(){
    
    if((this.UserModel.vchr_name == "") && (this.UserModel.vchr_name == "") && (this.UserModel.vchr_gender == "") && (this.UserModel.dat_dob == null)){
alert("All fields are required")
return false
}

    if(this.UserModel.vchr_name == ""){
alert("Name is required")
return false
}
    if(this.UserModel.vchr_district == ""){
alert("District field is required")
return false
}
    if(this.UserModel.vchr_gender == ""){
alert("Gender field is required")
return false
    }
    if(this.UserModel.dat_dob == null){
alert("D.O.B field is required")
return false
          }
          this.UserModels.push(this.UserModel);
          this.servicea.create('list/',this.UserModel).subscribe((res) => {
            console.log(res)
          },err =>{
            console.log(err)
          });
          this.UserModel = new User();
          this.route.navigate(['List']);
  }
  
}
