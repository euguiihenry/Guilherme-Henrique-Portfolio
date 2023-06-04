import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GetCurrentRouteService } from '../getCurrentRoute/get-current-route.service';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class SendMessageService {

  constructor(private http: HttpClient, private currentRoute: GetCurrentRouteService) { }

  public send(data: any): Observable<Object> {
    const prefix = 'https://formsubmit.co/ajax/';
    const url = prefix + environment.POST_MESSAGE_LINK;
    return this.http.post(url, data);
  }
}
