import { Component } from '@angular/core';
import { GetCurrentRouteService } from '../services/get-current-route.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {
  currentURL: string;

  constructor(private currentRouteService: GetCurrentRouteService) {
    this.currentURL = '';
    this.currentRouteService.getCurrentRoute();
    //console.log(this.currentURL);
  }

  // Navbar links to show active page changing color and inserting dots:
    

  // Change language:

  // Change theme color:

  // 
}
