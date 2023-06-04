import { Component } from '@angular/core';
import { ContactPageInfo, contactPageInfoDefaultModel, RequestBody, requestBodyDefaultModel } from '../mutual/models/contact';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { GetCurrentRouteService } from '../mutual/services/getCurrentRoute/get-current-route.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  public objectStr: ContactPageInfo;
  public requestBody: RequestBody;

  constructor (private http: HttpClient, private currentRoute: GetCurrentRouteService) {
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
    const url = environment.HTTP_LINK + this.currentRoute.getUrl() + environment.POST_MESSAGE_LINK;

    this.http.post(url, this.requestBody).subscribe((data) => {
      console.log("Message sent\n" + data);
    },
    (err) => {
      console.error(err);
    })

    console.log(this.requestBody);
    formRef.resetForm();
    this.requestBody = requestBodyDefaultModel();

  }

  ngOnInit(): void {
    this.defineLangue();
  }
}
