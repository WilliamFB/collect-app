import React, { useState } from 'react';

import { View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import MainButton from '../../components/MainButton';
import TopMenu from '../../components/TopMenu';

import api from '../../services/api';

export default () => {
    const navigation = useNavigation();

    function navigateToTable() {
        navigation.navigate('Table');
    }

    return (
        <View style={styles.container}>
            <TopMenu pressFunction={navigateToTable} />
            <View style={styles.middleContent}>
                
            </View>
            <MainButton text="Cadastrar" pressFunction={() => {}}/>
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

    middleContent: {
        flex: 1,
        justifyContent: 'center'
    }
});