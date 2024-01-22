import { Action } from '@ngrx/store';
import { Article } from '../models/article.model';

export enum ArticleActionType {
  ADD_ITEM = '[ARTICLE] Add ARTICLE',
  UPDATE_ITEM = '[ARTICLE] Update ARTICLE',
  DELETE_ITEM = '[ARTICLE] Delete ARTICLE',
}

export class AddArticleAction implements Action {
  readonly type = ArticleActionType.ADD_ITEM;
  constructor(public payload: Article) {}
}

export class UpdateArticleAction implements Action {
  readonly type = ArticleActionType.UPDATE_ITEM;
  constructor(public payload: Article) {}
}

export class DeleteArticleAction implements Action {
  readonly type = ArticleActionType.DELETE_ITEM;
  constructor(public payload: Article) {}
}

export type ArticleAction =
  | AddArticleAction
  | UpdateArticleAction
  | DeleteArticleAction;
