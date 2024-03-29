import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectCardComponent } from './project-card/project-card.component';
import { HeaderComponent } from './mutual/header/header.component';
import { FooterComponent } from './mutual/footer/footer.component';
import { MutualModule } from './mutual/mutual.module';
import { RouterModule } from '@angular/router';
import { ErrorPageComponent } from './mutual/error-page/error-page.component';
import { LoadingPageComponent } from './mutual/loading-page/loading-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ProjectsComponent,
    ContactComponent,
    ProjectCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MutualModule,
    RouterModule,
    FormsModule
  ],
  providers: [
    HeaderComponent,
    FooterComponent,
    ErrorPageComponent,
    LoadingPageComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
