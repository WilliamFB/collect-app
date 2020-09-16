import React from 'react';

import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

export default props => {
    return (
        <View style={styles.top}>
            <TouchableOpacity onPress={props.pressFunction}>
                <Feather name="arrow-left" size={25} color="#2e7d32" />
            </TouchableOpacity>
            <Image style={styles.logo} source={require('../../src/assets/icon.png')}/>
        </View>
    );
}

const styles = StyleSheet.create({
    top: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    logo: {
        resizeMode: "stretch",
        width: 100,
        height: 45
    }
});
