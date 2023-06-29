import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
// import {toast} from "read-toastify";

const initialState = {
    isLoading: false,
    user: null,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
});
console.log(userSlice);
export default userSlice.reducer