import { configureStore } from '@reduxjs/toolkit'
// ...

const store = configureStore({
  reducer: {
    posts: postsReducer,
    users: usersReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch


function postsReducer(state: unknown, action: AnyAction): unknown {
  throw new Error('Function not implemented.')
}

function usersReducer(state: unknown, action: AnyAction): unknown {
  throw new Error('Function not implemented.')
}

