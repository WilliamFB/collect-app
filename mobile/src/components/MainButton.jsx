import React from 'react';

import { Text, StyleSheet, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

export default props => {
    return (
        <View style={styles.button}>
            <RectButton style={styles.rect} onPress={props.pressFunction}>
                <Text style={styles.buttonText}>{props.text}</Text>
            </RectButton>
        </View>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'rgba(0, 0, 0, 0)',
        height: 60,
        borderRadius: 10,
        borderWidth: 1.2,
        borderColor: '#2e7d32',
        overflow: 'hidden',
        marginTop: 30
    },
    
    rect: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },

    buttonText: {
        flex: 1,
        justifyContent: 'center',
        textAlign: 'center',
        color: '#2e7d32',
        fontSize: 20
    }
});
