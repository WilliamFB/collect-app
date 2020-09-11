import React from 'react';

import { View, Image, Text, StyleSheet } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

export default () => {
    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <View style={styles.logo}>
                    <Image style={styles.image}source={require('../../assets/icon.png')}/>
                    <Text style={styles.title}>Collector</Text>
                </View>
            </View>          
            <RectButton style={styles.button} onPress={() => {}}>
                <Text style={styles.buttonText}>Entrar</Text>
            </RectButton>
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

    container: {
        flex: 1,
        padding: 30,
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: '#d6d5d2'
    },
    
    logo: {
        flexDirection: 'row',
        justifyContent: 'center'
    },

    top: {
        flex: 1,
        justifyContent: 'center'
    },

    button: {
        backgroundColor: '#2e7d32',
        height: 60,
        flexDirection: 'row',
        borderRadius: 10,
        overflow: 'hidden',
        alignItems: 'center',
        marginTop: 30
    },
    
    buttonText: {
        flex: 1,
        justifyContent: 'center',
        textAlign: 'center',
        color: '#FFF',
        fontSize: 20
    }
});