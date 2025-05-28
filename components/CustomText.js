import React from 'react';
import { Text } from 'react-native';

function CustomText(props){
    return (
        <Text style={{
            fontFamily: 'Poppins',
            fontSize: 16,
            color: 'white',
            textDecorationLine: props.decorationLine
        }}>
            {props.text}
        </Text>
    )
}

export default CustomText;