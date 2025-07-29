import {Component} from '@angular/core';
import {MatCard, MatCardActions, MatCardContent, MatCardSubtitle, MatCardTitle} from "@angular/material/card";
import {MatButton} from "@angular/material/button";
import {PROJECT_DETAILS, Projects} from "./projects.enum";
import {MatChip, MatChipSet} from "@angular/material/chips";

@Component({
    selector: 'app-projects',
  imports: [
    MatCard,
    MatCardContent,
    MatCardActions,
    MatCardTitle,
    MatCardSubtitle,
    MatButton,
    MatChipSet,
    MatChip,
],
    templateUrl: './projects.component.html',
    styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projects = Object.values(Projects)
  projectDetails = PROJECT_DETAILS;

}
