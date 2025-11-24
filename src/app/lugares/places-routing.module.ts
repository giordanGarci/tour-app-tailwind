import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { placeComponent } from './place/place.component';

const routes: Routes = [
  {
    path: '',
    component: placeComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class placesRoutingModule { }
