import {Component, ChangeDetectionStrategy} from '@angular/core';
import {MatCard, MatCardContent, MatCardFooter, MatCardTitle} from "@angular/material/card";
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-academic',
  imports: [
    MatCard,
    MatCardFooter,
    NgOptimizedImage,
    MatCardTitle,
    MatCardContent
  ],
  standalone: true,
  templateUrl: './academic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './academic.component.css'
})
export class AcademicComponent {

}
