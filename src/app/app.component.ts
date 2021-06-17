import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { RoutingService } from './services/routing-service/routing.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'My-Shop-Web-Frontend';

  previousUrl: string = null;
  currentUrl: string = null;

  constructor(private router: Router, private routingService: RoutingService) {}

  ngOnInit() {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.previousUrl = this.currentUrl;
        this.currentUrl = event.url;
        this.routingService.setPreviousUrl(this.previousUrl);
      });
  }
}
