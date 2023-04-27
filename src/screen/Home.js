import React from 'react'
import { TouchableOpacity, Text, View, Animated, TextInput, ActivityIndicator, ImageBackground, ScrollView } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';
import axios from 'axios';
import FormError from '../components/utils/FormError';
import { useDispatch } from 'react-redux'
import { setResult, AddToHistoric } from '../redux/PlagiatSlice'

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import * as icon from '@fortawesome/free-solid-svg-icons'
import styles from "../styles/Style"
import HomeImage from '../../assets/img/HomeImage'
import { varibale } from "../styles/GlobalStyle"




export default function Home({ navigation }) {
    const dispatch = useDispatch();

    const [text, setText] = React.useState("");
    const [file, setFile] = React.useState(null);
    const [errors, setErrors] = React.useState([]);
    const [loading, setLoading] = React.useState(false)

    /**************** */
    const transition = React.useRef(new Animated.Value(0)).current;

    Animated.timing(transition, {
        delay: 250,
        timing: 600,
        toValue: 100,
        useNativeDriver: true,
    }).start()
    /************************ */

    const handleAPI = async (data, url) => {
        try {
            let formData = new FormData();
            formData.append('text', data.text);
            try {
                const uri = data.file.uri;
                const uriParts = uri.split('.');
                const fileType = uriParts[uriParts.length - 1];
                const fileUpload = {
                    uri: uri,
                    name: `file_.${fileType}`,
                    type: `application/txt`,
                };
                //console.log(fileUpload);
                formData.append('file', fileUpload);
            } catch { }
            // console.log(formData);

            //  formData.append('file', data.file);
            const response = await axios.post(url, formData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    }
                });
            const result = response.data;
            //console.log(result);
            dispatch(setResult(result));
            dispatch(AddToHistoric(result));

            navigation.navigate('PlagiatDetail')

            //history.push("/plagiarism/result");
            return true;
        }
        catch (err) {
            //console.log(err);
            setErrors(["Bad Request"]);
        }
        finally {
            setLoading(false);
        };
    }
    const checkPlagit = () => {
        setLoading(true);
        if (text && !file) {
            handleAPI(
                { text: text },
                '/plagiat/text'
            )
        }
        else if (file && !text) {
            handleAPI(
                { file: file },
                '/plagiat/file'
            );
        }
        else alert("error");
    }
    const validation = () => {
        let er = [];
        if (!text && !file)
            er.push("Set your text or document ")
        if (text && file)
            er.push("Set just one text or document ")
        if (!text && file) {
            let allowedExtensions =
                /(\.doc|\.docx|\.pdf|\.txt)$/i;
            if (!allowedExtensions.exec(file.name))
                er.push("Extensions not allowed")
        }
        if (text && !file) {
            if (text.length < 60)
                er.push("minimum character in 60")
        }
        return er;
    }

    const handlePickDocument = async () => {
        let result = await DocumentPicker.getDocumentAsync({});
        setFile(result);
        // console.log(result);
        //console.log("click");
    }
    const handleSubmit = () => {
        setErrors([]);
        if (validation().length > 0) setErrors(validation());
        else checkPlagit();
    }
    const handleReset = () => {
        setText("");
        setFile(null);
        setErrors([]);
    }

    const loadingShow = () => {
        if (loading) {
            return (
                <View style={{ justifyContent: "center", marginTop: 15 }}>
                    <Text style={{ color: varibale.white, marginBottom: 5 }}>Please waite a second ...</Text>
                    <View style={{ flexDirection: "row", justifyContent: "space-evenly", alignItems: "center" }}>
                        <ActivityIndicator size="small" color={varibale.light} />
                        <ActivityIndicator size="large" color={varibale.white} />
                        <ActivityIndicator size="small" color={varibale.light} />
                    </View>
                </View>
            );
        }
        return null;
    }

    return (

        <ImageBackground source={require('../../assets/img/jj-ying-7JX0-bfiuxQ-unsplash.jpg')} resizeMode="cover" style={styles.bgImage}>

            <View style={styles.container}>
                <ScrollView style={{ flex: 1, height: "100%", width: "100%" }}>

                    <Animated.View style={[styles.homeImage,
                    {
                        opacity: transition.interpolate({
                            inputRange: [25, 50, 100],
                            outputRange: [0, 0.5, 0.9],
                            extrapolate: "clamp",
                        }),
                        transform: [
                            {
                                scale: transition.interpolate({
                                    inputRange: [0, 80],
                                    outputRange: [0.5, 1],
                                    extrapolate: "clamp",
                                })
                            },

                        ],
                    }]}>
                        <HomeImage />
                    </Animated.View>
                    <Text style={styles.title}>Plagiarism Cheker</Text>

                    <Animated.View style={[styles.formPlagiat,
                    {
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
                                }),
                            },

                        ],

                    }]}>
                        <View style={styles.inputPlagiatIcon}>
                            <FontAwesomeIcon icon={icon.faQuoteLeft} size={30} color="#ffffff99" />
                        </View>
                        <View style={[styles.InputContainer, styles.InputPlagiatContainer]}>
                            <TextInput
                                multiline
                                numberOfLines={8}
                                style={styles.InputPlagiat}
                                placeholder="Set Your Text"
                                onChangeText={text => setText(text)}
                                value={text}
                                placeholderTextColor="#ffffff55"
                            />
                        </View>
                        <TouchableOpacity style={[styles.btnOutLogin, styles.btnDocument]} onPress={handlePickDocument}>
                            <View >
                                <FontAwesomeIcon icon={icon.faFileAlt} size={30} color="#ffffff99" />
                            </View>
                            <Text style={styles.btnTextOutLogin} >  Select Document</Text>
                        </TouchableOpacity>

                        {loadingShow()}
                        <FormError errors={errors} />

                    </Animated.View>
                    <View style={styles.btnPlagiatContainer}>
                        <TouchableOpacity style={[styles.btnLogin, styles.btnCheckPlagiat]} onPress={handleSubmit}>
                            <Text style={styles.btnTextLogin} >CHECK</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.btnOutLogin, styles.btnResetPlagiat]} onPress={handleReset}>
                            <Text style={styles.btnTextOutLogin} >RESET</Text>
                        </TouchableOpacity>
                    </View>


                </ScrollView>
            </View>
        </ImageBackground>

    );
}
