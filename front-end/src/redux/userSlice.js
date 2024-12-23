import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        name: "Ton",
        age: '20',
        about: 'I am a web developer',
        avaUrl: 'https://www.w3schools.com/howto/img_avatar.png',
    },
    reducers: {
        update:(state, action) => {
            state.name = action.payload.name;
            state.age = action.payload.age;
            state.about = action.payload.about;
            state.avaUrl = action.payload.avaUrl;
        },
    }
});

export const { update } = userSlice.actions;
export default userSlice.reducer;