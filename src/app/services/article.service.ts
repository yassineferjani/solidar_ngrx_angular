import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from '../models/Article.model';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  host: string = "http://localhost:3000"
  constructor(private http: HttpClient) { }

  getAllArticles(): Observable<Article[]> {
    return this.http.get<Article[]>(this.host + "/articles");
  }

  getArticle(id: number): Observable<Article> {
    return this.http.get<Article>(this.host + "/articles/" + id);
  }

  updateArticle(article: Article): Observable<Article> {
    return this.http.put<Article>(this.host + "/articles/" + article.id, article);
  }

  saveArticle(article: Article): Observable<Article> {
    return this.http.post<Article>(this.host + "/articles", article);
  }

  deleteArticle(id: number): Observable<void> {
    return this.http.delete<void>(this.host + "/articles/" + id);
  }
}
