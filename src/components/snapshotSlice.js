import { createSlice } from '@reduxjs/toolkit'

const snapshotSlice = createSlice({
  name: 'snapshot',
  initialState: {
    snapshot: ""
  },
  reducers: (create) =>  ({  
    addQuery: create.preparedReducer(
      (query) => {
        return { payload: { query } }
      },
      (state, action) => {
        state.snapshot = action.payload.query
      }
    ),
  
})
})

export const { addQuery } = snapshotSlice.actions


export default snapshotSlice.reducer