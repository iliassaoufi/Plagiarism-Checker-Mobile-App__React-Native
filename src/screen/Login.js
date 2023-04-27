import React from 'react'
import { ImageBackground, ScrollView, Animated, Text, View, TextInput, TouchableOpacity } from 'react-native';

import axios from 'axios';
import FormError from '../components/utils/FormError';
import { useSelector, useDispatch } from 'react-redux'
import { setUser, setToken } from '../redux/AuthSlice'

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import * as icon from '@fortawesome/free-solid-svg-icons'
import styles from "../styles/Style"
import HeadImage from '../../assets/img/HeadImage'

export default function Login({ navigation }) {

    const userToken = useSelector((state) => state.authentication.token);

    if (userToken !== null)
        return <></>;

    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [errors, setErrors] = React.useState([]);
    const [loading, setLoading] = React.useState(false);
    const dispatch = useDispatch();

    /**************** */
    const transition = React.useRef(new Animated.Value(0)).current;

    Animated.spring(transition, {
        delay: 350,
        toValue: 100,
        useNativeDriver: true,
    }).start()

    /************************ */

    const handleAPI = async () => {
        setErrors([]);
        try {
            const user = {
                "email": email,
                "password": password,
            }
            const response = await axios.post("/login", user);
            //const response = await axios.get("/test");
            const data = response.data;

            //   console.log(data);

            // history.push("/plagiarism");
            setLoading(false);
            return data;
        }
        catch (err) {
            // console.log(err);
            setErrors(["Bad Request"]);
            setLoading(false);
            return false;
        }

    }
    const validation = () => {
        let er = [];
        if (!email)
            er.push("Email is required")
        if (!password)
            er.push("Password is required")
        if (password && password.length < 8)
            er.push("Password should be more then 8")
        return er;
    }
    const handleClickLogin = async () => {
        if (validation().length > 0) setErrors(validation());
        else {
            setLoading(true);
            try {
                const data = await handleAPI();
                if (data.user)
                    dispatch(setUser(data.user));
                if (data.token)
                    dispatch(setToken(data.token));

                //abortController.abort();
            }
            catch (e) {

            }

        }
    }

    return (
        <ImageBackground source={require('../../assets/img/jj-ying-7JX0-bfiuxQ-unsplash.jpg')} resizeMode="cover" style={styles.bgImage}>

            <View style={styles.container}>

                <Animated.View
                    style={[styles.headImage,
                    {
                        opacity: transition.interpolate({
                            inputRange: [25, 50, 100],
                            outputRange: [0, 0.5, 0.9],
                            extrapolate: "clamp",
                        }),
                        transform: [
                            {
                                translateX: transition.interpolate({
                                    inputRange: [25, 50, 100],
                                    outputRange: [50, 25, 0],
                                    extrapolate: "clamp",
                                })
                            },

                        ],

                    }]}
                >
                    <HeadImage />
                </Animated.View>

                <Animated.View style={[styles.formContainer, {
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
                }
                ]}>

                    <Text style={styles.headText}>Login</Text>
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
                            <FontAwesomeIcon icon={icon.faLock} size={22} color="#ffffff55" />
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


                    {loading && <Text>LOADING...</Text>}
                    <FormError errors={errors} />
                    <View style={styles.btnContainer}>
                        <TouchableOpacity style={styles.btnLogin} onPress={handleClickLogin}>
                            <Text style={styles.btnTextLogin} >Login</Text>
                        </TouchableOpacity>

                        <Text>Or</Text>
                        <TouchableOpacity style={styles.btnOutLogin} onPress={() => navigation.navigate('Register')}>
                            <Text style={styles.btnTextOutLogin} >Register</Text>
                        </TouchableOpacity>
                    </View>

                </Animated.View>

            </View >
        </ImageBackground >
    );
}

