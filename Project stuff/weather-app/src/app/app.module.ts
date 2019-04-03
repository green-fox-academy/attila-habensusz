import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppCardComponent } from './app-card/app-card.component';
import { AddButtonComponent } from './add-button/add-button.component';

@NgModule({
  declarations: [
    AppComponent,
    AppCardComponent,
    AddButtonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
