import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from '../Add/UserApp.AddComponent';
import { ListComponent } from '../List/UserApp.ListComponent';
import { HomeComponent } from '../Home/UserApp.HomeComponent';


const routes: Routes = [
  {path : 'Home', component : HomeComponent},
  {path : 'Add', component : AddComponent},
  {path : 'List', component : ListComponent},
  {path : '', component : HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
