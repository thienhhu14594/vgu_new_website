import { Component, Input } from '@angular/core';
import { DirectusService } from '../../../../directus.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hamburger-content',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hamburger-content.component.html',
  styleUrl: './hamburger-content.component.css',
})
export class HamburgerContentComponent {
  @Input() navTree: any[] = [];
  public lvlStack: any[] = [];
  public currentLvl: string;
  ngOnInit(): void {
    this.lvlStack.push(this.navTree);
  }
  public pushStack(el: any): void {
    if (this.lvlStack.length < 4) {
      this.lvlStack.push(el.children);
      this.currentLvl = el.name;
    }
  }
}
