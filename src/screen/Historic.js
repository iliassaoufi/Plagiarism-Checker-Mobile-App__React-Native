import React from 'react'
import { ImageBackground, ScrollView, Text, View, TouchableOpacity, Animated } from 'react-native';
import { useSelector, useDispatch } from 'react-redux'
import { setHistoric, deleteFromHistoric, setResult } from '../redux/PlagiatSlice'
import axios from "axios";

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import * as icon from '@fortawesome/free-solid-svg-icons'
import styles from "../styles/Style"
import { varibale } from "../styles/GlobalStyle"
import Donut from '../components/utils/Donut'


export default function Historic({ navigation }) {
    const historic = useSelector((state) => state.plagiarism.historic);
    const dispatch = useDispatch();

    /**************** */
    const transition = React.useRef(new Animated.Value(0)).current;
    Animated.spring(transition, {
        delay: 50,
        toValue: 100,
        useNativeDriver: true,
    }).start()
    /************************ */

    React.useEffect(() => {
        getHistoricFromAPI()
    }, [])
    const getHistoricFromAPI = async () => {
        try {
            const response = await axios.get("/user-plagiat-Checks");
            const result = response.data;
            dispatch(setHistoric(result));
            console.log(result);
            return true;
        }
        catch (err) {
            //console.log(err);
        }
    }
    //getHistoricFromAPI();
    //console.log(historic);
    if (historic.length < 0) {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Loading ... </Text>
            </View>
        );
    }
    const renderList = () => {
        if (historic.length < 1)
            return null;
        const data = historic.slice(-historic.length).reverse();
        return data.map((item, index) => (
            <HistoricCard key={item.id} item={item} navigation={navigation} index={index} />
        ))
    }

    return (
        <ImageBackground source={require('../../assets/img/jj-ying-7JX0-bfiuxQ-unsplash.jpg')} resizeMode="cover" style={styles.bgImage}>

            <View style={[styles.container]}>
                <ScrollView style={{ width: "100%" }}>
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
                            History
                        </Text>
                        <View style={styles.headerIcon} >
                            <FontAwesomeIcon icon={icon.faHistory} size={40} color={varibale.blueOp} />
                        </View>
                    </Animated.View>
                    <Animated.View style={[styles.listContainer,
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
                                    outputRange: [100, 0],
                                    extrapolate: "clamp",
                                }),
                            },

                        ],
                    }
                    ]}>
                        {
                            renderList()
                        }
                    </Animated.View>
                </ScrollView>
            </View>

        </ImageBackground >

    );
}

function HistoricCard({ item, navigation, index }) {
    const dispatch = useDispatch();

    /**************** */
    const transition = React.useRef(new Animated.Value(0)).current;
    Animated.spring(transition, {
        delay: 0 + 150 * Math.sqrt(index),
        toValue: 100,
        useNativeDriver: true,
    }).start()
    /************************ */

    const handleClickShow = () => {
        // console.log("shhhhhhhhhhhow");
        dispatch(setResult(item));
        navigation.navigate('PlagiatDetail')
    }
    const handleClickDelete = () => {
        dispatch(deleteFromHistoric(item.id));
        const url = `/plagiat/${item.id}`;
        axios.delete(url);
    }
    const ispair = () => {
        return index % 2 == 0 ? 200 : -200
    }

    return (
        <Animated.View style={[styles.hestoryCardContainer,
        {
            opacity: transition.interpolate({
                inputRange: [25, 50, 100],
                outputRange: [0, 0.5, 0.98],
                extrapolate: "clamp",
            }),
            transform: [
                {
                    translateX: transition.interpolate({
                        inputRange: [0, 100],
                        outputRange: [ispair(), 0],
                        extrapolate: "clamp",
                    }),
                },

            ],
        }
        ]}>
            <View style={styles.DotutContainerCard}>
                <Donut percentage={item.plagiat * 100} color={item.plagiat > 0.61 ? varibale.red : varibale.green} delay={0} max={100} radius={30} />
            </View>
            <View style={styles.contentCard}>
                <Text style={styles.contentCardText}>{item.result[0][1].slice(0, 55) + "..."}</Text>

                <View style={styles.historyCardBtn}>
                    <TouchableOpacity style={styles.historyCardBtnDelete} onPress={handleClickDelete} >
                        <FontAwesomeIcon icon={icon.faTrashAlt} size={21} color={varibale.red} />

                    </TouchableOpacity>
                    <TouchableOpacity style={styles.historyCardBtnShow} onPress={handleClickShow} >
                        <FontAwesomeIcon icon={icon.faCompress} size={21} color={varibale.blueOp} />
                        <Text style={styles.historyCardBtnShowText}> More</Text>
                    </TouchableOpacity>
                </View>

            </View>

        </Animated.View>
    );

}