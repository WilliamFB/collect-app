import React from 'react';

import { Text, StyleSheet, TouchableOpacity } from 'react-native';

export default props => {
    return (
        <TouchableOpacity onPress={props.onClick} style={styles.view}>
            <Text style={styles.name}>{props.name}</Text>
            <Text style={styles.address}>{props.address}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    view: {  
        padding: 10,
        borderBottomWidth: 1,
        borderColor: '#2e7d32',
        alignItems: 'flex-start',
        justifyContent: 'center',
        backgroundColor: '#e3e3e3'
    },

    name: {
        fontSize: 18
    },

    address: {
        fontSize: 12,
        color: '#616161'
    }
});
