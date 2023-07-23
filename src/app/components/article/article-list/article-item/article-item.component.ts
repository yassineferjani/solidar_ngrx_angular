import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Article } from 'src/app/models/Article.model';
import { deleteArticle } from 'src/app/ngrx/article/article.actions';

@Component({
  selector: 'app-article-item',
  templateUrl: './article-item.component.html',
  styleUrls: ['./article-item.component.css']
})
export class ArticleItemComponent {
  @Input() article?:Article;
 
  constructor(private store:Store<any>, private router:Router){}

  onDelete(article:Article){
    this.store.dispatch(deleteArticle({article}));
  }
  onEdit(article:Article){
    this.router.navigateByUrl("/association/edit/"+article.id)
  }
}
