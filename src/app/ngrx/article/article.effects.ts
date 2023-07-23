import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { ArticleService } from "src/app/services/article.service";
import { createArticle, createArticleSuccess, createArticlesError, deleteArticle, deleteArticleSuccess, deleteArticlesError, editArticle, editArticleError, editArticleSuccess, getArticles, getArticlesError, getArticlesSuccess, newArticle, newArticleSuccess, updateArticle, updateArticleSuccess, updateArticlesError } from "./article.actions";
import { catchError, map, of, switchMap } from "rxjs";
import { Article } from "src/app/models/Article.model";


@Injectable({ providedIn: "root" })
export class ArticleEffects {

    constructor(private readonly actions$: Actions, private service: ArticleService) { }

    getArticles$ = createEffect(
        () => this.actions$.pipe(
            ofType(getArticles.type),
            switchMap(() => {
                return this.service.getAllArticles().pipe(
                    map((article: Article[]) => getArticlesSuccess({ articles: article })),
                    catchError((err) => of(getArticlesError(err.message)))
                )
            })
        )
    );

    deleteArticle$ = createEffect(
        () => this.actions$.pipe(
            ofType(deleteArticle),
            switchMap(({ article }) => {
                return this.service.deleteArticle((<Article>article).id)
                    .pipe(
                        map(() => deleteArticleSuccess({article})),
                        catchError((err) => of(deleteArticlesError(err.message)))
                    )
            })
        )
    );

    createArticle$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createArticle),
      switchMap(({ article }) =>
        this.service.saveArticle(article).pipe(
          map((response) => createArticleSuccess({ article: response })),
          catchError((error) => of(createArticlesError({ errorMessage: error.message })))
        )
      )
    )
  );


    /**New Article */

    newArticle$ = createEffect(
        () => this.actions$.pipe(
            ofType(newArticle),
            map(() => {
                return newArticleSuccess();
            })
        )
    );

    

    /**Edit Article */

    editArticle$ = createEffect(
        () => this.actions$.pipe(
            ofType(editArticle),
            switchMap(({ id }) => {
                return this.service.getArticle(id).pipe(
                    map((article) => editArticleSuccess({ article })),
                    catchError((err) => of(editArticleError(err.message)))
                )
            })
        )
    );

    /**Update Article */

    updateProduct$ = createEffect(
        () => this.actions$.pipe(
            ofType(updateArticle),
            switchMap(({ article }) => {
                return this.service.updateArticle(article).pipe(
                    map((article) => updateArticleSuccess({ article })),
                    catchError((err) => of(updateArticlesError(err.message)))
                )
            })
        )
    );


}

