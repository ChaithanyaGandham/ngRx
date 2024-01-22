import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Article } from './store/models/article.model';
import { State } from './store/models/state.model';
import {
  AddArticleAction,
  DeleteArticleAction,
  UpdateArticleAction,
} from './store/actions/article.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  articles$: Observable<Array<Article>>;
  constructor(private store: Store<State>) {}

  ngOnInit(): void {
    this.articles$ = this.store.select((store) => {
      return store.article;
    });
  }

  onUpdate(form: NgForm) {
    this.store.dispatch(new UpdateArticleAction(form.value));
    form.reset();
  }

  addArticle(form: NgForm) {
    this.store.dispatch(new AddArticleAction(form.value));
    form.reset();
  }

  onDelete(article: Article) {
    this.store.dispatch(new DeleteArticleAction(article));
  }
}
