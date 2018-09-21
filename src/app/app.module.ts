import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {VolcanoesComponent} from './volcanoes/volcanoes.component';
import {VolcanoEditComponent} from './volcano-edit/volcano-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    VolcanoesComponent,
    VolcanoEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
