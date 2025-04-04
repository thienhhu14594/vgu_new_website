import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Card1LComponent } from '../landing-page/components/card1-l/card1-l.component';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Card3MComponent } from '../landing-page/components/card3-m/card3-m.component';
import { DirectusService } from '../../../../directus.service';

@Component({
  selector: 'app-presidential-board',
  standalone: true,
  imports: [CommonModule, Card1LComponent, RouterLink, Card3MComponent],
  templateUrl: './department-unit.component.html',
  styleUrl: './department-unit.component.css',
})
export class DepartmentUnitComponent {
  constructor(public directus: DirectusService, private router: Router) {}

  private route = inject(ActivatedRoute); // ✅ Correct usage of `inject()`
  b: string | null = null; // ✅ Declare `a` properly
  staffs: any[] = [];
  depsName: any;
  formatText(text) {
    return text.toLowerCase().replace(/\s+/g, '-');
  }

  ngOnInit() {
    this.b = this.route.snapshot.paramMap.get('departmentId'); // ✅ Get route param safely
    console.log(this.b);
    this.directus.getStaffs(this.b).subscribe((data) => {
      this.staffs = data.data.sort((a, b) => a.order - b.order);
      if (this.staffs.length === 0) {
        this.router.navigate(['/pagenotfound'], { replaceUrl: true });
      }
    });
    this.directus.getDepartmentsName(this.b).subscribe((data) => {
      this.depsName = data.data[0];
    });
  }
  reverse(i): boolean {
    return i % 2 !== 0;
  }
  // ngOnInit(): void {
  //   this.directus.getStaffs().subscribe((data) => {
  //     this.upperUnits = data.data.reverse();
  //   });
  // }
}

// routerLink = '/organization/presidential-board/{{ staff.link }}';