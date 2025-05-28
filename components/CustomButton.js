import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

import CustomText from './CustomText';

function CustomButton(props){
    return (
        <TouchableOpacity 
        style={{
            backgroundColor: props.buttonColor,
            paddingVertical: 12,
            paddingHorizontal: 24,
            borderRadius: 8,
            alignItems: 'center',
        }} 
        onPress={props.onPress}
        >
            <CustomText style={styles.buttonText} text={props.buttonTitle}/>
        </TouchableOpacity>
    )
}

export default CustomButton;

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#007AFF',
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 8,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
        fontFamily: 'Jaro-Regular',
    },
})