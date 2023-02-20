import { Component } from '@angular/core';
import { RouterService } from '../services/router-check/router.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  constructor(readonly routerService: RouterService) {

  }

}
