import { Component, Input } from '@angular/core';
import { ArticleState } from 'src/app/store/article/Article.store';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent {
  @Input() state?:ArticleState;

}
