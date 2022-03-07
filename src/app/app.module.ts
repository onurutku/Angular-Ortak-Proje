import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Js30Proje1Component } from './js30-proje1/js30-proje1.component';

@NgModule({
  declarations: [AppComponent, Js30Proje1Component],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
