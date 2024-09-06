import { configureStore } from '@reduxjs/toolkit'
import contactSlice from './contactSlice'
import { createLogger } from 'redux-logger'
const logger=createLogger()

export const store = configureStore({
  reducer: {
    contacts: contactSlice,
  },
  middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(logger)
})

