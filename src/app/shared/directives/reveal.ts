import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appReveal]',
  standalone: true
})
export class Reveal {

  constructor(private el: ElementRef) {}

  ngOnInit() {
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        this.el.nativeElement.classList.add('show');
      }
    });

    obs.observe(this.el.nativeElement);
  }
}