import { Component } from '@angular/core';

import { Footer } from "./components/footer/footer";
import { Header } from "./components/header/header";
import { Home } from "./components/home/home";


@Component({
  selector: 'app-root',
  imports: [ Header, Footer, Home],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected title = 'portfolio';
}
