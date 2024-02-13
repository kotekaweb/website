import { Component } from '@angular/core';
import { HeroSection } from '../../sections/hero/hero.section';

@Component({
  selector: 'page-home',
  standalone: true,
  imports: [
    HeroSection
  ],
  templateUrl: './home.page.html',
  styleUrl: './home.page.scss'
})
export class HomePage {

}
