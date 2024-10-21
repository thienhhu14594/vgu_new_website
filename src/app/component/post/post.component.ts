import {Component, OnInit} from '@angular/core';
import {directus, Post} from "../../../../directus";
import {ActivatedRoute} from "@angular/router";
import {CommonModule} from "@angular/common";
import {readItem} from "@directus/sdk";

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent implements OnInit{
  post: Post;
  baseUrl = "http://localhost:8055/";
  constructor(private route: ActivatedRoute) {
  }
  ngOnInit(): void {
    this
      .getPostBySlug(this
      .route
      .snapshot
      .paramMap.get('slug'))
  }

  async getPostBySlug(slug: string){
    //@ts-ignore
    this.post = await directus
      .request<Post>(readItem("posts", slug));
  }

}