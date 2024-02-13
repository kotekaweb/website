import { Component } from '@angular/core';

@Component({
  selector: 'layout-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.layout.html',
  styleUrl: './footer.layout.scss'
})
export class FooterLayout {
  menu = [
    { label: 'Home', link: '/' },
    { label: 'About Us', link: 'about' },
    { label: 'Products', link: 'product' },
    { label: 'Services', link: 'service' },
    { label: 'Portfolio', link: 'portfolio' },
    { label: 'Blog', link: 'blog' },
    { label: 'Contact', link: 'contact' }
  ]

  social = [
    { icon: 'facebook', link: '' },
    { icon: 'twitter-x', link: '' },
    { icon: 'instagram', link: '' },
    { icon: 'linkedin', link: '' }
  ]
}
