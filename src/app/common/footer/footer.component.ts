import { Component } from '@angular/core';
import { RouterService } from '../../common/services/router-check/router.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  public showInfo: boolean = true;

  constructor(readonly routerService: RouterService) {

  }

  openInfo() {
    this.showInfo = false;
  }

  closeInfo() {
    this.showInfo = true;
  }

}
