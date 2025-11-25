import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl} from '@angular/forms';
import { Category } from '../../categorias/category';
import { CategoryService } from '../../categorias/category.service';
import { PlaceService } from '../place.service';


@Component({
  selector: 'app-place',
  standalone: false,
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.scss']
})
export class PlaceComponent implements OnInit {

  fieldsForm!: FormGroup;
  categories: Category[] = [];

  constructor(private categoriaService: CategoryService, private service: PlaceService) {
    this.fieldsForm = new FormGroup({
      name: new FormControl('', Validators.required),
      category: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      location: new FormControl('', Validators.required),
      urlPhoto: new FormControl('', Validators.required),
      rating: new FormControl('', Validators.required)
    });
   }

  ngOnInit(): void {
    this.categoriaService.getAll().subscribe((categories) => {
      this.categories = categories;
    });
  }

  onSave() {
    this.fieldsForm.markAllAsTouched();

    if (this.fieldsForm.valid) {
      this.service
        .save(this.fieldsForm.value).subscribe(
          {
            next: (place) => {
              this.fieldsForm.reset();
              console.log(place);
            },
            error: (error) => {
              console.log(error);
            }
          }
        );
    }
  }

  isFieldInvalid(campo: string) : boolean {
      const field = this.fieldsForm.get(campo);
      return (field?.invalid && field?.touched && field?.errors?.['required']) || false;
  }



}
