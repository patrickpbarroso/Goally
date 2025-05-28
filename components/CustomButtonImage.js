import React from 'react';
import { TouchableOpacity, StyleSheet, Image } from 'react-native';

function CustomButtonImage(props){
    const imgPath = props.buttonIcon

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
            <Image source={imgPath}/>
        </TouchableOpacity>
    )
}

export default CustomButtonImage;

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