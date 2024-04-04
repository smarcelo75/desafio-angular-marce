import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrl: './student-form.component.scss'
})
export class StudentFormComponent {
  formStudent = this.formBuilder.group({
    nombre: this.formBuilder.control('', [Validators.required, Validators.maxLength(50)]),
    apellido: this.formBuilder.control('', [Validators.required, Validators.maxLength(50)]),
    curso: this.formBuilder.control('', Validators.required),
    nota: this.formBuilder.control('', [Validators.required, Validators.min(0), Validators.max(10)]),
  });

  get nombreControl() {
    return this.formStudent.get('nombre');
  }

  get apellidoControl() {
    return this.formStudent.get('apellido');
  }

  get cursoControl() {
    return this.formStudent.get('curso');
  }

  get notaControl() {
    return this.formStudent.get('nota');
  }

  constructor(private formBuilder: FormBuilder) {

  }

  onSubmit(): void {
    if(this.formStudent.valid){
      Swal.fire('Estudiante creado ' + JSON.stringify(this.formStudent.value));
    }
  }
}
