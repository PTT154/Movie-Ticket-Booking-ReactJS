import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../../../../../services/api";

const initialState = {
  loading: false,
  data: null,
  error: null,
  cinemaClusterID: null,
};

export const fetchShowTimes = createAsyncThunk(
  "fetch/Showtimes",
  async (maHeThongRap, { rejectWithValue }) => {
    try {
      const result = await api.get(
        `QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=${maHeThongRap}`
      );
      return result.data.content;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
const cinemaShowTimes = createSlice({
  name: "CinemaShowTimes",
  initialState,
  reducers: {
    setCinemaClusterID: (state, action) => {
      state.cinemaClusterID = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchShowTimes.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchShowTimes.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchShowTimes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { setCinemaClusterID } = cinemaShowTimes.actions;
export default cinemaShowTimes.reducer;
