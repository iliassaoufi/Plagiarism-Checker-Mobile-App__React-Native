import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useSelector } from 'react-redux'
import AuthNavigator from './AuthNavigator';
import BottomNavigator from './BottomNavigator';



export default function MainNavigation() {
    const userToken = useSelector((state) => state.authentication.token);
    return (
        <NavigationContainer>

            {userToken == null ? (
                <AuthNavigator />
            ) : (
                <BottomNavigator />
            )}

        </NavigationContainer>
    );
}

