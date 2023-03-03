import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { AcademicComponent } from './academic/academic.component';
import { ContactComponent } from './contact/contact.component';
import { RouterModule, Router } from '@angular/router';

@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    ProjectsComponent,
    AcademicComponent,
    ContactComponent
  ],
  imports: [
    RouterModule,
    CommonModule
  ]
})
export class PagesModule { }
