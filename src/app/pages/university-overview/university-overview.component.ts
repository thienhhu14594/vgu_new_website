import { Component } from '@angular/core';
import { HeaderComponent } from "../../component/globalComponent/header/header.component";
import { FooterComponent } from "../../component/globalComponent/footer/footer.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-university-overview',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, CommonModule],
  templateUrl: './university-overview.component.html',
  styleUrl: './university-overview.component.css'
})
export class UniversityOverviewComponent {
  asd = {

  }
  defineClass() {
    return ''
  }
}
