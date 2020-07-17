import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MarkdownModule } from 'ngx-markdown';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogListPageComponent } from './pages/blog-list-page/blog-list-page.component';
import { BlogPostPageComponent } from './pages/blog-post-page/blog-post-page.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    BlogListPageComponent,
    BlogPostPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MarkdownModule.forRoot({loader: HttpClient})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
