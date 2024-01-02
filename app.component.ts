import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { EducationFormComponent } from './education-form/education-form.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    RegistrationFormComponent,
    EducationFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }