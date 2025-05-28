import { StyleSheet, View, Text, Pressable, Image } from "react-native";

import CustomText from './CustomText'
import CustomButtonImage from './CustomButtonImage';

function GoalItem(props){
    return (
        <View style={styles.goalItem}>
            <CustomText text={props.text}/>
            <View style={styles.itemIcons}>
                <Pressable 
                    android_ripple={{color: '#546162'}}
                    onPress={props.onDeleteItem.bind(this, props.id)}
                    style={({pressed}) => pressed && styles.pressedItem}
                >
                    <Image style={styles.itemIcon} source={require('../assets/images/done.png')}/>
                </Pressable>
                <Pressable 
                    android_ripple={{color: '#546162'}}
                    onPress={props.onDeleteItem.bind(this, props.id)}
                    style={({pressed}) => pressed && styles.pressedItem}
                >
                    <Image style={styles.itemIcon} source={require('../assets/images/trash.png')}/>
                </Pressable>
            </View>
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
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    pressedItem: {
        opacity: 0.5
    },
    itemIcons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    itemIcon: {
        marginHorizontal: 20
    }
})