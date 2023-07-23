import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ArticleState } from "src/app/store/article/Article.store";


export const selectArticleState = createFeatureSelector<ArticleState>('Article');
export const selectArticleList = createSelector(selectArticleState, (state) => state.articles);
export const selectArticleIsLoading = createSelector(selectArticleState, (state) => state.dataState);
export const selectArticleIsError = createSelector(selectArticleState, (state) => state.errorMessage);
