import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SubnavbarComponent } from "../globalComponent/subnavbar/subnavbar.component";
import { SlideNewsComponent } from "../globalComponent/slide-news/slide-news.component";
import { ButtonsComponent } from "../globalComponent/buttons/buttons.component";
import { EventComponent } from "../globalComponent/event/event.component";
import { SlidePartnerComponent } from "../globalComponent/slide-partner/slide-partner.component";
import { FooterComponent } from "../globalComponent/footer/footer.component";
import { LogoComponent } from "../globalComponent/logoComponent/logo/logo.component";
import { SubnavComponent } from "../globalComponent/subnav/subnav.component";

@Component({
  selector: 'app-landing-page-desktop',
  standalone: true,
  imports: [CommonModule, SubnavbarComponent, SlideNewsComponent, ButtonsComponent, EventComponent, SlidePartnerComponent, FooterComponent, LogoComponent, SubnavComponent],
  templateUrl: './landing-page-desktop.component.html',
  styleUrl: './landing-page-desktop.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandingPageDesktopComponent {
  propertye1: "Default" | "hover" = "Default";
  setPropertye1(status: "Default" | "hover") {
    this.propertye1 = status;
  }
  propertye2: "Default" | "hover" = "Default";
  setPropertye2(status: "Default" | "hover") {
    this.propertye2 = status;
  }
  propertye3: "Default" | "hover" = "Default";
  setPropertye3(status: "Default" | "hover") {
    this.propertye3 = status;
  }
  propertye4: "Default" | "hover" = "Default";
  setPropertye4(status: "Default" | "hover") {
    this.propertye4 = status;
  }
  propertye5: "Default" | "hover" = "Default";
  setPropertye5(status: "Default" | "hover") {
    this.propertye5 = status;
  }
  propertye6: "Default" | "hover" = "Default";
  setPropertye6(status: "Default" | "hover") {
    this.propertye6 = status;
  }
  propertye7: "Default" | "hover" = "Default";
  setPropertye7(status: "Default" | "hover") {
    this.propertye7 = status;
  }
}
