import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-event',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './event.component.html',
  styleUrl: './event.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EventComponent {
  @Input() imageSrc: string;
  @Input() subContent1: string = 'Please add Sub content 1 from Directus!(date/time/place/p.s)';
  @Input() content: string = 'Please add Content from Directus!';
  @Input() subContent2: string = 'Please add Sub content 2 from Directus!(date/time/place/p.s)';
  @Input() title: string = 'Please add Title from Directus!';
  @Input() property: "Default" | "hover" = "Default";
  @Input() event: "e1" | "e2" | "e3" | "e4" | "e5" | "e6" | "e7" = "e1";
}
