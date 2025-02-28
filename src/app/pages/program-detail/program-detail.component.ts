import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-program-detail',
  standalone: true,
  imports: [CommonModule, NgbAccordionModule, RouterLink],
  templateUrl: './program-detail.component.html',
  styleUrls: ['./program-detail.component.css'], // ✅ Fixed `styleUrls`
})
export class ProgramDetailComponent {
  sections = [
    {
      title: 'Section 1',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ligula felis, facilisis vel hendrerit ac, molestie sit amet purus. Mauris eu varius orci, eget malesuada sapien. Morbi venenatis porta erat eu bibendum. Mauris viverra eu velit et posuere. Nullam mattis iaculis purus sit amet dapibus. Aliquam erat volutpat. Fusce ac porttitor enim, vitae volutpat quam. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus',
    },
    {
      title: 'Section 2',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ligula felis, facilisis vel hendrerit ac, molestie sit amet purus. Mauris eu varius orci, eget malesuada sapien. Morbi venenatis porta erat eu bibendum. Mauris viverra eu velit et posuere. Nullam mattis iaculis purus sit amet dapibus. Aliquam erat volutpat. Fusce ac porttitor enim, vitae volutpat quam. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus',
    },
    {
      title: 'Section 3',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ligula felis, facilisis vel hendrerit ac, molestie sit amet purus. Mauris eu varius orci, eget malesuada sapien. Morbi venenatis porta erat eu bibendum. Mauris viverra eu velit et posuere. Nullam mattis iaculis purus sit amet dapibus. Aliquam erat volutpat. Fusce ac porttitor enim, vitae volutpat quam. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus',
    },
    {
      title: 'Section 4',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ligula felis, facilisis vel hendrerit ac, molestie sit amet purus. Mauris eu varius orci, eget malesuada sapien. Morbi venenatis porta erat eu bibendum. Mauris viverra eu velit et posuere. Nullam mattis iaculis purus sit amet dapibus. Aliquam erat volutpat. Fusce ac porttitor enim, vitae volutpat quam. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus',
    },
    {
      title: 'Section 5',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ligula felis, facilisis vel hendrerit ac, molestie sit amet purus. Mauris eu varius orci, eget malesuada sapien. Morbi venenatis porta erat eu bibendum. Mauris viverra eu velit et posuere. Nullam mattis iaculis purus sit amet dapibus. Aliquam erat volutpat. Fusce ac porttitor enim, vitae volutpat quam. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus',
    },
    {
      title: 'Section 6',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ligula felis, facilisis vel hendrerit ac, molestie sit amet purus. Mauris eu varius orci, eget malesuada sapien. Morbi venenatis porta erat eu bibendum. Mauris viverra eu velit et posuere. Nullam mattis iaculis purus sit amet dapibus. Aliquam erat volutpat. Fusce ac porttitor enim, vitae volutpat quam. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus',
    },
  ];

  private route = inject(ActivatedRoute); // ✅ Correct usage of `inject()`
  a: string | null = null; // ✅ Declare `a` properly

  ngOnInit() {
    this.a = this.route.snapshot.paramMap.get('program'); // ✅ Get route param safely
    console.log(this.a);
  }
}
