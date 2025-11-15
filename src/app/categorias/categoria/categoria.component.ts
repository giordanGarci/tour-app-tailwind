import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-categoria',
  standalone: false,
  templateUrl: './categoria.component.html',
  styleUrl: './categoria.component.scss'
})
export class CategoriaComponent {
  camposForm: FormGroup;

  constructor() {
    this.camposForm = new FormGroup({
      nome: new FormControl('', Validators.required),
      descricao: new FormControl('', Validators.required)
    });
  }

  onSave() {
    console.log(this.camposForm.value);
    console.log(this.camposForm.valid);
  }

  isFieldInvalid(campo: string) : boolean {
    const field = this.camposForm.get(campo);
    return (field?.invalid && field?.touched && field?.errors?.['required']) || false;
  }
}
