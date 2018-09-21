import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {VolcanoesComponent} from './volcanoes/volcanoes.component';

const routes: Routes = [
  {path: 'volcanoes', component: VolcanoesComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
