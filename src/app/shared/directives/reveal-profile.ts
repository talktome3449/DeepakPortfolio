import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[revealProfile]'
})
export class RevealProfile {

  constructor(private el: ElementRef) {}

  ngOnInit() {

    const observer = new IntersectionObserver(
      ([entry]) => {

        if (entry.isIntersecting) {
          this.el.nativeElement.classList.add('show');
        }

      },
      { threshold: 0.5 }
    );

    observer.observe(this.el.nativeElement);
  }
}