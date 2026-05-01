import { Component, computed, signal } from '@angular/core';
import { Reveal } from '../../shared/directives/reveal';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  imports: [CommonModule, Reveal],
  templateUrl: './projects.html',
  styleUrl: './projects.scss'
})
export class Projects {
  projects = [
  {
    id: 1,
    title: 'E-commerce Platform',
    description: 'Full UI with product listing, cart, and API integration',
    category: 'Angular',
    image: 'https://picsum.photos/800/500?random=1',
    techStack: ['Angular', 'Node.js', 'Bootstrap', 'Angular Material'],
    github: '#',
    demo: '#',
    featured: false,
    /* metrics: [
      { value: '20+', label: 'Components' },
      { value: '5+', label: 'Modules' }
    ] */
  },
  {
    id: 2,
    title: 'NgRx State App',
    description: 'Advanced state management using store & effects',
    category: 'Angular',
    image: 'https://picsum.photos/600/400?random=2',
    techStack: ['Angular', 'NgRx'],
    github: '#',
    demo: '#',
    featured: false
  },
  {
    id: 3,
    title: 'Charts Dashboard',
    description: 'Dynamic charts with real-time updates',
    category: 'UI',
    image: 'https://picsum.photos/600/400?random=3',
    techStack: ['Angulat', 'Chart.js', 'Bootstrap'],
    github: '#',
    demo: '#',
    featured: false
  },
  {
    id: 4,
    title: 'Book Flight',
    description: 'Dynamic charts with real-time updates',
    category: 'Angular',
    image: 'https://picsum.photos/600/400?random=3',
    techStack: ['Angular', 'Node.js', 'Bootstrap'],
    github: '#',
    demo: '#',
    featured: false
  },
  {
    id: 5,
    title: 'Health Care',
    description: 'Dynamic charts with real-time updates',
    category: 'React',
    image: 'https://picsum.photos/600/400?random=3',
    techStack: ['Angular', 'Node.js', 'Bootstrap'],
    github: '#',
    demo: '#',
    featured: true
  }
];

// ✅ Categories list
  categories = [
  'All',
  ...new Set(this.projects.map(p => p.category))
];

  // ✅ Selected category (Signal)
  selectedCategory = signal<string>('All');

  // ✅ Filter logic
  filteredProjects = computed(() => {
    if (this.selectedCategory() === 'All') {
      return this.projects.filter(p => !p.featured);
    }
    return this.projects.filter(
      p => p.category === this.selectedCategory() && !p.featured
    );
  });
}
