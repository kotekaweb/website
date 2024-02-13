import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'layout-header',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './header.layout.html',
  styleUrl: './header.layout.scss'
})
export class HeaderLayout {
  menu = [
    {
      label: 'Home',
      link: '/'
    },
    {
      label: 'About Us',
      link: 'about'
    },
    {
      label: 'Products',
      link: 'product'
    },
    {
      label: 'Services',
      link: 'service'
    },
    {
      label: 'Portfolio',
      link: 'portfolio'
    },
    {
      label: 'Blog',
      link: 'blog'
    }
  ]
}
