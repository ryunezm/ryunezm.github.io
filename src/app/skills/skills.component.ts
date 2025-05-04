import { Component } from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {MatCard, MatCardContent, MatCardFooter, MatCardHeader, MatCardTitle} from "@angular/material/card";

@Component({
    selector: 'app-skills',
  imports: [
    NgOptimizedImage,
    MatCard,
    MatCardContent,
    MatCardFooter,
    MatCardTitle,
  ],
    templateUrl: './skills.component.html',
    styleUrl: './skills.component.css'
})
export class SkillsComponent {

}
