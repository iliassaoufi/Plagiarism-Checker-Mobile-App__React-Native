
import React from 'react'
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function FormError({ errors }) {
    return (
        <View style={styles.full}>
            {errors.length > 0 &&
                errors.map((error, index) => (
                    <Text
                        key={index + "_" + error}
                        style={styles.error}>
                        {error} *
                    </Text>
                ))
            }
        </View>
    );
}


const styles = StyleSheet.create({
    full: {
        width: "100%",
        marginTop: 10,
    },
    error: {
        width: "100%",
        color: "#df2f2f",
        fontSize: 13,
        textAlign: 'center',
    },

});

