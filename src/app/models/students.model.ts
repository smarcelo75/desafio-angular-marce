import { Student } from './student.model';

export class Students {
    students = [{ id: 1, nombre: 'Daniel', apellido: 'Seara', curso: '1k1', nota: 10 },
    { id: 2, nombre: 'Andrea', apellido: 'Silva', curso: '1k2', nota: 10 },
    { id: 3, nombre: 'Marcelo', apellido: 'Serrano', curso: '1k2', nota: 9 },
    { id: 4, nombre: 'Julian', apellido: 'Toledo', curso: '1k3', nota: 6 },
    { id: 5, nombre: 'Pablo', apellido: 'Oliva', curso: '1k3', nota: 5 },
    { id: 6, nombre: 'Lucas', apellido: 'Aguirre', curso: '1k3', nota: 2 }];

    public get all(): Student[] {
        return this.students;
    }
}