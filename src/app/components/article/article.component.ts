import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, map } from 'rxjs';
import { ArticleState } from 'src/app/store/article/Article.store';
import { ArticleStateEnum } from 'src/app/store/article/ArticleStore.enum';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  articleState$?: Observable<ArticleState>;
  readonly ArticleStateEnum = ArticleStateEnum;

  constructor(private store: Store<any>) { }

  ngOnInit(): void {
    this.articleState$ = this.store.pipe(
      map((state) => state.catalogArticle)
    )
  }

}
