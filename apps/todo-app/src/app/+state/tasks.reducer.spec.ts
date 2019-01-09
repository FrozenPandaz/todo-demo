import { TasksLoaded } from './tasks.actions';
import {
  TasksState,
  Entity,
  initialState,
  tasksReducer
} from './tasks.reducer';

describe('Tasks Reducer', () => {
  const getTasksId = it => it['id'];
  let createTasks;

  beforeEach(() => {
    createTasks = (id: string, name = ''): Entity => ({
      id,
      name: name || `name-${id}`
    });
  });

  describe('valid Tasks actions ', () => {
    it('should return set the list of known Tasks', () => {
      const taskss = [createTasks('PRODUCT-AAA'), createTasks('PRODUCT-zzz')];
      const action = new TasksLoaded(taskss);
      const result: TasksState = tasksReducer(initialState, action);
      const selId: string = getTasksId(result.list[1]);

      expect(result.loaded).toBe(true);
      expect(result.list.length).toBe(2);
      expect(selId).toBe('PRODUCT-zzz');
    });
  });

  describe('unknown action', () => {
    it('should return the initial state', () => {
      const action = {} as any;
      const result = tasksReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
