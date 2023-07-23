import { createAction, props } from "@ngrx/store";
import { Article } from "src/app/models/Article.model";



const PREFIX = "[Articles]";

export const getArticles = createAction(`${PREFIX} Get Articles`);
export const getArticlesSuccess = createAction(
    `${getArticles.type} Success`,
    props<{
        articles: Article[];
    }>()
);

export const getArticlesError = createAction(
    `${getArticles.type} Error`,
    props<{
        errorMessage: string;
    }>()
);

export const createArticle = createAction(
    `${PREFIX} Create Article`,
    props<{
        article: Article;
    }>()
);

export const createArticleSuccess = createAction(
    `${createArticle.type} Success`,
    props<{
        article: Article;
    }>()
);

export const createArticlesError = createAction(
    `${createArticle.type} Error`,
    props<{
        errorMessage: string;
    }>()
);

export const updateArticle = createAction(
    `${PREFIX} Update Article`,
    props<{
        article: Article;
    }>()
);

export const updateArticleSuccess = createAction(
    `${updateArticle.type} Success`,
    props<{
        article: Article;
    }>()
);

export const updateArticlesError = createAction(
    `${updateArticle.type} Error`,
    props<{
        errorMessage: string;
    }>()
);

export const newArticle = createAction(
    `${PREFIX} New Article`);

export const newArticleSuccess = createAction(
    `${newArticle.type} Success`);

export const newArticleError = createAction(
    `${newArticle.type} Error`,
    props<{
        errorMessage: string;
    }>()
);

export const editArticle = createAction(
    `${PREFIX} Edit Article`,
    props<{ id: number }>()
);
export const editArticleSuccess = createAction(
    `${editArticle.type} Success`,
    props<{
        article: Article;
    }>()
);

export const editArticleError = createAction(
    `${editArticle.type} Error`,
    props<{
        errorMessage: string;
    }>()
);

export const deleteArticle = createAction(
    `${PREFIX} Delete Article`,
    props<{
        article: Article;
    }>()
);
export const deleteArticleSuccess = createAction(
    `${deleteArticle.type} Success`,
    props<{
        article: Article;
    }>()
);

export const deleteArticlesError = createAction(
    `${deleteArticle.type} Error`,
    props<{
        errorMessage: string;
    }>()
);