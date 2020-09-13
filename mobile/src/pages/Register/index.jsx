import React, { useState } from 'react';

import { View, StyleSheet, TextInput, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';

import MainButton from '../../components/MainButton';
import TopMenu from '../../components/TopMenu';

import api from '../../services/api';

export default () => {
    const navigation = useNavigation();

    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');

    const [warningMessage, setWarningMessage] = useState('');

    function navigateToTable() {
        navigation.navigate('Table');
    }

    function saveData() {
        api.post('pontos-coleta', { name, address, latitude, longitude }).then(response => {
            if(response.data.check){
                return navigateToTable();
            } else {
                return setWarningMessage(response.data.message);
            }
        });
    }

    return (
        <View style={styles.container}>
            <TopMenu pressFunction={navigateToTable} />
            <View style={styles.middleContent}>
                <ScrollView
                    style={{paddingHorizontal: 6}}
                    contentContainerStyle={{flexGrow: 1, justifyContent: 'center'}}
                >
                    <TextInput
                        style={styles.input}
                        placeholder="Nome"
                        maxLength={30}
                        onChangeText={text => setName(text)}
                        value={name}
                        placeholderTextColor="#9c9c9c"
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Endereço"
                        onChangeText={text => setAddress(text)}
                        value={address}
                        placeholderTextColor="#9c9c9c"
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Latitude"
                        maxLength={20}
                        onChangeText={text => setLatitude(text)}
                        value={latitude}
                        placeholderTextColor="#9c9c9c"
                        keyboardType="numeric"
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Longitude"
                        maxLength={20}
                        onChangeText={text => setLongitude(text)}
                        value={longitude}
                        placeholderTextColor="#9c9c9c"
                        keyboardType="numeric"
                    />
                </ScrollView>
                <Text style={styles.warning}>{warningMessage}</Text>
            </View>
            <MainButton text="Cadastrar" pressFunction={saveData}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 30,
        flexDirection: 'column',
        justifyContent: 'center'
    },

    middleContent: {
        flex: 1,
        justifyContent: 'center'
    },

    input: {
        marginVertical: 10,
        height: 50,
        borderColor: '#2e7d32',
        borderRadius: 5,
        borderWidth: 1,
        paddingHorizontal: 10,
        backgroundColor: '#eaeaea'
    },

    warning: {
        justifyContent: 'center',
        textAlign: 'center',
        fontSize: 17,
        marginTop: 8
    }
});