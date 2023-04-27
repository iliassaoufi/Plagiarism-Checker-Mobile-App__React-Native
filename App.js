import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { store } from './src/redux/Store';
import { Provider } from 'react-redux'
import Main from "./src/Main"


export default function App() {
  return (
    <Provider store={store}>
      <StatusBar style="auto" />
      <Main />
    </Provider>
  );
}

