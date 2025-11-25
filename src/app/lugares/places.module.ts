import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlacesRoutingModule } from './places-routing.module';
import { PlaceComponent } from './place/place.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PlaceComponent
  ],
  imports: [
    CommonModule,
    PlacesRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PlacesModule { }
