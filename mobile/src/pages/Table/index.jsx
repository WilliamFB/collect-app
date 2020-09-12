import React from 'react';

import { View, StyleSheet, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import PointCard from '../../components/PointCard';
import MainButton from '../../components/MainButton';
import TopMenu from '../../components/TopMenu';

export default () => {
    const navigation = useNavigation();

    function navigateHome() {
        navigation.navigate('Home');
     }

    return (
        <View style={styles.container}>
            <TopMenu pressFunction={navigateHome} />
            <View style={styles.middleContent}>

            <View style={styles.cardsList}>
                <FlatList
                    data={[
                    {key: 'Devin'},
                    {key: 'Dan'},
                    {key: 'Dominic'},
                    {key: 'Jackson'},
                    {key: 'James'},
                    {key: 'Joel'},
                    {key: 'John'},
                    {key: 'Jillian'},
                    {key: 'Jimmy'},
                    {key: 'Julie'},
                    ]}
                    renderItem={({item}) => <PointCard name={item.key}/>}
                />
            </View>

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
    },

    cardsList: {
        marginTop: 15,
        borderWidth: 2,
        borderColor: '#2e7d32',
        backgroundColor: '#eaeaea'
    }
});