import { Component } from '@angular/core';

@Component({
  selector: 'page-about',
  standalone: true,
  imports: [],
  templateUrl: './about.page.html',
  styleUrl: './about.page.scss'
})
export class AboutPage {
  history = [
    {
      date: 'August 1st, 2017',
      title: 'Meet Up',
      detail: 'Just a 3 ordinary people with IT background meeting each other'
    },
    {
      date: 'October 16th, 2017',
      title: 'First Freelance Project',
      detail: 'Just a 3 ordinary people with IT background meeting each other'
    },
  ]

  team = [
    {
      avatar: 'https://picsum.photos/200',
      name: 'Marshal D. Laurens',
      position: 'CEO',
      social: [
        { icon: 'linkedin', link: '#' },
        { icon: 'facebook', link: '#' },
        { icon: 'instagram', link: '#' }
      ]
    }
  ]
}
