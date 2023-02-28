import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
//import { AppRoutesModule } from './app-routes.module';
import { Test1Component } from './components/test1/test1.component';
import { Test2Component } from './components/test2/test2.component';
import { Test3Component } from './components/test3/test3.component';
import { Test4Component } from './components/test4/test4.component';

@NgModule({
  declarations: [
    AppComponent,
    Test1Component,
    Test2Component,
    Test3Component,
    Test4Component
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
