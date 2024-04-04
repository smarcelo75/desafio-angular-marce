import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentsPageComponent } from './components/students-page/students-page.component'
import { StudentFormComponent } from './components/student-form/student-form.component'

const routes: Routes = [
  { path: 'students-page', component: StudentsPageComponent },
  { path: 'student-form', component: StudentFormComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'students-page' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
