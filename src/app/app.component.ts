import {Component, HostListener} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatButton, MatIconButton} from "@angular/material/button";
import {NgOptimizedImage} from "@angular/common";
import {HeaderComponent} from "./header/header.component";
import {AboutMeComponent} from "./about-me/about-me.component";
import {SkillsComponent} from "./skills/skills.component";
import {AcademicComponent} from "./academic/academic.component";
import {ProjectsComponent} from "./projects/projects.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatButton, NgOptimizedImage, MatIconButton, HeaderComponent, AboutMeComponent, SkillsComponent, AcademicComponent, ProjectsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'website-personal';
  showScrollTopButton: boolean = false;
  buttonVisibility = 'hidden';

  ngOnInit() {
    document.addEventListener('contextmenu', this.preventDefault);
  }

  ngOnDestroy() {
    document.removeEventListener('contextmenu', this.preventDefault);
  }

  scrollToTop(){
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop;
    this.showScrollTopButton = scrollPosition > 300;
    this.buttonVisibility = this.showScrollTopButton ? 'visible' : 'hidden';
  }


  private preventDefault(event: Event) {
    event.preventDefault();
  }
}
