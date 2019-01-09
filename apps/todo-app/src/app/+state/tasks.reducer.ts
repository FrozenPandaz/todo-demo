import { TasksActionTypes, TasksAction } from './tasks.actions';

export const TASKS_FEATURE_KEY = 'tasks';

export interface Task {
  id: number;
  text: string;
  done: boolean;
}

export interface TasksState {
  list: Task[]; // list of Tasks; analogous to a sql normalized table
}

export interface TasksPartialState {
  readonly [TASKS_FEATURE_KEY]: TasksState;
}

export const initialState: TasksState = {
  list: []
};

let i = 0;

export function tasksReducer(
  state: TasksState = initialState,
  action: TasksAction
): TasksState {
  return state;
}
