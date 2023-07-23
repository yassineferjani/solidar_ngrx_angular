import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticleRoutingModule } from './article-routing.module';
import { ArticleComponent } from './article.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleNewComponent } from './article-new/article-new.component';
import { ArticleEditComponent } from './article-edit/article-edit.component';
import { ArticleItemComponent } from './article-list/article-item/article-item.component';
import { ArticleNavbarComponent } from './article-navbar/article-navbar.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ArticleComponent,
    ArticleListComponent,
    ArticleItemComponent,
    ArticleNewComponent,
    ArticleEditComponent,
    ArticleNavbarComponent
  ],
  imports: [
    CommonModule,
    ArticleRoutingModule,
    ReactiveFormsModule
  ]
})
export class ArticleModule { }
