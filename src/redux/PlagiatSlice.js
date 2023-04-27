import { createSlice } from "@reduxjs/toolkit";
import AsyncStorage from '@react-native-async-storage/async-storage';

export const PlagiatSlice = createSlice({
    name: "plagiarism",
    initialState: {
        result: null,
        historic: [],
    },
    reducers: {
        setResult: (state, action) => {
            state.result = action.payload;
            const storage = async () =>
                await AsyncStorage.setItem('result', JSON.stringify(state.result));
            storage();
        },
        setHistoric: (state, action) => {
            state.historic = action.payload;
            historicStorage(state.historic);
        },
        AddToHistoric: (state, action) => {
            state.historic.push(action.payload);
            historicStorage(state.historic);
        },
        deleteFromHistoric: (state, action) => {
            const id = action.payload;
            state.historic = state.historic.filter(item => item.id != id);
            historicStorage(state.historic);
        },
        deleteResult: (state) => {
            state.result = null;
            const storage = async () =>
                await AsyncStorage.removeItem('result');
            storage();
        },
        deleteHistoric: (state) => {
            state.historic = [];
            const storage = async () =>
                await AsyncStorage.removeItem('historic');
            storage();
        }
    },
});

export const { setResult, setHistoric, AddToHistoric, deleteFromHistoric, deleteResult, deleteHistoric } = PlagiatSlice.actions;

export default PlagiatSlice.reducer;

/********************* out functions *****************************/

function historicStorage(data) {
    const storage = async () =>
        await AsyncStorage.setItem('historic', JSON.stringify(data));
    storage();
}