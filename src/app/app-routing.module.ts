import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogListPageComponent } from './pages/blog-list-page/blog-list-page.component';
import { BlogPostPageComponent } from './pages/blog-post-page/blog-post-page.component';
import { SiteLayoutComponent } from './layouts/site-layout/site-layout.component';


const routes: Routes = [
  {
    path: '', redirectTo: 'blog', pathMatch: 'full'
  },
  {
    path: 'blog',
    component: SiteLayoutComponent,
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
