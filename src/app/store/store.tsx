'use client'

import { combineReducers, configureStore } from '@reduxjs/toolkit'
import todoReducer from './todoSlice'
import { TypedUseSelectorHook, useSelector } from 'react-redux'

const rootReducer = combineReducers({
  todo: todoReducer,
})

export const store = configureStore({
  reducer: rootReducer,
})

export type RootState = ReturnType<typeof rootReducer>
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
