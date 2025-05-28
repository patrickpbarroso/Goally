import { StyleSheet, View, Text, Pressable } from "react-native";

import CustomText from './CustomText'

function GoalItem(props){
    return (
        <View style={styles.goalItem}>
            <Pressable 
                android_ripple={{color: '#210644'}}
                onPress={props.onDeleteItem.bind(this, props.id)}
                style={({pressed}) => pressed && styles.pressedItem}
            >
                <CustomText text={props.text}/>
            </Pressable>
        </View>
        
        
    );
}

export default GoalItem;

const styles = StyleSheet.create({
    goalItem: {
        marginHorizontal: 8,
        marginVertical: 3,
        paddingLeft: 20,
        paddingVertical: 15,
        borderRadius: 6,
        backgroundColor: '#3A4344',
    },
    pressedItem: {
        opacity: 0.5
    },
})