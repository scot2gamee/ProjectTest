import {createSlice} from '@reduxjs/toolkit';
const initialState: any = {
  todo: [],
};
export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    todoAdd: (state, actions) => {
      console.log('actions', actions);
      console.log('state', state);
      let nextTodoId = 1;
      state.todo.push({
        id: actions.payload.id,
        name: actions.payload.name,
        completed: false,
      });
    },
    todoToggled(state, action) {
      const todo = state.todo.find(
        (todo: any) => todo.id === action.payload.id,
      );
      todo.completed = !todo.completed;
    },
    todoDelete(state, action) {
      const itemId = action.payload.id;
      state.todo = state.todo.filter((item: any) => {
        return item.id !== itemId;
      });
    },
  },
});

export const {todoAdd, todoToggled, todoDelete} = todoSlice.actions;
export default todoSlice.reducer;
