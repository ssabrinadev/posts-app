import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TPost, TPostInitialState } from ".";

const initialState: TPostInitialState = {
  postDetail: null,
  filters: {},
}

export const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    setPost(state, action: PayloadAction<TPost>) {
      state.postDetail = action.payload;
    },
    setPostFilters(state, action: PayloadAction<Record<string, string>>) {
      state.filters = action.payload;
    }
  },
});

export const { setPost, setPostFilters } = postSlice.actions;