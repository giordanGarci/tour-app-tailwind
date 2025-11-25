import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
const routes: Routes = [
  {
    path: "",
    component: LayoutComponent,
    children: [
      {
        path: "categorias",
        loadChildren: () => import('../categorias/categories.module').then(m => m.CategoriasModule),
        pathMatch: 'full'
      },
      {
        path: "lugares",
        loadChildren: () => import('../lugares/places.module').then(m => m.PlacesModule),
        pathMatch: 'full'
      },
      {
        path: "galeria",
        loadChildren: () => import('../gallery/gallery.module').then(m => m.GalleryModule),
        pathMatch: 'full'
      }
    ]
  }
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TemplateRoutingModule { }
