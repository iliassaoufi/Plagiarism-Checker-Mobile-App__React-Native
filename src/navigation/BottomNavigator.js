import React from 'react';
import { TouchableOpacity, Pressable, Text, View, TextInput, Button, ImageBackground, ScrollView } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import * as icon from '@fortawesome/free-solid-svg-icons'
import { varibale } from "../styles/GlobalStyle"

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screen/Home'
import Historic from '../screen/Historic'
import Account from '../screen/Account'
import PlagiatDetail from '../screen/PlagiatDetail'
import UpdateUser from '../screen/UpdateUser'



const Tab = createBottomTabNavigator();
export default function BottomNavigator() {
    return (
        <Tab.Navigator
            initialRouteName='Home Screen'
            detachPreviousScreen="Home Screen"
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: [{
                    position: "absolute",
                    bottom: 10,
                    left: 10,
                    right: 10,
                    backgroundColor: varibale.white,
                    borderRadius: 55,
                    height: 55,
                    /******** */
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 6,
                    },
                    shadowOpacity: 0.37,
                    shadowRadius: 7.49,
                    elevation: 8,
                }]
            }}
        >

            <Tab.Screen
                name="Historic Screen"
                component={HistoricStackScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View>
                            <FontAwesomeIcon
                                icon={icon.faHistory}
                                size={25}
                                color={focused ? varibale.blue : varibale.blueLight}
                            />
                        </View>
                    )
                }}
            />
            <Tab.Screen
                name="Home Screen"
                component={HomeStackScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View>
                            <FontAwesomeIcon
                                icon={icon.faHome}
                                size={25}
                                color={focused ? varibale.white : varibale.light}
                            />
                        </View>
                    ),
                    tabBarButton: (props) => (
                        <CustomTabBarButton {...props} />
                    )
                }}
            />
            <Tab.Screen
                name="Account Screen"
                component={AccountStackScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View>
                            <FontAwesomeIcon
                                icon={icon.faUser}
                                size={25}
                                color={focused ? varibale.blue : varibale.blueLight}
                            />
                        </View>
                    )
                }}
            />
        </Tab.Navigator>
    );
}

const CustomTabBarButton = ({ children, onPress }) => (
    <Pressable
        onPress={onPress}
        style={{
            width: 70,
            height: 70,
            top: -35,
            justifyContent: "center",
            alignItems: "center",
            elevation: 5,
        }}
    >
        <View
            style={{
                width: "100%",
                height: "100%",
                borderRadius: 50,
                backgroundColor: varibale.blueOp,
                opacity: 1,
                elevation: 2,
            }}
        >
            {children}
        </View>
    </Pressable>
);


/********************************* */


const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
    return (
        <HomeStack.Navigator screenOptions={{ headerShown: false }} >
            <HomeStack.Screen name="Home" component={Home} />
            <HomeStack.Screen name="PlagiatDetail" component={PlagiatDetail} screenOptions={{ presentation: 'modal' }} />
        </HomeStack.Navigator>
    );
}

const HistoricStack = createNativeStackNavigator();

function HistoricStackScreen() {
    return (
        <HistoricStack.Navigator screenOptions={{ headerShown: false }}>
            <HistoricStack.Screen name="Historic" component={Historic} />
            <HistoricStack.Screen name="PlagiatDetail" component={PlagiatDetail} screenOptions={{ presentation: 'modal' }} />
        </HistoricStack.Navigator>
    );
}
const AccountStack = createNativeStackNavigator();

function AccountStackScreen() {
    return (
        <AccountStack.Navigator screenOptions={{ headerShown: false }} >
            <AccountStack.Screen name="Account" component={Account} />
            <AccountStack.Screen name="UpdateUser" component={UpdateUser} screenOptions={{ presentation: 'modal' }} />
        </AccountStack.Navigator>
    );
}