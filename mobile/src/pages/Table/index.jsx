import React from 'react';

import { View, Image, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

import PointCard from '../../components/PointCard';

export default () => {
    const navigation = useNavigation();

    function navigateHome() {
        navigation.navigate('Home');
     }

    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <TouchableOpacity style={styles.arrow} onPress={navigateHome}>
                    <Feather name="arrow-left" size={25} color="#2e7d32" />
                </TouchableOpacity>
                <View style={styles.logo}>
                    <Image style={styles.image}source={require('../../assets/icon.png')}/>
                    <Text style={styles.title}>Collector</Text>
                </View>
            </View>
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
            <RectButton style={styles.button} onPress={() => {}}>
                <Text style={styles.buttonText}>Cadastrar</Text>
            </RectButton>
        </View>
    )
}

const styles = StyleSheet.create({
    top: {
        flexDirection: 'row',
        justifyContent: 'space-between',
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
    },

    cardsList: {
        marginTop: 15,
        borderWidth: 2,
        borderColor: '#2e7d32',
        backgroundColor: '#eaeaea'
    }
});