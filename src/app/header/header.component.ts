import {Component} from '@angular/core';
import {MatButton} from "@angular/material/button";
import {NgOptimizedImage} from "@angular/common";
import {MatIcon} from '@angular/material/icon';

@Component({
    selector: 'app-header',
    imports: [
        MatButton,
        MatIcon,
        NgOptimizedImage
    ],
    templateUrl: './header.component.html',
    styleUrl: './header.component.css'
})
export class HeaderComponent {

  isDarkMode = false;

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: 'smooth'
      });
    }
  }

  toggleTheme() {
        this.isDarkMode = !this.isDarkMode;
        const newTheme = this.isDarkMode ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    }
}
