import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { TasksPartialState } from './+state/tasks.reducer';
import { map } from 'rxjs/operators';
import { AddTask } from './+state/tasks.actions';

@Component({
  selector: 'todo-demo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public tasks$ = this.store.pipe(
    map(state => state.tasks.list)
  );

  public text: string;

  constructor(private store: Store<TasksPartialState>) {}

  public addTask() {
    this.store.dispatch(new AddTask(this.text));
    this.text = '';
  }
}
