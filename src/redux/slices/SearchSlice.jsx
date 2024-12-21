import { createSlice } from "@reduxjs/toolkit";

const SeachSlice = createSlice({
  name: "search",
  initialState: {
    search: "",
  },
  reducers: {
    setSearch: (state, action) => {
      state.search = action.payload;
    },
  },
});
export const { setSearch } = SeachSlice.actions;
export default SeachSlice.reducer;
