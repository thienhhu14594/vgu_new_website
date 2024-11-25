import {Component, OnInit} from '@angular/core';
import {directus, Page} from "../../../../directus";
import {ActivatedRoute} from "@angular/router";
import {CommonModule} from "@angular/common";
import {readItem} from "@directus/sdk";

@Component({
  selector: 'app-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './page.component.html',
  styleUrl: './page.component.css'
})
export class PageComponent implements OnInit{
  page: Page;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const slug = params.get("slug");
      if (slug){
        this.getPageBySlug(slug);
      }
    })
  }

  async getPageBySlug(slug: string){
    //@ts-ignore
    this.page = await directus
      .request<Page>(readItem("pages", slug));
  }

}