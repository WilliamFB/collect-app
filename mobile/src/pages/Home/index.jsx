import React from 'react';

import { View, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import MainButton from '../../components/MainButton';

export default () => {
    const navigation = useNavigation();

    function navigateToTable() {
        navigation.navigate('Table');
    }

    return (
        <View style={styles.container}>
            <View style={styles.center}>
                <Image style={styles.logo} source={require('../../assets/icon.png')}/>
            </View>
            <MainButton text="Entrar" pressFunction={navigateToTable}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 30,
        flexDirection: 'column',
        justifyContent: 'center'
    },

    logo: {
        resizeMode: "stretch",
        height: 120,
        width: 240
    },

    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
