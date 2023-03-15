import { createSlice } from "@reduxjs/toolkit";

const initialState: any = {
    email: "zahide.aksak",
    password: "1234",
    name: "zahide",
};

const userSlice = createSlice({
    name: "user",
    initialState: initialState,
    reducers: {
        setLoginUser: (state, action: any) => {
            state = action.payload;
        },
    },
});

export const { setLoginUser } = userSlice.actions;
export default userSlice.reducer;
