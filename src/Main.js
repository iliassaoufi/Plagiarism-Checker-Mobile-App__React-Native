import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import MainNavigator from './navigation/MainNavigator';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux'
import { setUser, setToken } from './redux/AuthSlice'
// import { setResult, setHestoric } from './redux/PlagiatSlice'

export default function Main() {
    const dispatch = useDispatch();

    const checkExist = async () => {
        const token = await AsyncStorage.getItem('token');
        const user = await AsyncStorage.getItem('user');
        // const historic = JSON.parse(localStorage.getItem('hestoric'));
        // const result = JSON.parse(localStorage.getItem('result'));
        if (token && user) {
            dispatch(setUser(JSON.parse(user)));
            dispatch(setToken(JSON.parse(token)));
            // console.log("++++++++++++++++");
        }
        // if (result) {
        //     dispatch(setResult(result));
        // }
        // if (historic) {
        //     dispatch(setHestoric(historic));
        // }
    }

    checkExist();
    AxiosConf();
    return (
        <MainNavigator />
    );
}


function AxiosConf() {
    const AUTH_TOKEN = useSelector((state) => state.authentication.token);
    //const AUTH_TOKEN = "12|2moNXBSauQ8xB4Rm5o0DCdTmcqFkoXyk7mWO0MjG";
    //console.log(AUTH_TOKEN);
    axios.defaults.baseURL = 'http://192.168.100.17/plagiat-project/laravel/public/api';
    axios.defaults.headers.common['Authorization'] = "Bearer " + AUTH_TOKEN;
    axios.defaults.headers.post['Accept'] = 'application/json';
    axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
}



// const styles = StyleSheet.create({
//     container: {
//         padding: 20,
//         flex: 1,
//         backgroundColor: '#999',
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
// });