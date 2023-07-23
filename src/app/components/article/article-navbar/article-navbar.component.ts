import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { OnInit } from '@angular/core'
import { getArticles } from 'src/app/ngrx/article/article.actions';

@Component({
  selector: 'app-article-navbar',
  templateUrl: './article-navbar.component.html',
  styleUrls: ['./article-navbar.component.css']
})
export class ArticleNavbarComponent implements OnInit{
  constructor(private store:Store<any>, private router:Router){}
  ngOnInit(): void {
  }
  
  onGetAllArticles(){
    this.store.dispatch(getArticles());
  }

  onNewArticle(){
    this.router.navigateByUrl("/article/new");
  }
}

