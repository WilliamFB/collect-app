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
        marginHorizontal: 3,
        marginVertical: 1.8,
        padding: 10,
        borderRadius: 7,
        backgroundColor: "#fff",
        alignItems: 'flex-start',
        justifyContent: 'center',
    },

    name: {
        fontSize: 18
    },

    address: {
        fontSize: 12,
        color: '#616161'
    }
});
