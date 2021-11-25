import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MyComponent} from './my/my.component';
import {FormsModule} from "@angular/forms";
import {YnComponent} from "./yn/yn.component";
import {DropdownModule} from 'primeng/dropdown';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MlComponent} from "./ml/ml.component";

@NgModule({
  declarations: [
    AppComponent,
    MyComponent,
    YnComponent,
    MlComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    DropdownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
