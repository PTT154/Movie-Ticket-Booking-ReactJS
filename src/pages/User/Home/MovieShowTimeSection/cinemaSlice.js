import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../../../services/api";

const initialState = {
  loading: false,
  data: null,
  error: null,
};

export const fetchCinema = createAsyncThunk(
  "fetch/Cinema",
  async (__, rejectWithValue) => {
    try {
      const result = await api.get("QuanLyRap/LayThongTinHeThongRap");
      return result.data.content;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const cinemaSlice = createSlice({
  name: "cinema",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCinema.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(fetchCinema.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchCinema.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default cinemaSlice.reducer;
