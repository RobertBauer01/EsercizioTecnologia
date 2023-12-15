import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { Bike1Component } from './bike1/bike1.component';
import { Bike2Component } from './bike2/bike2.component';
import { Bike3Component } from './bike3/bike3.component';

@NgModule({
  declarations: [
    AppComponent,
    Bike1Component,
    Bike2Component,
    Bike3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
