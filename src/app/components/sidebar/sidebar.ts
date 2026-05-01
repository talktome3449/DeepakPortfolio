import { CommonModule, ViewportScroller } from '@angular/common';
import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { RevealProfile } from '../../shared/directives/reveal-profile';

@Component({
  selector: 'app-sidebar',
  imports: [CommonModule, RevealProfile],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss'
})
export class Sidebar {

  @Input() isMobile = false;
  @Input() isSidebarOpen = false;
  @Output() closeSidebar = new EventEmitter<void>()
  @Input() activeSection!: string;
  scroller = inject(ViewportScroller);

  navListItem: any = [
    { id: "home", icon: "bi-house-fill", label: "Home"},
    { id: "about", icon: "bi-person-fill", label: "About Me"},
    { id: "projects", icon: "bi-archive-fill", label: "Projects"},
    { id: "experience", icon: "bi-graph-up-arrow", label: "Experience"},
    { id: "skills", icon: "bi-gear-wide-connected", label: "Skills"},
    { id: "education", icon: "bi-mortarboard-fill", label: "Education"},
    { id: "contact", icon: "bi-envelope", label: "Contact"},
  ];

  connectListItem: any = [
    { id: "github", icon: "bi-github", url: ""},
    { id: "facebook", icon: "bi-facebook", url: "https://www.facebook.com/agrawaldk1990"},
    { id: "linkedin", icon: "bi-linkedin", url: "https://www.linkedin.com/in/agrawaldk1990"}
  ];
  
  constructor() {}
  
  scrollToSection = (section: any) => {
    this.scroller.scrollToAnchor(section);
    if (this.isMobile) this.closeSidebar.emit();
  }
  
}
