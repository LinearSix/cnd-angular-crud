import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {VolcanoesComponent} from './volcanoes/volcanoes.component';
import {VolcanoEditComponent} from './volcano-edit/volcano-edit.component';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import {HttpClientModule} from '@angular/common/http';
import { VolcanoSearchComponent } from './volcano-search/volcano-search.component';

@NgModule({
  declarations: [
    AppComponent,
    VolcanoesComponent,
    VolcanoEditComponent,
    MessagesComponent,
    DashboardComponent,
    VolcanoSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
