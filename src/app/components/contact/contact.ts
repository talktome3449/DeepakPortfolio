import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class Contact {
  contact = {
    name: 'Deepak Agrawal',
    phone: '+91-9130057478',
    place: 'New Delhi, India',
    whatsapp: 'https://wa.me/919130057478'
  };

  socialLinks = [
    { label: 'Linkedin', icon: 'bi bi-linkedin', url: 'https://linkedin.com' },
    { label: 'Github', icon: 'bi bi-github', url: 'https://github.com' },
    { label: 'Facebook', icon: 'bi bi-facebook', url: 'https://facebook.com' },
    { label: 'Whatsapp', icon: 'bi bi-whatsapp', url: 'https://wa.me/9130057478' },
    { label: 'Call Me', icon: 'bi bi-telephone', url: 'tel:+919130057478' },
    { label: 'Email Me', icon: 'bi bi-envelope', url: 'https://mail.google.com/mail/?view=cm&fs=1&to=agrawaldk1990@gmail.com' }
  ];
}
