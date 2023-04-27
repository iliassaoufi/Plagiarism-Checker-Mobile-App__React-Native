import React from "react";
import { ImageBackground, Text, View, ScrollView, TouchableOpacity, Animated } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import * as icon from '@fortawesome/free-solid-svg-icons'
import styles from "../styles/Style"
import { varibale } from "../styles/GlobalStyle"
import Donut from '../components/utils/Donut'


export default function PlagiatDetail({ navigation }) {
    const plagiatResult = useSelector((state) => state.plagiarism.result);
    //console.log(plagiatResult);
    /**************** */
    const transition = React.useRef(new Animated.Value(0)).current;
    Animated.spring(transition, {
        delay: 250,
        toValue: 100,
        useNativeDriver: true,
    }).start()
    /************************ */

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
                                    outputRange: [-100, 0],
                                    extrapolate: "clamp",
                                }),
                            },

                        ],

                    }]} >
                        <TouchableOpacity style={styles.headerGoBack} onPress={() => { navigation.goBack() }} >
                            <FontAwesomeIcon icon={icon.faArrowLeft} size={20} color={varibale.white} />
                        </TouchableOpacity>
                        <Text style={styles.headerTitle}>
                            Result Details
                        </Text>
                    </Animated.View>

                    <ResultHeader result={plagiatResult} />
                    <ResultDetail result={plagiatResult} />

                </ScrollView>
            </View>
        </ImageBackground>
    );
}

function ResultHeader({ result }) {

    /**************** */
    const transition = React.useRef(new Animated.Value(0)).current;
    Animated.spring(transition, {
        delay: 250,
        toValue: 100,
        useNativeDriver: true,
    }).start()
    /************************ */

    return (
        <Animated.View style={[styles.DetailHeadercontainer,
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
        }]}>
            <View style={styles.DonutHeaderContainer}>
                <Donut
                    percentage={result.plagiat * 100}
                    color={result.plagiat > 0.61 ? varibale.red : varibale.green}
                    delay={0}
                    max={100}
                    radius={75}
                    strokeWidth={10} />
            </View>
            <View style={styles.InfoDetailHeaderContainer}>
                <View style={styles.InfoTextContainer}>

                    <FontAwesomeIcon icon={icon.faFileAlt} size={25} color={varibale.blueOp} />
                    <Text style={styles.InfoDetailHeader} >
                        Total checked is {result.result.length}
                    </Text>
                </View>
                <View style={styles.InfoTextContainer}>

                    <FontAwesomeIcon icon={icon.faTimes} size={25} color={varibale.red} />
                    <Text style={styles.InfoDetailHeader} >
                        Plagiat sentence is {Math.floor(result.plagiat * 100)}%
                    </Text>
                </View>
                <View style={styles.InfoTextContainer}>
                    <FontAwesomeIcon icon={icon.faCheck} size={25} color={varibale.green} />
                    <Text style={styles.InfoDetailHeader} >
                        Unique sentence is {100 - Math.floor(result.plagiat * 100)}%
                    </Text>
                </View>

            </View>
        </Animated.View>
    );
}
function ResultDetail({ result }) {
    return (
        <View style={{ paddingBottom: 90 }} >

            {
                result.result.map((item, index) => {
                    return <ResultCard key={index} query={item} index={index} />
                })
            }
        </View>
    );
}

function ResultCard(props) {
    const [query, setQuery] = React.useState(props.query);
    // console.log("++++++++++++++++++++++++");
    //console.log(query);

    /**************** */
    const transition = React.useRef(new Animated.Value(0)).current;
    Animated.spring(transition, {
        delay: 250 + 250 * Math.sqrt(props.index),
        toValue: 100,
        useNativeDriver: true,
    }).start()
    /************************ */
    const ispair = () => {
        return props.index % 2 == 0 ? 200 : -200
    }

    return (
        <Animated.View style={[styles.queryCardQuantainer,
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
        }]}>
            <View style={{ flexDirection: "row", alignItems: "center", height: 30 }}>
                <FontAwesomeIcon
                    icon={query[2] ? icon.faTimes : icon.faCheck} size={22}
                    color={query[2] ? varibale.red : varibale.green}
                />
                <Text style={styles.queryCardTitle}>
                    {query[2] ? "Plagiat" : "Unique"} - {Math.floor(query[0] * 100)}%
                </Text>
            </View>
            <Text style={styles.queryCardText}>{query[1]}</Text>
        </Animated.View>
    );
}

