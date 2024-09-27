import { Component } from '@angular/core';
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
}
