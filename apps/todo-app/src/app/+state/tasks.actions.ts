import { Action } from '@ngrx/store';

export enum TasksActionTypes {
  AddTask = '[Tasks] Add Task'
}

export class AddTask implements Action {
  readonly type = TasksActionTypes.AddTask;
  constructor(public text: string) {}
}

export type TasksAction = AddTask;
