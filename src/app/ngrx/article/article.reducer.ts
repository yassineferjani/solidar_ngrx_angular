import { Action, createReducer, on } from "@ngrx/store";
import { ArticleStateEnum } from "src/app/store/article/ArticleStore.enum";
import { createArticle, createArticleSuccess, createArticlesError, deleteArticle, deleteArticleSuccess, deleteArticlesError, editArticle, editArticleError, editArticleSuccess, getArticles, getArticlesError, getArticlesSuccess, newArticle, newArticleError, newArticleSuccess, updateArticle, updateArticleSuccess, updateArticlesError } from "./article.actions";
import { ArticleState } from "src/app/store/article/Article.store";


const initialState: ArticleState = {
    articles: [],
    dataState: ArticleStateEnum.INITIAL,
    errorMessage: "",
    currentArticle: null,
    id : null
}


const reducer = createReducer<ArticleState>(
    initialState,
    on(getArticles,(state)=>
    {
        return {
            ...state,
            dataState: ArticleStateEnum.LOADING
        };
    }),
    on(getArticlesSuccess,(state, {articles})=>{
        return {
            ...state,
            dataState: ArticleStateEnum.LOADED,
            articles: articles
        };
    }),
    on(getArticlesError,(state, {errorMessage})=>{
        return {
            ...state,
            dataState:ArticleStateEnum.ERROR,
            errorMessage: errorMessage
        };
    }),


    on(deleteArticle,(state)=>
    {
        return {
            ...state,
            dataState: ArticleStateEnum.LOADING
        };
    }),
    on(deleteArticleSuccess,(state, {article})=>{
        return {
            ...state,
            dataState: ArticleStateEnum.LOADED,
            articles : [...state.articles.filter((a) => a.id !== article.id)]
        };
    }),
    on(deleteArticlesError,(state, {errorMessage})=>{
        return {
            ...state,
            dataState:ArticleStateEnum.ERROR,
            errorMessage: errorMessage
        };
    }),




    on(createArticle,(state)=>
    {
        return {
            ...state,
            dataState: ArticleStateEnum.LOADING
        };
    }),
    on(createArticleSuccess,(state, {article})=>{
        return {
            ...state,
            dataState: ArticleStateEnum.LOADED,
            articles: [...state.articles,article]
        };
    }),
    on(createArticlesError,(state, {errorMessage})=>{
        return {
            ...state,
            dataState:ArticleStateEnum.ERROR,
            errorMessage: errorMessage
        };
    }),




    on(updateArticle,(state)=>
    {
        return {
            ...state,
            dataState: ArticleStateEnum.LOADING
        };
    }),
    on(updateArticleSuccess,(state, {article})=>{
        return {
            ...state,
            dataState: ArticleStateEnum.UPDATED,
            articles: state.articles.map((a) => a.id == article.id ? article : a),
        };
    }),
    on(updateArticlesError,(state, {errorMessage})=>{
        return {
            ...state,
            dataState:ArticleStateEnum.ERROR,
            errorMessage: errorMessage
        };
    }),



    on(newArticle,(state)=>
    {
        return {
            ...state,
            dataState: ArticleStateEnum.LOADING
        };
    }),
    on(newArticleSuccess,(state)=>{
        return {
            ...state,
            dataState: ArticleStateEnum.NEW
        };
    }),
    on(newArticleError,(state, {errorMessage})=>{
        return {
            ...state,
            dataState:ArticleStateEnum.ERROR,
            errorMessage: errorMessage
        };
    }),


    on(editArticle,(state)=>
    {
        return {
            ...state,
            dataState: ArticleStateEnum.LOADING
        };
    }),
    on(editArticleSuccess,(state, {article})=>{
        return {
            ...state,
            dataState: ArticleStateEnum.EDIT,
            currentArticle : article
        };
    }),
    on(editArticleError,(state, {errorMessage})=>{
        return {
            ...state,
            dataState:ArticleStateEnum.ERROR,
            errorMessage: errorMessage
        };
    }),

)

export function articleReducer(state = initialState, actions:Action): ArticleState {
    return reducer(state, actions);
}