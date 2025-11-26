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
  filterName: string = '';
  filterCategory: string = '';

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

  getStars(rating: number) {
    return '&#9733;'.repeat(rating || 0) + '&#9734;'.repeat(5 - (rating || 0));
  }

  loadCategories() {
    this.categoryService.getAll().subscribe(
      {
        next: (data) => this.categories = data,
        error: (error) => console.log(error)
      }
    );
  }

  filter(){
    this.placeService.filter(this.filterName, this.filterCategory).subscribe(
      {
        next: (data) => this.places = data,
        error: (error) => console.log(error)
      }
    );
  }



}
