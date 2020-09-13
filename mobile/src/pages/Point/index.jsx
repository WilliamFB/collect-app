import React, { useState } from 'react';

import { View, StyleSheet, Text, ScrollView, TextInput } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import MainButton from '../../components/MainButton';
import TopMenu from '../../components/TopMenu';

import api from '../../services/api';

export default () => {
    const navigation = useNavigation();
    const route = useRoute();

    const [name, setName] = useState(route.params.name);
    const [address, setAddress] = useState(route.params.address);
    const [latitude, setLatitude] = useState(String(route.params.latitude));
    const [longitude, setLongitude] = useState(String(route.params.longitude));

    const [warningMessage, setWarningMessage] = useState('');

    function navigateToTable() {
        navigation.navigate('Table');
    }

    function editData() {
        api.put(`pontos-coleta/${route.params.name}`, { name, address, latitude, longitude }).then(response => {
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
                    <Text style={styles.title}>{route.params.name}</Text>
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
            <MainButton text="Editar" pressFunction={editData}/>
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

    input: {
        marginVertical: 10,
        height: 50,
        borderColor: '#2e7d32',
        borderRadius: 5,
        borderWidth: 1,
        paddingHorizontal: 10,
        backgroundColor: '#eaeaea'
    },

    title: {
        color: '#595858',
        justifyContent: 'center',
        textAlign: 'center',
        fontWeight: "bold",
        fontSize: 17,
        paddingVertical: 10
    },

    warning: {
        justifyContent: 'center',
        textAlign: 'center',
        fontSize: 17,
        marginTop: 8
    }
});