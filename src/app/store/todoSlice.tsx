'use client'

import { createSlice } from '@reduxjs/toolkit'
import { TodoModel } from '@/app/Models/TodoModel'

const todosSlice = createSlice({
  name: 'todos',
  initialState: [] as TodoModel[],
  reducers: {
    addTodo: (state: TodoModel[], action) => {
      const { id, text } = action.payload
      state.push({ id, text, completed: false })
    },
    toggleTodo: (state: TodoModel[], action) => {
      const todo = state.find((todo) => todo.id === action.payload)
      if (todo) {
        todo.completed = !todo.completed
      }
    },
    deleteTodo: (state: TodoModel[], action) => {
      return state.filter((todo) => todo.id !== action.payload.id)
    },
  },
})

export const { addTodo, toggleTodo, deleteTodo } = todosSlice.actions

export default todosSlice.reducer
