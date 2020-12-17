import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  templateUrl: './UserApp.ListView.html',
  selector:'user-app-list'
})

export class ListComponent implements OnInit {
  data
  data_one
  constructor(public servicea: UsersService,public route: Router){

  }
  ngOnInit(){
    this.servicea.getAll('list').subscribe((res) => {
      this.data = res
      console.log(this.data);
  },
  err =>{
    this.data = err
  });


  }
  Display(id){
    
    this.servicea.get('detail',id).subscribe((res) => {
      console.log(res)
      this.data_one = res
    },err =>{
      
      console.log(err)
    });
  }
  
  Delete(id){
    
    this.servicea.delete('detail',id).subscribe((res) => {
      // this.route.navigate(['List']);
      console.log(res)
      this.ngOnInit()
    },err =>{
      
      console.log(err)
    });
  }

    // Update(id){
    
    //   this.servicea.update('detail',id).subscribe((res) => {
    //     console.log(res)
    //     this.data_one = res
    //   },err =>{
        
    //     console.log(err)
    //   });
    
  
}
