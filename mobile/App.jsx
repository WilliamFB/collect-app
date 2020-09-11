import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StatusBar, View, StyleSheet, Text } from 'react-native';
//import NavigationBar from 'react-native-navigation-bar-color';

import Routes from './src/routes';

export default function App() {

    
    
    return (
        <>
            <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent/>
            <Routes />
        </>
    )
}