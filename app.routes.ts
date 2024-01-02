import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculatorComponent } from './calculator/calculator.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { EducationFormComponent } from './education-form/education-form.component';

const routes: Routes = [
  { path: 'calculator', component: CalculatorComponent },
  { path: 'registration-form', component: RegistrationFormComponent },
  { path: 'education-form', component: EducationFormComponent },
  { path: '', redirectTo: '/calculator', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }