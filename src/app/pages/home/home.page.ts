import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'page-home',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './home.page.html',
  styleUrl: './home.page.scss'
})
export class HomePage {
  hero_image = 'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&h=540';

  image_tab_1 = 'https://images.unsplash.com/photo-1588600878108-578307a3cc9d?q=80&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=987&h=1220&q=80';
  image_tab_2 = 'https://images.unsplash.com/photo-1573868396123-ef72a7f7b94f?q=80&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=987&h=1220&q=80';
  image_tab_3 = 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=987&h=1220&q=80';

  feature = [
    {
      icon: 'person-check',
      title: 'Client First',
      detail: 'We always start from where you are with your ideas and we think from the viewpoints of your end users'
    },
    {
      icon: 'chat-quote',
      title: 'Effective Synergy',
      detail: 'Our Development team remains in contact with customers through channels and media that allow performance, transparency and accuracy'
    },
    {
      icon: 'alarm',
      title: 'On Time Delivery',
      detail: "We have learned how to avoid mistakes and repeat success all these years. In time, we describe and produce it. Our Products are here to notify the same."
    },
    {
      icon: 'person-gear',
      title: 'Strong Expertise',
      detail: 'Our coding experts remain on the cutting edge of the newest and most successful technology trends and popular applications on the market.'
    },
    {
      icon: 'key',
      title: 'Total Ownership',
      detail: 'And we take your product and its feedback seriously. We make sure that we all are heading towards the right direction.'
    },
    {
      icon: 'card-checklist',
      title: 'Results Focused',
      detail: 'We create digitally adaptable products, not just features. We make sure we deliver them regardless of any factors that may hinder the development or progress.'
    }
  ]

  clients = [
    {
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Lambang_Kabupaten_Tambrauw%2C_Papua_Barat.png/640px-Lambang_Kabupaten_Tambrauw%2C_Papua_Barat.png',
      name: 'Pemerintah Daerah Kabupaten Tambrauw'
    },
    {
      logo: 'https://lpm.umy.ac.id/wp-content/uploads/2022/05/logo-bawaslu-Persegi.png',
      name: 'Bawaslu Kota Sorong'
    },
    {
      logo: 'https://media.licdn.com/dms/image/C5103AQHZicto_YclUg/profile-displayphoto-shrink_800_800/0/1581341175617?e=2147483647&v=beta&t=4pxw8xNZDKAQbw3l4gof7EcCQZmlQROFLEuKJbEGlHs',
      name: 'Teropong News'
    }
  ]
}
