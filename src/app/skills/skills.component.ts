import { Component } from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {MatCard, MatCardContent, MatCardHeader, MatCardTitle} from "@angular/material/card";

@Component({
    selector: 'app-skills',
    imports: [
        NgOptimizedImage,
        MatCard,
        MatCardContent,
    ],
    templateUrl: './skills.component.html',
    styleUrl: './skills.component.css'
})
export class SkillsComponent {

}
