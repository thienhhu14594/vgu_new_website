import { Component, inject } from '@angular/core';
import { DirectusService } from '../../../../directus.service';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-staff-info',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './staff-info.component.html',
  styleUrl: './staff-info.component.css',
})
export class StaffInfoComponent {
  constructor(public directus: DirectusService) {}
  private route = inject(ActivatedRoute); // ✅ Correct usage of `inject()`
  c: string | null = null;
  b: string | null = null; // ✅ Declare `a` properly
  staffInfo: any;

  ngOnInit() {
    this.b = this.route.snapshot.paramMap.get('departmentId');
    this.c = this.route.snapshot.paramMap.get('staffId'); // ✅ Get route param safely
    console.log(this.c);
    this.directus.getStaffInfo(this.c).subscribe((data) => {
      this.staffInfo = data.data[0];
    });
  }
}
