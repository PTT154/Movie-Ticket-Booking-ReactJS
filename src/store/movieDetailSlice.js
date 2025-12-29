import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import api from "../services/api";

const initialState = {
    loading: false,
    data: null,
    error: null,
};

export const fetchMovieDetail = createAsyncThunk("movieDetail/fetchMovieDetail",
    async (maPhim, { rejectWithValue }) => {
        try {
            const result = await api.get(`QuanLyPhim/LayThongTinPhim?MaPhim=${maPhim}`);
            return result.data.content;
        } catch (error) {
            return rejectWithValue(error);
        }
    })

const movieDetailSlice = createSlice({
    name: "movieDetail",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchMovieDetail.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(fetchMovieDetail.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
        });
        builder.addCase(fetchMovieDetail.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        });
    },
});

export default movieDetailSlice.reducer;