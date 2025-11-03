import { baseApi } from '../../../shared/api/baseApi';

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export const todosApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getTodos: build.query<Todo[], void>({
      query: () => 'todos.json',
      providesTags: ['Todo'],
    }),
  }),
});

export const { useGetTodosQuery } = todosApi;
