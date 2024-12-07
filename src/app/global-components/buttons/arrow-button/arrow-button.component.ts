import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-arrow-button',
  standalone: true,
  imports: [],
  templateUrl: './arrow-button.component.html',
  styleUrl: './arrow-button.component.css'
})
export class ArrowButtonComponent {
  @Input() text: string;
}
