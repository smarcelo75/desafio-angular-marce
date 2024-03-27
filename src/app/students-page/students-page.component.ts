import { Component } from '@angular/core';

@Component({
  selector: 'app-students-page',
  templateUrl: './students-page.component.html',
  styleUrl: './students-page.component.scss'
})
export class StudentsPageComponent {
  fecha = new Date();
  students = [{ id: 1, nombre: 'Daniel', apellido: 'Seara', curso: '1k1', nota: 10 },
  { id: 2, nombre: 'Andrea', apellido: 'Silva', curso: '1k2', nota: 10 },
  { id: 3, nombre: 'Marcelo', apellido: 'Serrano', curso: '1k2', nota: 9 },
  { id: 3, nombre: 'Julian', apellido: 'Toledo', curso: '1k3', nota: 6 },
  { id: 3, nombre: 'Pablo', apellido: 'Oliva', curso: '1k3', nota: 5 },
  { id: 3, nombre: 'Lucas', apellido: 'Aguirre', curso: '1k3', nota: 2 }];
  filterStudents: { id: number, nombre: string, apellido: string, curso: string, nota: number }[] = this.students;
  selectedFilter = 'todos';

  onselectChange(ev: Event) {
    const element = ev.target as HTMLSelectElement;
    this.selectedFilter = element.value;
    switch (this.selectedFilter) {
      case 'todos':
        this.filterStudents = this.students;
        break;
      case 'aprobados':
        this.filterStudents = this.students.filter(s => s.nota >= 6);
        break;
      case 'no_aprobados':
        this.filterStudents = this.students.filter(s => s.nota < 6);
        break;
      default:
        this.filterStudents = [];
    }
  }
}
