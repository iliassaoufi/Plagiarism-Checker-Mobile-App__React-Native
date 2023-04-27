import React from 'react'
import { ScrollView, Text, View, TextInput, ImageBackground, TouchableOpacity } from 'react-native';

import axios from 'axios';
import FormError from '../components/utils/FormError';
import { useSelector, useDispatch } from 'react-redux'
import { setUser, setToken } from '../redux/AuthSlice'

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import * as icon from '@fortawesome/free-solid-svg-icons'
import styles from "../styles/Style"
import { varibale } from "../styles/GlobalStyle"

export default function Register({ navigation }) {
    const user = useSelector((state) => state.authentication.user);


    const [name, setName] = React.useState(user.name);
    const [email, setEmail] = React.useState(user.email);
    // const [password, setPassword] = React.useState("");
    // const [confPassword, setConfPassword] = React.useState("");
    const [errors, setErrors] = React.useState([]);
    const [loading, setLoading] = React.useState(false);

    const dispatch = useDispatch();

    const handleAPI = async () => {
        setErrors([]);
        try {
            const user = {
                "name": name,
                "email": email,
                "password": password,
                "password_confirmation": confPassword
            }
            // const response = await axios.post("/register", user);
            // const data = response.data;
            // console.log(data);
            // dispatch(setUser(data.user))
            // dispatch(setToken(data.token))

            return true;
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
        // if (!password)
        //     er.push("Password is required")
        // if (!confPassword)
        //     er.push("Password confirmation is required")
        // else if (password !== confPassword)
        //     er.push("Password doesn't match")

        return er;
    }

    const handleClickUpdate = () => {
        if (validation().length > 0) setErrors(validation());
        else {
            //setLoading(true);
            // handleAPI();
            navigation.goBack();
        }
    }
    const goBack = () => {
        navigation.goBack();
    }


    return (
        <ImageBackground source={require('../../assets/img/jj-ying-7JX0-bfiuxQ-unsplash.jpg')} resizeMode="cover" style={styles.bgImage}>
            <View style={styles.container}>
                <ScrollView style={{ flex: 1, height: "100%", width: "100%" }}>
                    <View style={styles.header} >
                        <Text style={styles.headerTitle}>
                            Update Account
                        </Text>
                        <View style={styles.headerIcon} >
                            <FontAwesomeIcon icon={icon.faUser} size={40} color={varibale.blueOp} />
                        </View>
                    </View>
                    <View style={styles.infoAccountContainer}>

                        <View style={[styles.InputContainer, { width: "100%", alignSelf: "center" }]}>
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
                        <View style={[styles.InputContainer, { width: "100%", alignSelf: "center" }]}>
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

                        <Text></Text>
                        {loading && <Text>LOADING...</Text>}
                        <FormError errors={errors} />

                        <TouchableOpacity style={[styles.btnLogin, { width: "70%", alignSelf: "center" }]} onPress={handleClickUpdate}>
                            <Text style={styles.btnTextLogin} >Update</Text>
                        </TouchableOpacity>
                        <Text></Text>
                        <TouchableOpacity style={[styles.btnOutLogin, { width: "70%", alignSelf: "center" }]} onPress={goBack}>
                            <Text style={styles.btnTextOutLogin} >GoBack</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        </ImageBackground>
    );
}
