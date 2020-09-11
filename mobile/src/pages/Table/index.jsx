import React from 'react';

import { View, Image, Text, StyleSheet } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

export default () => {
    return (
        <View style={styles.container}>
            <View style={styles.logo}>
                <Image style={styles.image}source={require('../../assets/icon.png')}/>
                <Text style={styles.title}>Collector</Text>
            </View>
            <View style={styles.middleContent}>

            </View>
            <RectButton style={styles.button} onPress={() => {}}>
                <Text style={styles.buttonText}>Cadastrar</Text>
            </RectButton>
        </View>
    )
}

const styles = StyleSheet.create({
    logo: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginTop: 15
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
    },

    container: {
        flex: 1,
        padding: 30,
        flexDirection: 'column',
        justifyContent: 'center',
    },

    middleContent: {
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