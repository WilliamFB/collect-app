import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './pages/Home';
import Point from './pages/Point';
import Table from './pages/Table';
import Register from './pages/Register';

const AppStack = createStackNavigator();

export default () => {
    return (
        <NavigationContainer>
            <AppStack.Navigator
                headerMode="none"
                screenOptions={{
                    cardStyle: {backgroundColor: '#ededed'},
                    transitionSpec: {open: config, close: config}
                }}
            >
                <AppStack.Screen name="Home" component={Home} />
                <AppStack.Screen name="Point" component={Point} />
                <AppStack.Screen name="Table" component={Table} />
                <AppStack.Screen name="Register" component={Register} />
            </AppStack.Navigator>
        </NavigationContainer>
    );
}

const config = {
    animation: 'spring',
    config: {
        timing: 1000
    }
}
