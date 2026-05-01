import { Component } from '@angular/core';
import { Reveal } from '../../shared/directives/reveal';

@Component({
  selector: 'app-skills',
  imports: [Reveal],
  templateUrl: './skills.html',
  styleUrl: './skills.scss'
})
export class Skills {
  skills = [
  {
    category: 'Core Skills',
    items: [
      { name: 'Angular', level: 90 },
      { name: 'JavaScript', level: 75 },
      { name: 'HTML/CSS', level: 85 },
      { name: 'Bootstrap', level: 81 }
    ]
  },
  {
    category: 'Other Skills',
    items: [
      { name: 'Node.js', level: 60 },
      { name: 'Express', level: 60 }
    ]
  },
  {
    category: 'Tools',
    items: [
      { name: 'Git', level: 85 },
      { name: 'Jira', level: 80 }
    ]
  }
];

skills2 = [
  {
    category: 'Core Skills',
    items: [
      { name: 'Angular', level: 90, icon: 'bi bi-angular' },
      { name: 'JavaScript', level: 85, icon: 'bi bi-filetype-js' },
      { name: 'HTML/CSS', level: 95, icon: 'bi bi-code-slash' }
    ]
  },
  {
    category: 'Additional Skills',
    items: [
      { name: 'NgRx', level: 75, icon: 'bi bi-diagram-3' },
      { name: 'Node.js', level: 70, icon: 'bi bi-server' }
    ]
  }
];
}
