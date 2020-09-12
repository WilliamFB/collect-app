import React from 'react';

import { View, Text, StyleSheet, Image } from 'react-native';

export default () => {
    return (
        <View style={styles.logo}>
            <Image style={styles.image}source={require('../assets/icon.png')}/>
            <Text style={styles.title}>Collector</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        width: 120,
        height: 120,
        marginRight: 15
    }, 
    
    title: {
        color: '#595858',
        fontWeight: "bold",
        fontSize: 30,
        maxWidth: 150,
        marginTop: 50
    },
    
    logo: {
        flexDirection: 'row',
        justifyContent: 'center'
    }
});