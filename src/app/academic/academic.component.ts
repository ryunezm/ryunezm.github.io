import { Component } from '@angular/core';
import {MatCard, MatCardContent, MatCardFooter, MatCardSubtitle, MatCardTitle} from "@angular/material/card";
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-academic',
  standalone: true,
  imports: [
    MatCard,
    MatCardContent,
    MatCardFooter,
    MatCardSubtitle,
    NgOptimizedImage,
    MatCardTitle
  ],
  templateUrl: './academic.component.html',
  styleUrl: './academic.component.css'
})
export class AcademicComponent {

}
