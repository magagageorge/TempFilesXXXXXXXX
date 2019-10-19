import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchNavWidgetComponent } from './search-nav-widget/search-nav-widget.component';
import { PeopleWidgetComponent } from './people-widget/people-widget.component';
import { PostsWidgetComponent } from './posts-widget/posts-widget.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [ SearchNavWidgetComponent, PeopleWidgetComponent, PostsWidgetComponent],
  exports:[ SearchNavWidgetComponent, PeopleWidgetComponent, PostsWidgetComponent]
})
export class WidgetsModule { }
