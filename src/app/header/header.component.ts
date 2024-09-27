import {Component} from '@angular/core';
import {MatButton} from "@angular/material/button";
import {NgOptimizedImage, ViewportScroller} from "@angular/common";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MatButton,
    NgOptimizedImage
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  constructor(private viewportScroller: ViewportScroller) {
  }

  scrollToAboutMe() {
    this.viewportScroller.scrollToAnchor('about-me');
  }

  scrollToSkills() {
    this.viewportScroller.scrollToAnchor('skills');
  }

  scrollToAcademic() {
    this.viewportScroller.scrollToAnchor('academic')
  }

  scrollToProjects() {
    this.viewportScroller.scrollToAnchor('projects')
  }
}
