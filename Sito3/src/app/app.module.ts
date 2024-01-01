import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CitybikesComponent } from './components/citybikes/citybikes.component';
import { MountainbikesComponent } from './components/mountainbikes/mountainbikes.component';
import { RoadbikesComponent } from './components/roadbikes/roadbikes.component';

@NgModule({
  declarations: [
    AppComponent,
    CitybikesComponent,
    MountainbikesComponent,
    RoadbikesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }