import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CategoriaService } from '../category.service';
import { Category } from '../category';

@Component({
  selector: 'app-categoria',
  standalone: false,
  templateUrl: './categoria.component.html',
  styleUrl: './categoria.component.scss'
})
export class CategoriaComponent {
  fieldsForm: FormGroup;

  constructor(private categoriaService: CategoriaService) {
    this.fieldsForm = new FormGroup({
      name: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required)
    });
  }

  onSave() {
    this.fieldsForm.markAllAsTouched();

    if (this.fieldsForm.valid) {
      this.categoriaService
        .save(this.fieldsForm.value).subscribe(
          {
            next: (categoria) => {
              this.fieldsForm.reset();
              console.log(categoria);
            },
            error: (error) => {
              console.log(error);
            }
          }
      );
    }
  }

  getAll() {
    this.categoriaService.getAll().subscribe((categorias) => {
      console.log(categorias);
    });
  }

  getById(id: number) {
    this.categoriaService.getById(id).subscribe((categoria) => {
      console.log(categoria);
    });
  }

  update(categoria: Category) {
    this.categoriaService.update(categoria).subscribe((categoria) => {
      console.log(categoria);
    });
  }

  delete(id: number) {
    this.categoriaService.delete(id).subscribe(() => {
      console.log('Categoria deletada com sucesso');
    });
    }

  isFieldInvalid(campo: string) : boolean {
      const field = this.fieldsForm.get(campo);
      return (field?.invalid && field?.touched && field?.errors?.['required']) || false;
  }
}
