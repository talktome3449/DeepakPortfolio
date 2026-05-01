import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appTilt]'
})
export class TiltDirective {

  constructor(private el: ElementRef) {}

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {

    if (window.innerWidth < 768) return; // disable on mobile

    const rect = this.el.nativeElement.getBoundingClientRect();

    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

    this.el.nativeElement.style.transform =
      `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
  }

  @HostListener('mouseleave')
  reset() {
    this.el.nativeElement.style.transform =
      'rotateX(0) rotateY(0) scale(1)';
  }
}