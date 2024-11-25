import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, HostListener, Input, OnInit } from "@angular/core";
import { TestButtonComponent } from "../test-button/test-button.component";
import { RouterLink } from "@angular/router";
import { DirectusService } from "../../../directus.service";
import { NgbCarouselModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: "app-test",
  standalone: true,
  imports: [
    CommonModule,
    TestButtonComponent,
    RouterLink,
    NgbCarouselModule,
    NgbModule
  ],
  templateUrl: "./test.component.html",
  styleUrls: ["./test.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestComponent implements OnInit{
  posts: any[] = [];
  constructor (public directusSrv: DirectusService){}
  ngOnInit(): void {
    this.directusSrv.getPosts().subscribe(data => {
      this.posts = data.data;
    });
  }

}
