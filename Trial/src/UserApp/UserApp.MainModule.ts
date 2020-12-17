import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './Routing/UserApp.MainRouting';
import { AddComponent } from './Add/UserApp.AddComponent';
import { ListComponent } from './List/UserApp.ListComponent';
import { HomeComponent } from './Home/UserApp.HomeComponent';
import { MasterPageComponent } from './Home/UserApp.MasterPageComponent';
import { FormsModule } from "@angular/forms";
import { UsersService } from 'src/app/services/users.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AddComponent,
    ListComponent,
    HomeComponent,
    MasterPageComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [UsersService],
  bootstrap: [MasterPageComponent]
})
export class UserAppModule { }
