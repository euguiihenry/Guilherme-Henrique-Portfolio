import { Injectable, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Location } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class SiteLanguageService {

  constructor(private router: Router, private http: HttpClient, private currentRoute: ActivatedRoute, private location: Location) { }

  public setLanguage(langue: string) {
    this.saveLanguage(langue);
    this.defineLanguageObjects(langue);
    this.reload();
  }

  saveLanguage(langue: string) {
    localStorage.setItem('langue', langue);
  }

  defineLanguageObjects(langue: string) {
    let languageObjects = require('./langue.json');
    const langueObj = JSON.stringify(languageObjects[langue]);
    localStorage.setItem('langueObj', langueObj);
  }

  reload() {
    window.location.reload();
  }

  getLanguage() {
    const langue = localStorage.getItem('langue');
    return langue;
  }
}
