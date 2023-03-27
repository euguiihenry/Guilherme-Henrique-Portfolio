import { Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SiteLanguageService {

  constructor(private router: Router) { }

  public setLanguage(langue: string) {
    this.saveLanguage(langue);
    this.goHome();
  }

  saveLanguage(langue: string) {
    localStorage.setItem('langue', langue);
  }

  goHome() {
    this.router.navigate(['/home']);
  }

  getLanguage() {
    const langue = localStorage.getItem('langue');
    return langue;
  }
}
