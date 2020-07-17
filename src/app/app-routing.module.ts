import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogListPageComponent } from './pages/blog-list-page/blog-list-page.component';
import { BlogPostPageComponent } from './pages/blog-post-page/blog-post-page.component';


const routes: Routes = [
  {
    path: '', redirectTo: 'blog', pathMatch: 'full'
  },
  {
    path: 'blog',
    children: [
      {
        path: '', component: BlogListPageComponent
      },
      {
        path: ':alias',
        component: BlogPostPageComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
