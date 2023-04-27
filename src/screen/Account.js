import React from 'react'
import { ImageBackground, ScrollView, Text, View, TouchableOpacity, Animated } from 'react-native';
import { useDispatch, useSelector } from 'react-redux'
import { deleteUser, deleteToken } from '../redux/AuthSlice'

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import * as icon from '@fortawesome/free-solid-svg-icons'
import styles from "../styles/Style"
import { varibale } from "../styles/GlobalStyle"

export default function Account({ navigation }) {
    const user = useSelector((state) => state.authentication.user);
    const dispatch = useDispatch();

    /**************** */
    const transition = React.useRef(new Animated.Value(0)).current;
    Animated.spring(transition, {
        delay: 50,
        toValue: 100,
        useNativeDriver: true,
    }).start()
    /************************ */

    const handleLogout = () => {
        dispatch(deleteToken());
    }
    const handleUpdate = () => {
        navigation.navigate('UpdateUser');
    }
    return (
        <ImageBackground source={require('../../assets/img/jj-ying-7JX0-bfiuxQ-unsplash.jpg')} resizeMode="cover" style={styles.bgImage}>

            <View style={styles.container}>
                <ScrollView style={{ flex: 1, height: "100%", width: "100%" }}>
                    <Animated.View style={[styles.header,
                    {
                        opacity: transition.interpolate({
                            inputRange: [25, 50, 100],
                            outputRange: [0, 0.5, 0.9],
                            extrapolate: "clamp",
                        }),
                        transform: [
                            {
                                translateY: transition.interpolate({
                                    inputRange: [0, 100],
                                    outputRange: [-70, 0],
                                    extrapolate: "clamp",
                                }),
                            },

                        ],

                    }]} >
                        <Text style={styles.headerTitle}>
                            My Account
                        </Text>
                        <View style={styles.headerIcon} >
                            <FontAwesomeIcon icon={icon.faUser} size={40} color={varibale.blueOp} />
                        </View>
                    </Animated.View>
                    <Animated.View style={[styles.infoAccountContainer, {
                        opacity: transition.interpolate({
                            inputRange: [25, 50, 100],
                            outputRange: [0, 0.5, 0.9],
                            extrapolate: "clamp",
                        }),
                        transform: [
                            {
                                translateY: transition.interpolate({
                                    inputRange: [0, 100],
                                    outputRange: [100, 0],
                                    extrapolate: "clamp",
                                }),
                            },

                        ],
                    }]}>

                        <Text style={styles.infoTextLable}>name</Text>
                        <Text style={styles.infoText}>{user.name}</Text>
                        <Text style={styles.infoTextLable}>email</Text>
                        <Text style={styles.infoText}>{user.email}</Text>
                        <Text></Text>
                        <TouchableOpacity style={[styles.btnLogin, { width: "100%" }]} onPress={handleUpdate}>
                            <Text style={styles.btnTextLogin} >Update Info</Text>
                        </TouchableOpacity>
                        <Text></Text>
                        <TouchableOpacity style={[styles.btnOutLogin, { width: "100%" }]} onPress={handleLogout}>
                            <Text style={styles.btnTextOutLogin} >Logout</Text>
                        </TouchableOpacity>

                    </Animated.View>

                </ScrollView>
            </View>
        </ImageBackground>

    );
}
