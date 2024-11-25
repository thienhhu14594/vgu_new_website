import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-hamburger-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hamburger-component.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './hamburger-component.component.css'
})
export class HamburgerComponentComponent {
  @Input() hamburgerContent:
    | "main"
    | "about"
    | "SaA"
    | "facultyInfo"
    | "organization"
    | "level"
    | "bachelor"
    | "master"
    | "student"
    | "services"
    | "research"
    | "industrialRelation" = "main";
  
  changeContent(content:
    | "main"
    | "about"
    | "SaA"
    | "facultyInfo"
    | "organization"
    | "level"
    | "bachelor"
    | "master"
    | "student"
    | "services"
    | "research"
    | "industrialRelation" ) {
      this.hamburgerContent = content;
    }
}
