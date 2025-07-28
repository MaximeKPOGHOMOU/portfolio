import { Component, AfterViewInit, Inject, PLATFORM_ID, ViewChildren, QueryList, ElementRef } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Contact } from '../contact/contact';

declare var PureCounter: any;
declare var AOS: any;
declare var Typed: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  imports: [CommonModule, Contact,],
  styleUrls: ['./home.css']
})
export class Home implements AfterViewInit {


  frontendSkills = [
    { name: 'HTML/CSS', percentage: 95 },
    { name: 'JavaScript', percentage: 88 },
    { name: 'Angular', percentage: 82 },
  ];
  backendSkills = [
    { name: 'PHP', percentage: 78 },
    { name: 'Laravel', percentage: 75 },
    { name: 'Python', percentage: 72 }
  ];
  designSkills = [
    { name: 'Figma', percentage: 85 },
    { name: 'Photoshop', percentage: 70 },
    { name: 'Illustrator', percentage: 68 }
  ];
  cloudSkills = [
    { name: 'AWS', percentage: 76 },
    { name: 'Docker', percentage: 73 },
    { name: 'Git', percentage: 90 }
  ];
  @ViewChildren('progressBar') progressBars!: QueryList<ElementRef<HTMLDivElement>>;



  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  async ngAfterViewInit(): Promise<void> {
    
  if (isPlatformBrowser(this.platformId)) {
    new Typed('.typed', {
      strings: ['Designer', 'Developer', 'Freelancer', 'Artist'],
      typeSpeed: 100,
      backSpeed: 50,
      loop: true
    });

    AOS.init({
      duration: 1000,
      once: true
    });

    new PureCounter();

    //  Déplacer le code de IntersectionObserver ici
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const bar = entry.target as HTMLDivElement;
          const value = bar.getAttribute('data-value') || '0';
          bar.style.transition = 'width 1s ease-in-out';
          bar.style.width = value + '%';
          observer.unobserve(bar);
        }
      });
    }, {
      threshold: 0.3
    });

    this.progressBars.forEach(bar => {
      observer.observe(bar.nativeElement);
    });
  }
}

}




