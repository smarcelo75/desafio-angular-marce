import { Component } from '@angular/core';
import { Student } from '../../models/student.model';
import { Students } from '../../models/students.model';

@Component({
  selector: 'app-students-page',
  templateUrl: './students-page.component.html',
  styleUrl: './students-page.component.scss'
})
export class StudentsPageComponent {
  fecha = new Date();
  students = new Students();
  filterStudents: Student[] = this.students.all;
  selectedFilter = 'todos';

  onselectChange(ev: Event) {
    const element = ev.target as HTMLSelectElement;
    this.selectedFilter = element.value;
    switch (this.selectedFilter) {
      case 'todos':
        this.filterStudents = this.students.all;
        break;
      case 'aprobados':
        this.filterStudents = this.students.all.filter(s => s.nota >= 6);
        break;
      case 'no_aprobados':
        this.filterStudents = this.students.all.filter(s => s.nota < 6);
        break;
      default:
        this.filterStudents = [];
    }
  }
}
