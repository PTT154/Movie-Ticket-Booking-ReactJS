import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../../../../../services/api";

const initialState = {
  loading: false,
  data: null,
  error: null,
  activeCinema: {
    maHeThongRap: null,
    logo: null,
  },
};

export const fetchCinemaCluster = createAsyncThunk(
  "fetch/CinemaCluster",
  async (maHeThongRap, { rejectWithValue }) => {
    try {
      const result = await api.get(
        `QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${maHeThongRap}`
      );
      return result.data.content;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const cinemaClusterSlice = createSlice({
  name: "CinemaCluster",
  initialState,
  reducers: {
    setActiveCinema: (state, action) => {
      state.activeCinema = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCinemaCluster.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCinemaCluster.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchCinemaCluster.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { setActiveCinema } = cinemaClusterSlice.actions;
export default cinemaClusterSlice.reducer;
