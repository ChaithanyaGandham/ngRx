// import the interface
import { Article } from '../models/article.model';
import {
  ArticleAction,
  ArticleActionType,
  UpdateArticleAction,
} from '../actions/article.actions';
//create a dummy initial state
const initialState: Array<Article> = [
  {
    id: '1',
    title: 'Angular State Management with NgRx',
    author: 'Chameera Dulanga',
    publisher: 'SyncFusion',
  },
];
export function ArticleReducer(
  state: Array<Article> = initialState,
  action: ArticleAction
) {
  switch (action.type) {
    case ArticleActionType.ADD_ITEM:
      return [...state, action.payload];
    case ArticleActionType.UPDATE_ITEM:
      const index = state.findIndex((item) => item.id === action.payload.id);
      const updatedState = [
        ...state.slice(0, index),
        action.payload,
        ...state.slice(index + 1),
      ];
      return updatedState;
    case ArticleActionType.DELETE_ITEM:
      const recIndex = state.findIndex((item) => item.id === action.payload.id);
      return state.filter((item, i) => recIndex !== i);
    default:
      return state;
  }
}
