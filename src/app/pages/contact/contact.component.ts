import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  public objectStr = {
    pageTitle: '',
    pageSubtitle: '',
    name: '',
    email: '',
    subject: '',
    message: '',
    sendBtn: ''
  }

  defineLangue() {
    const langueStr = localStorage.getItem('langueObj');
    
    if (langueStr) {
      try {
        const langueObj = JSON.parse(langueStr);

        this.objectStr.pageTitle = langueObj.contact.pageTitle;
        this.objectStr.pageSubtitle = langueObj.contact.pageSubtitle;
        this.objectStr.name = langueObj.contact.name;
        this.objectStr.email = langueObj.contact.email;
        this.objectStr.subject = langueObj.contact.subject;
        this.objectStr.message = langueObj.contact.message;
        this.objectStr.sendBtn = langueObj.contact.sendBtn;
        
      } catch (e) {
        console.error('Failed to parse localStorage item: ', e);
      }
    }
  }

  ngOnInit(): void {
    this.defineLangue();
  }

}
