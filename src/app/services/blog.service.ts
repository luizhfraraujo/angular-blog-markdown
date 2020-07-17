import { Injectable } from '@angular/core';
import { PostMetadataModel } from '../models/post-metadata.model';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor() { }

  posts: PostMetadataModel[] = [
    {
      alias: "primeiro-post",
      title: "Meu Primeiro Post",
      createdAt: "17/07/2020",
      author: "Luiz Henrique",
      location: "/assets/blog/posts/primeiro-post.md"
    }
  ]

  public getAllPosts(): PostMetadataModel[] {
    return this.posts;
  }


  public getByAlias(alias: string): PostMetadataModel {
    return this.posts.find(x => x.alias == alias);
  }
}
