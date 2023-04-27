import React from 'react'
import { ImageBackground, Animated, Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';

import axios from 'axios';
import FormError from '../components/utils/FormError';
import { useSelector, useDispatch } from 'react-redux'
import { setUser, setToken } from '../redux/AuthSlice'

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import * as icon from '@fortawesome/free-solid-svg-icons'
import styles from "../styles/Style"
import HeadImage from '../../assets/img/HeadImage';


export default function Register({ navigation }) {

    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [confPassword, setConfPassword] = React.useState("");
    const [errors, setErrors] = React.useState([]);
    const [loading, setLoading] = React.useState(false);

    const dispatch = useDispatch();
    /**************** */
    const transition = React.useRef(new Animated.Value(0)).current;

    Animated.spring(transition, {
        delay: 250,
        toValue: 100,
        useNativeDriver: true,
    }).start()

    /************************ */

    const handleAPI = async () => {
        setErrors([]);
        try {
            const user = {
                "name": name,
                "email": email,
                "password": password,
                "password_confirmation": confPassword
            }
            const response = await axios.post("/register", user);
            const data = response.data;
            //   console.log(data);

            // console.log(data);
            // history.push("/plagiarism");
            return data;
        }
        catch (err) {
            // console.log(err);
            setErrors(["Bad Request"]);
        }
        finally {
            setLoading(false);
        };
    }

    const validation = () => {
        let er = [];
        if (!name)
            er.push("Name is required")
        if (!email)
            er.push("Email is required")

        if (!password)
            er.push("Password is required")
        if (password && password.length < 8)
            er.push("Password should be more then 8")
        if (!confPassword)
            er.push("Password confirmation is required")
        else if (password !== confPassword)
            er.push("Password doesn't match")

        return er;
    }

    const handleClickRegister = async () => {
        if (validation().length > 0) setErrors(validation());
        else {
            setLoading(true);
            const data = await handleAPI();
            dispatch(setUser(data.user));
            dispatch(setToken(data.token));
        }
    }
    return (
        <ImageBackground source={require('../../assets/img/jj-ying-7JX0-bfiuxQ-unsplash.jpg')} resizeMode="cover" style={[styles.bgImage]}>

            <View style={[styles.container, { height: "100%", paddingTop: "33%" }]}>

                <Animated.View
                    style={[
                        styles.formContainer,
                        {
                            height: "100%",
                            opacity: transition.interpolate({
                                inputRange: [25, 50, 100],
                                outputRange: [0, 0.5, 0.9],
                                extrapolate: "clamp",
                            }),
                            transform: [
                                {
                                    translateY: transition.interpolate({
                                        inputRange: [0, 50, 100],
                                        outputRange: [200, 100, 0],
                                        extrapolate: "clamp",
                                    })
                                },

                            ],
                        }]
                    }
                >
                    <ScrollView style={{ width: "100%" }}>
                        <Text style={styles.headText}>
                            Register
                        </Text>
                        <View style={styles.InputContainer}>
                            <View style={styles.inputIcon}>
                                <FontAwesomeIcon icon={icon.faUser} size={22} color="#ffffff55" />
                            </View>

                            <TextInput
                                style={styles.input}
                                placeholder="Your name"
                                onChangeText={name => setName(name)}
                                value={name}
                                keyboardType="default"
                                placeholderTextColor="#ffffff55"
                            />
                        </View>
                        <View style={styles.InputContainer}>
                            <View style={styles.inputIcon}>
                                <FontAwesomeIcon icon={icon.faEnvelope} size={22} color="#ffffff55" />
                            </View>

                            <TextInput
                                style={styles.input}
                                placeholder="Your Email"
                                onChangeText={email => setEmail(email)}
                                value={email}
                                keyboardType="email-address"
                                placeholderTextColor="#ffffff55"
                            />
                        </View>
                        <View style={styles.InputContainer}>
                            <View style={styles.inputIcon}>
                                <FontAwesomeIcon icon={icon.faUnlock} size={22} color="#ffffff55" />
                            </View>

                            <TextInput
                                style={styles.input}
                                placeholder="Your Password"
                                onChangeText={password => setPassword(password)}
                                value={password}
                                keyboardType="default"
                                secureTextEntry={true}
                                placeholderTextColor="#ffffff55"
                            />
                        </View>
                        <View style={styles.InputContainer}>
                            <View style={styles.inputIcon}>
                                <FontAwesomeIcon icon={icon.faLock} size={22} color="#ffffff55" />
                            </View>
                            <TextInput
                                style={styles.input}
                                placeholder="Password confirmation"
                                onChangeText={confPassword => setConfPassword(confPassword)}
                                value={confPassword}
                                keyboardType="default"
                                secureTextEntry={true}
                                placeholderTextColor="#ffffff55"
                            />
                        </View>


                        {loading && <Text>LOADING...</Text>}
                        <FormError errors={errors} />
                        <View style={styles.btnContainer}>
                            <TouchableOpacity style={styles.btnLogin} onPress={handleClickRegister}>
                                <Text style={styles.btnTextLogin} >Register</Text>
                            </TouchableOpacity>
                            <Text>Or</Text>
                            <TouchableOpacity style={styles.btnOutLogin} onPress={() => navigation.navigate('Login')}>
                                <Text style={styles.btnTextOutLogin} >Login</Text>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                </Animated.View>

            </View>
        </ImageBackground>

    );

}
