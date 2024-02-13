import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet, Event, NavigationEnd } from '@angular/router';
import { IStaticMethods } from 'preline';
import { HeaderLayout } from './layouts/header/header.layout';
import { FooterLayout } from './layouts/footer/footer.layout';

declare global {
  interface Window {
    HSStaticMethods: IStaticMethods
  }
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderLayout,
    FooterLayout
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  constructor(
    private router: Router
  ) {}

  title = 'website';

  ngOnInit(): void {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        setTimeout(() => {
          window.HSStaticMethods.autoInit();
        }, 100)
      }
    });
  }
}
