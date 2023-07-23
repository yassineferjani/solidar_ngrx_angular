import { Article } from "../models/Article.model";
import { ArticleStateEnum } from "./ArticleStore.enum";

export interface ArticleState {
    articles: Article[],
    dataState: ArticleStateEnum,
    errorMessage: string,
    currentArticle: Article | null,
    id : number | null
}