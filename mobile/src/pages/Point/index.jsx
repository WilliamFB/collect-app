import React, { useState } from 'react';

import { View, StyleSheet, Text } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import MainButton from '../../components/MainButton';
import TopMenu from '../../components/TopMenu';

import api from '../../services/api';

export default props => {
    const navigation = useNavigation();
    const route = useRoute();

    function navigateToTable() {
        navigation.navigate('Table');
    }

    return (
        <View style={styles.container}>
            <TopMenu pressFunction={navigateToTable} />
            <View style={styles.middleContent}>
                <Text>{route.params.name}</Text>
                <Text>{route.params.address}</Text>
            </View>
            <MainButton text="Editar" pressFunction={() => {}}/>
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