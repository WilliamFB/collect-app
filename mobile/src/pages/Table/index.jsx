import React, { useEffect, useState } from 'react';

import { View, StyleSheet, TextInput } from 'react-native';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';

import PointCard from '../../components/PointCard';
import MainButton from '../../components/MainButton';
import TopMenu from '../../components/TopMenu';

import api from '../../services/api';

export default () => {
    const navigation = useNavigation();
    const [points, setPoints] = useState([]);
    const [searchName, setSearchName] = useState('');
    const isFocused = useIsFocused();

    useEffect(() => {
        api.get('pontos-coleta').then(response => {
            setPoints(response.data);
        });
    }, [isFocused]);

    function navigateToHome() {
        navigation.navigate('Home');
    }

    function navigateToRegister() {
        navigation.navigate('Register');
    }

    function navigateToPoint(point) {
        navigation.navigate('Point', point);
    }

    function searchPoints(text) {
        setSearchName(text);

        api.get(`pontos-coleta/${text}`).then(response => {
            setPoints(response.data);
        });
    }

    return (
        <View style={styles.container}>
            <TopMenu pressFunction={navigateToHome} />
            <View style={styles.middleContent}>
                <TextInput
                    style={styles.input}
                    placeholder="Pesquisar"
                    maxLength={30}
                    onChangeText={text => searchPoints(text)}
                    value={searchName}
                    placeholderTextColor="#9c9c9c"
                />
                <View style={styles.cardsList}>
                    <ScrollView>
                        {points.map(point => (
                            <PointCard 
                                onClick={() => navigateToPoint(point)}
                                key={point.name}
                                name={point.name}
                                address={point.address}
                            />
                        ))}
                    </ScrollView>
                </View>
            </View>
            <MainButton text="->   Criar Ponto" pressFunction={navigateToRegister}/>
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

    middleContent: {
        flex: 1,
        justifyContent: 'center'
    },

    cardsList: {
        flex: 1,
        marginTop: 15,
        minHeight: 50,
        borderWidth: 1,
        borderRadius: 4,
        borderColor: '#2e7d32',
        backgroundColor: '#eaeaea'
    },

    input: {
        marginVertical: 10,
        height: 40,
        borderColor: '#2e7d32',
        borderRadius: 5,
        borderWidth: 1,
        paddingHorizontal: 10,
        backgroundColor: '#eaeaea'
    }
});
