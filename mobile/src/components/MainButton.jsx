import React from 'react';

import { Text, StyleSheet } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

export default props => {
    return (
        <RectButton style={styles.button} onPress={props.pressFunction}>
            <Text style={styles.buttonText}>{props.text}</Text>
        </RectButton>
    )
}

const styles = StyleSheet.create({
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
    }
});
