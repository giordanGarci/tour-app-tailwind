import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl} from '@angular/forms';
import { Category } from '../../categorias/category';
import { CategoriaService } from '../../categorias/category.service';


@Component({
  selector: 'app-place',
  standalone: false,
  templateUrl: './place.component.html',
  styleUrl: './place.component.scss'
})
export class placeComponent implements OnInit {

  camposForm!: FormGroup;
  categories: Category[] = [];

  constructor(private categoriaService: CategoriaService) {
    this.camposForm = new FormGroup({
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
      console.log(this.categories);
    });
  }

  onSave() {
    console.log(this.camposForm.value);
  }

  isFieldInvalid(campo: string) : boolean {
      const field = this.camposForm.get(campo);
      return (field?.invalid && field?.touched && field?.errors?.['required']) || false;
  }



}
