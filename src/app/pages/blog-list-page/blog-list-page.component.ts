import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/services/blog.service';
import { PostMetadataModel } from 'src/app/models/post-metadata.model';

@Component({
  selector: 'app-blog-list-page',
  templateUrl: './blog-list-page.component.html',
  styleUrls: ['./blog-list-page.component.scss']
})
export class BlogListPageComponent implements OnInit {

  posts: PostMetadataModel[];
  constructor(private blogService: BlogService) { }

  ngOnInit(): void {
    this.posts = this.blogService.getAllPosts();
  }

}
