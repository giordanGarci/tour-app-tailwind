import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GalleryRoutingModule } from './gallery-routing.module';
import { GalleryComponent } from './gallery/gallery.component';
import { PlacesModule } from '../lugares/places.module';
import { CategoriasModule } from '../categorias/categories.module';


@NgModule({
  declarations: [
    GalleryComponent
  ],
  imports: [
    CommonModule,
    GalleryRoutingModule,
    PlacesModule,
    CategoriasModule
  ]
})
export class GalleryModule { }
