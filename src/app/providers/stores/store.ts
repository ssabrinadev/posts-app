import { configureStore } from '@reduxjs/toolkit';
import { apiService } from "@/shared";
import { postSlice } from '@/entities/posts/slice/postSlice';

export const store = configureStore({
    reducer: {
        [apiService.reducerPath]: apiService.reducer,
        [postSlice.reducerPath]: postSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(apiService.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
