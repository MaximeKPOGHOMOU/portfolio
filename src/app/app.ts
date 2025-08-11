import { Component } from '@angular/core';

import { Footer } from "./components/footer/footer";
import { Header } from "./components/header/header";
import { Home } from "./components/home/home";
import { Contact } from "./components/contact/contact";


@Component({
  selector: 'app-root',
  imports: [Header, Footer, Home, Contact],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected title = 'portfolio';
}
