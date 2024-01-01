import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CitybikesComponent } from './components/citybikes/citybikes.component';
import { MountainbikesComponent } from './components/mountainbikes/mountainbikes.component';
import { RoadbikesComponent } from './components/roadbikes/roadbikes.component';

const routes: Routes = [
  { path: 'citybikes', component: CitybikesComponent },
  { path: 'mountainbikes', component: MountainbikesComponent },
  { path: 'roadbikes', component: RoadbikesComponent },
  { path: '', redirectTo: './app.component.html', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }