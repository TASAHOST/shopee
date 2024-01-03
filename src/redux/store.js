import { configureStore } from '@reduxjs/toolkit'
import productReducer from './products/productReducer'

export const store = configureStore({
    reducer: {
      products: productReducer,
    },
  })