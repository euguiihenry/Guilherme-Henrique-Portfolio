import { Component } from '@angular/core';
import { ContactPageInfo, contactPageInfoDefaultModel, RequestBody, requestBodyDefaultModel } from '../mutual/models/contact';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { GetCurrentRouteService } from '../mutual/services/getCurrentRoute/get-current-route.service';
import { SendMessageService } from '../mutual/services/sendMessage/send-message.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  public objectStr: ContactPageInfo;
  public requestBody: RequestBody;

  constructor (private sendMessage: SendMessageService) {
    this.objectStr = contactPageInfoDefaultModel();
    this.requestBody = requestBodyDefaultModel();
  }

  private defineLangue(): void  {
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
        this.objectStr.nameMsg = langueObj.contact.nameMsg;
        this.objectStr.emailMsg = langueObj.contact.emailMsg;
        this.objectStr.subjectMsg = langueObj.contact.subjectMsg;
        this.objectStr.messageTxt = langueObj.contact.messageTxt;

      } catch (e) {
        console.error('Failed to parse localStorage item: ', e);
      }
    }
  }

  public postMessage(formRef: NgForm): void {
    this.sendMessage.send(this.requestBody).subscribe((response: Object) => this.showResponse(response));
    this.resetForm(formRef);
  }

  private showResponse(response: Object): void {
    console.log(response);
  }

  private resetForm(formRef: NgForm): void {
    formRef.resetForm();
    this.requestBody = requestBodyDefaultModel();
  }

  ngOnInit(): void {
    this.defineLangue();
  }
}
