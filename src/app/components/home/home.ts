import { ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

  // The list of words to cycle through
  private words: string[] = ['UI Designer', 'Angular Developer', 'Senior Analyst'];
  private currentWordIndex = 0;
  private charIndex = 0;
  private isDeleting = false;
  private typingSpeed = 150;
  private deletingSpeed = 75;
  private blinkCount = 0;
  
  // Public variables for the template
  public textToShow = '';
  public showCursor = true;

  private typingTimeout: any;
  private blinkInterval: any;

  constructor(private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.type();
  }

  private type(): void {
    const current = this.words[this.currentWordIndex];

    if (this.isDeleting) {
      // Deleting the text
      this.textToShow = current.substring(0, this.charIndex - 1);
      this.charIndex--;
    } else {
      // Typing the text
      this.textToShow = current.substring(0, this.charIndex + 1);
      this.charIndex++;
    }

    let speed = this.typingSpeed;
    if (this.isDeleting) {
      speed = this.deletingSpeed;
    }

    if (!this.isDeleting && this.charIndex === current.length) {
      // Done typing a word, now wait before deleting
      speed = 1000;
      this.isDeleting = true;
      this.startBlinking();
    } else if (this.isDeleting && this.charIndex === 0) {
      // Done deleting, move to the next word
      this.isDeleting = false;
      this.currentWordIndex = (this.currentWordIndex + 1) % this.words.length;
      speed = 500;
    }

    // After updating the state, manually trigger change detection
    this.cdr.detectChanges(); // <-- This is the crucial line

    // Use NgZone.run to re-enter Angular's context if needed, but cdr.detectChanges() is usually sufficient.
    this.typingTimeout = setTimeout(() => this.type(), speed);
  }

  private startBlinking(): void {
    this.blinkCount = 0;
    this.blinkInterval = setInterval(() => {
      this.showCursor = !this.showCursor;

      // Manually trigger change detection for the cursor
      this.cdr.detectChanges(); // <-- Another crucial line

      this.blinkCount++;
      if (this.blinkCount >= 6) { // Blink 3 times (on and off)
        clearInterval(this.blinkInterval);
        this.showCursor = true;
        this.cdr.detectChanges(); // Final update
      }
    }, 250);
  }

  ngOnDestroy() {
    clearTimeout(this.typingTimeout);
    clearInterval(this.blinkInterval);
  }
  
}
