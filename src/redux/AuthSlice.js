import { createSlice } from "@reduxjs/toolkit";
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthSlice = createSlice({
    name: "authentication",
    initialState: {
        user: null,
        token: null,
    },
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
            const storage = async () =>
                await AsyncStorage.setItem('user', JSON.stringify(state.user));
            storage();
        },
        setToken: (state, action) => {
            state.token = action.payload;
            const storage = async () =>
                await AsyncStorage.setItem('token', JSON.stringify(state.token));
            storage();
        },
        deleteUser: (state) => {
            state.user = null;
            const storage = async () =>
                await AsyncStorage.removeItem('user');
            storage();
        },
        deleteToken: (state) => {
            state.token = null;
            const storage = async () =>
                await AsyncStorage.removeItem('token');
            storage();
        }
    },
});

export const { setUser, setToken, deleteUser, deleteToken } = AuthSlice.actions;

export default AuthSlice.reducer;

