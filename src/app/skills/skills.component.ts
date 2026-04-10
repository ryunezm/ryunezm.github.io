import {Component, ChangeDetectionStrategy} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {MatCard, MatCardContent, MatCardFooter, MatCardTitle} from "@angular/material/card";

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
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './skills.component.css'
})
export class SkillsComponent {

}
