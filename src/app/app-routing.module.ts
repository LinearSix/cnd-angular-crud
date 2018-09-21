import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {VolcanoesComponent} from './volcanoes/volcanoes.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {VolcanoEditComponent} from './volcano-edit/volcano-edit.component';

const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'volcanoes', component: VolcanoesComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'edit/:id', component: VolcanoEditComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
