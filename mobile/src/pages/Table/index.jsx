import React, { useEffect, useState } from 'react';

import { View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';

import PointCard from '../../components/PointCard';
import MainButton from '../../components/MainButton';
import TopMenu from '../../components/TopMenu';

import api from '../../services/api';

export default () => {
    const [points, setPoints] = useState([]);
    const navigation = useNavigation();

    useEffect(() => {
        api.get('pontos-coleta').then(response => {
            setPoints(response.data);
        });
    }, []);

    function navigateToHome() {
        navigation.navigate('Home');
    }

    function navigateToRegister() {
       navigation.navigate('Register');
    }

    function navigateToPoint(point) {
        navigation.navigate('Point', point);
    }

    return (
        <View style={styles.container}>
            <TopMenu pressFunction={navigateToHome} />
            <View style={styles.middleContent}>
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
        minHeight: 200,
        borderWidth: 2,
        borderColor: '#2e7d32',
        backgroundColor: '#eaeaea'
    }
});