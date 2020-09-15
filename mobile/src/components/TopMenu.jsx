import React from 'react';

import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

export default props => {
    return (
        <View style={styles.top}>
            <TouchableOpacity style={styles.arrow} onPress={props.pressFunction}>
                <Feather name="arrow-left" size={25} color="#2e7d32" />
            </TouchableOpacity>
            <View style={styles.logo}>
                <Image style={styles.image}source={require('../assets/icon.png')}/>
                <Text style={styles.title}>Collector</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    top: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    arrow: {
        marginTop: 15
    },

    logo: {
        flexDirection: 'row',
        marginTop: 10
    },

    image: {
        width: 60,
        height: 60,
        marginRight: 15
    }, 

    title: {
        color: '#595858',
        fontWeight: "bold",
        fontSize: 15,
        maxWidth: 150,
        marginTop: 25
    }
});
