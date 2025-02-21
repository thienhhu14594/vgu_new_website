import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-program-detail',
  standalone: true,
  imports: [],
  templateUrl: './program-detail.component.html',
  styleUrl: './program-detail.component.css',
})
export class ProgramDetailComponent {
  private route = inject(ActivatedRoute); // ✅ Use inject() to access ActivatedRoute
  a: string;
  ngOnInit() {
    this.a = this.route.snapshot.paramMap.get('program');
    console.log(this.a);
  }

  // ngOnInit() {
  //   this.programId = this.route.snapshot.paramMap.get('programId'); // ✅ Get the dynamic value
  //   console.log('Program ID:', this.programId);
  // }
}
