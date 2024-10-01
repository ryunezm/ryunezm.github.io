import { Component } from '@angular/core';
import {
  MatCard,
  MatCardContent,
  MatCardFooter,
  MatCardHeader,
  MatCardSubtitle,
  MatCardTitle
} from "@angular/material/card";
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
    MatCardTitle,
    MatCardHeader
  ],
  templateUrl: './academic.component.html',
  styleUrl: './academic.component.css'
})
export class AcademicComponent {

}
