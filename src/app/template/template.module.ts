import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemplateRoutingModule } from './template-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { CategoriasModule } from '../categorias/categories.module';
import { GalleryModule } from '../gallery/gallery.module';


@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    CommonModule,
    TemplateRoutingModule,
    CategoriasModule,
    GalleryModule
  ]
})
export class TemplateModule { }
