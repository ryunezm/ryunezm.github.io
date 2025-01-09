import {Component} from '@angular/core';
import {MatCard, MatCardActions, MatCardContent, MatCardSubtitle, MatCardTitle} from "@angular/material/card";
import {MatButton} from "@angular/material/button";
import {Projects, PROJECT_DETAILS} from "./projects.enum";

@Component({
    selector: 'app-projects',
    imports: [
        MatCard,
        MatCardContent,
        MatCardActions,
        MatCardTitle,
        MatCardSubtitle,
        MatButton
    ],
    templateUrl: './projects.component.html',
    styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projects = Object.values(Projects)
  projectDetails = PROJECT_DETAILS;

}
