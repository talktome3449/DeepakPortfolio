import { Component } from '@angular/core';
import { Reveal } from '../../shared/directives/reveal';

@Component({
  selector: 'app-education',
  imports: [Reveal],
  templateUrl: './education.html',
  styleUrl: './education.scss'
})
export class Education {
  educationList = [
  {
    degree: 'Master of Computer Application (MCA)',
    institute: 'Rajasthan Technical University, Kota',
    logo: 'rtu.svg',
    website: 'https://www.rtu.ac.in/',
    year: 'Regular [ 2011 - 2014 ]',
    score: '75%'
  },
  {
    degree: 'Master of Business Application (MBA)',
    institute: 'Sikkim Manipal University, Gangtok',
    logo: 'smu.svg',
    website: 'https://smu.edu.in/',
    year: 'Distace [ 2012 - 2014 ]',
    score: '75%'
  },
  {
    degree: 'Bachelor of Computer Application (BCA)',
    institute: 'University of Rajasthan, Jaipur',
    logo: 'ru.svg',
    website: 'https://www.uniraj.ac.in/',
    year: 'Regular [ 2008 - 2011 ]',
    score: '75%'
  },
  {
    degree: '12th',
    institute: 'Board of Secondary Education, Ajmer',
    logo: 'bser.svg',
    website: 'https://rajeduboard.rajasthan.gov.in/',
    year: 'Regular [2008]',
    score: '75%'
  },
  {
    degree: '10th',
    institute: 'Board of Secondary Education, Ajmer',
    logo: 'bser.svg',
    website: 'https://rajeduboard.rajasthan.gov.in/',
    year: 'Regular [2005]',
    score: '75%'
  }
];

openLink(event: MouseEvent, url: string) {
  event.stopPropagation();
  window.open(url, '_blank');
}
}
