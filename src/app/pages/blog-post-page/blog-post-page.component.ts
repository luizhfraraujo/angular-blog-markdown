import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostMetadataModel } from 'src/app/models/post-metadata.model';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-blog-post-page',
  templateUrl: './blog-post-page.component.html',
  styleUrls: ['./blog-post-page.component.scss']
})
export class BlogPostPageComponent implements OnInit {
  post: PostMetadataModel;
  constructor(private route: ActivatedRoute, private blogService: BlogService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.post = this.blogService.getByAlias(params['alias']);
    })
  }
}
