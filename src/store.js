import { configureStore } from '@reduxjs/toolkit'
import snapshotSlice from './components/snapshotSlice'

export const store = configureStore({
  reducer: {
    snapshot: snapshotSlice
  },
})
