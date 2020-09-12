import React from 'react';

import { View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Logo from '../../components/Logo';
import MainButton from '../../components/MainButton';

export default () => {
    const navigation = useNavigation();

    function navigateTable() {
       navigation.navigate('Table');
    }

    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <Logo />
            </View>
            <MainButton text="Entrar" pressFunction={navigateTable}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 30,
        flexDirection: 'column',
        justifyContent: 'center',
    },

    top: {
        flex: 1,
        justifyContent: 'center'
    }
});