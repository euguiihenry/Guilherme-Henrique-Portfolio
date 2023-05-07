import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ErrorPageComponent } from './error-page/error-page.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ErrorPageComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    ErrorPageComponent
  ]
})
export class MutualModule { }
