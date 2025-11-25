import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Place } from '../../lugares/place';
import { CategoryService } from '../../categorias/category.service';
import { PlaceService } from '../../lugares/place.service';
import { Category } from '../../categorias/category';

@Component({
  selector: 'app-gallery',
  standalone: false,
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss'
})
export class GalleryComponent implements OnInit {

  places: Place[] = [];
  categories: Category[] = [];

  constructor(private placeService: PlaceService, private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.loadPlaces();
    this.loadCategories();
   }

  loadPlaces() {
    this.placeService.getAll().subscribe(
      {
        next: (data) => this.places = data,
        error: (error) => console.log(error)
      }
    );
  }

  loadCategories() {
    this.categoryService.getAll().subscribe(
      {
        next: (data) => this.categories = data,
        error: (error) => console.log(error)
      }
    );
  }

  // filterByCategory(category: string) {
  //   this.placeService.getByCategory(category).subscribe(
  //     {
  //       next: (data) => this.places = data,
  //       error: (error) => console.log(error)
  //     }
  //   );
  // }



}
