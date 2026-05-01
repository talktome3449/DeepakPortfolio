import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Reveal } from '../../shared/directives/reveal';

@Component({
  selector: 'app-experience',
  imports: [CommonModule, Reveal],
  templateUrl: './experience.html',
  styleUrl: './experience.scss'
})
export class Experience {

  experienceList: any = [
    {
      id: 1,
      companyName: "DXC Technology",
      companyLogo: "dxc.svg",
      companyUrl: "https://dxc.com",
      position: "Senior Analyst",
      place: "Gurgaon, IN",
      duration: "Oct 2022 - Present",
      summary: "Worked on airline booking platform focusing on UI performance and scalability.",
      techStack: ["Angular", "RxJS", "Chart.js"],
      responsbilities: [
        "Experienced in the airline and visa domains.",
        "Built structured, reliable, high-performance code, and alongside managing code migration efforts.",
        "Troubleshoot application problems to maintain smooth functionality.",
        "Incorporated third-party libraries, services, and RESTful APIs to improve application capabilities.",
        "Partnered with cross-functional teams to handle analysis, design, and integration efforts.",
        "Maintained code alignment with best practices and company standards, and worked on modern authorization mechanisms such as JSON Web Token ( JWT ).",
        "Created application specifications while following program guidelines and technical expectations.",
        "Took an active role in Agile development processes, including sprint planning, daily stand-ups, and code reviews.",
        "Ensured features were delivered on time with high quality.",
        "Designed a POC in React, leveraging Tailwind to craft the user interface."
      ],
      metrics: [
        { icon: "bi-speedometer2", value: "30%", label: "Performance Boost" },
        { icon: "bi-people", value: "5+", label: "Team Collaboration" },
        { icon: "bi-code-slash", value: "10+", label: "Reusable Components" }
      ],
      showMore: false
    },
    {
      id: 2,
      companyName: "Mobile Programming India Pvt. Ltd.",
      companyLogo: "mp.svg",
      companyUrl: "https://www.mobileprogramming.com",
      position: "Senior Developer",
      place: "Gurgaon, IN",
      duration: "Apr 2021 - Oct 2022",
      summary: "Worked on airline booking platform focusing on UI performance and scalability.",
      techStack: ["Angular", "RxJS", "Chart.js"],
      responsbilities: [
        "Created organized, reliable, and high-performing code.",
        "Developed application specifications, ensuring they met technical standards and project deadlines.",
        "Collaborated with team members to tackle outstanding tasks and adapt to project updates.",
        "Collected requirements, performed analysis, and supported system design while engaging with business users."
      ],
      metrics: [
        { icon: "bi-speedometer2", value: "30%", label: "Performance Boost" },
        { icon: "bi-people", value: "5+", label: "Team Collaboration" },
        { icon: "bi-code-slash", value: "10+", label: "Reusable Components" }
      ],
      showMore: false
    },
    {
      id: 3,
      companyName: "MBit Computraining India Pvt. Ltd.",
      companyLogo: "mbit.svg",
      companyUrl: "https://www.mbitindia.com",
      position: "Senior Developer",
      place: "New Delhi, IN",
      duration: "Jul 2018 - Mar 2021",
      summary: "Worked on airline booking platform focusing on UI performance and scalability.",
      techStack: ["Angular 5,7,8", "RxJS", "Chart.js"],
      responsbilities: [
        "Experienced in the healthcare and manufacturing domains, where I crafted structured, maintainable, and effective code.",
        "Collaborated closely with web developers and backend engineers to ensure smooth functionality, integrate RESTful APIs, and confirm that designs met specifications and industry benchmarks.",
        "Teamed up with diverse functional groups to perform analysis, design, and integration tasks.",
        "Created application specifications while ensuring alignment with program standards and technical criteria.",
        "Performed code evaluations and reviews following established standards."
      ],
      metrics: [
        { icon: "bi-speedometer2", value: "30%", label: "Performance Boost" },
        { icon: "bi-people", value: "5+", label: "Team Collaboration" },
        { icon: "bi-code-slash", value: "10+", label: "Reusable Components" }
      ],
      showMore: false
    },
    {
      id: 4,
      companyName: "Atos Global India Pvt. Ltd.",
      companyLogo: "atos.svg",
      companyUrl: "https://atos.net/en/",
      position: "Software Engineer",
      place: "Pune, IN",
      duration: "Jun 2015 - Jun 2018",
      summary: "Worked on airline booking platform focusing on UI performance and scalability.",
      techStack: ["Service Now", "Toad", "Webmethods", "SQL"],
      responsbilities: [
        "Experience in the retail and manufacturing domains, where I engineered robust, efficient, and well-tested code.",
        "Formulated application requirements and maintained compliance with technical guidelines.",
        "Engaged with business users to compile requirements, conduct analysis, and support system design efforts."
      ],
      metrics: [
        { icon: "bi-speedometer2", value: "30%", label: "Performance Boost" },
        { icon: "bi-people", value: "5+", label: "Team Collaboration" },
        { icon: "bi-code-slash", value: "10+", label: "Reusable Components" }
      ],
      showMore: false
    }
  ];

  openCompany(event: MouseEvent, url: string) {
    event.stopPropagation(); // prevents accordion toggle
    window.open(url, '_blank');
  }

}
