import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {AdministrationComponent} from './administration/administration.component';
import {EventsComponent} from './events/events.component';
import {GalleryComponent} from './gallery/gallery.component';
import { from } from 'rxjs';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'administration',component:AdministrationComponent},
  {path:'events',component:EventsComponent},
  {path:'gallery',component:GalleryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
