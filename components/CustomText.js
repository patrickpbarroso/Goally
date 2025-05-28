import React from 'react';
import { Text, StyleSheet } from 'react-native';

function CustomText(props){
    return (
        <Text style={styles.text}>
            {props.text}
        </Text>
    )
}

const styles = StyleSheet.create({
    text: {
        fontFamily: 'Poppins',
        fontSize: 16,
        color: 'white',
    }
});

export default CustomText;