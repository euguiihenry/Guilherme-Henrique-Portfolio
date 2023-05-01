import { Location } from '@angular/common';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class ArrangeLanguageService {

  constructor(private location: Location, private http: HttpClient) { }

  private reload = (): void => window.location.reload();

  private saveLanguage = (langue: string): void => localStorage.setItem('langue', langue);

  private async defineLanguageObject(langue: string) {
    try{
      const langueObjects: any = await axios.get("http://192.168.100.62:3001/api/langue-objects");
      const langueData = langueObjects.data;

      if (langueData) {
        const langueObj = JSON.stringify(langueData[langue]);

        localStorage.setItem('langueObj', langueObj);
      }
    } catch(error) {
      console.log("It was not possible to access the language object server!")
    }
  }

  public setLanguage(langue: string) {
    this.saveLanguage(langue);
    this.defineLanguageObject(langue);
    this.reload();
  }

  private getLanguage() {
    const langue = localStorage.getItem('langue');
    return langue;
  }
}
