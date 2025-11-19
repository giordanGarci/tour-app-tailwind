import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CategoriaService } from '../categoria.service';
import { Categoria } from '../categoria';

@Component({
  selector: 'app-categoria',
  standalone: false,
  templateUrl: './categoria.component.html',
  styleUrl: './categoria.component.scss'
})
export class CategoriaComponent {
  camposForm: FormGroup;

  constructor(private categoriaService: CategoriaService) {
    this.camposForm = new FormGroup({
      nome: new FormControl('', Validators.required),
      descricao: new FormControl('', Validators.required)
    });
  }

  onSave() {
    this.camposForm.markAllAsTouched();

    if (this.camposForm.valid) {
      this.categoriaService
        .save(this.camposForm.value).subscribe(
          {
            next: (categoria) => {
              this.camposForm.reset();
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

  update(categoria: Categoria) {
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
    const field = this.camposForm.get(campo);
    return (field?.invalid && field?.touched && field?.errors?.['required']) || false;
  }
}
