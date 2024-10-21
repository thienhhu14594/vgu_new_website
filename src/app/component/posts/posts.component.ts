import {Component, OnInit} from '@angular/core';
import {directus, Post} from "../../../../directus";
import {Router, RouterLink} from "@angular/router";
import {CommonModule} from "@angular/common";
import {readItems} from "@directus/sdk";
import { PostComponent } from '../post/post.component'; 



 
@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent implements OnInit{
  posts: Post[];
  constructor(private router: Router) {}

  goToPost(slug: string){
    this.router.navigate(['/blog', slug]);
  }

  ngOnInit(): void {
    this.getAllPosts();
  }

  async getAllPosts(){
    //@ts-ignore
    this.posts = await directus
      .request<Post[]>(readItems("posts", {
        fields: ["slug","title", "published_date", "author"]
      }))
  }
  
}
