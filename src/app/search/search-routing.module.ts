import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './search.component';
import { PeopleComponent } from './people/people.component';
import { PostsComponent } from './posts/posts.component';
import { PagesComponent } from './pages/pages.component';
import { TopComponent } from './top/top.component';

const routes: Routes = [
  {path:'',component:SearchComponent },
  {path:'top/:query',component:TopComponent  },
  {path:'people/:query',component:PeopleComponent },
  {path:'posts/:query',component:PostsComponent },
  {path:'pages/:query',component:PagesComponent }        
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchRoutingModule { }

export const routedComponents=[SearchComponent, PeopleComponent, PostsComponent, PagesComponent,TopComponent] ;
