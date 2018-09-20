import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { VolcanoesComponent } from './volcanoes/volcanoes.component';

@NgModule({
  declarations: [
    AppComponent,
    VolcanoesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
