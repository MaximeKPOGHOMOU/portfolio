import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  mobileNavActive = false;

  toggleMobileNav() {
    this.mobileNavActive = !this.mobileNavActive;
  }
}
