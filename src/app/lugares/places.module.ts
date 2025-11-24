import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { placesRoutingModule } from './places-routing.module';
import { placeComponent } from './place/place.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    placeComponent
  ],
  imports: [
    CommonModule,
    placesRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class placesModule { }
