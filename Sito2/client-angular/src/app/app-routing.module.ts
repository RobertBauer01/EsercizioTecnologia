import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Bike1Component } from './bike1/bike1.component';
import { Bike2Component } from './bike2/bike2.component';
import { Bike3Component } from './bike3/bike3.component';

const routes: Routes = [
  { path: 'mb', component: Bike1Component },
  { path: 'rb', component: Bike2Component },
  { path: 'cb', component: Bike3Component },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
