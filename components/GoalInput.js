import { useState } from 'react';
import {StyleSheet, View, TextInput, Button, Modal, Image} from 'react-native';

function GoalInput(props){
    const [enteredGoalText, setEnteredGoalText] = useState('');

    function goalInputHandler(enteredText){
        setEnteredGoalText(enteredText);
    };

    function addGoalHandler(){
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText('');
    };

    return (
        <Modal visible={props.isVisible} animationType='slide'>
            <View style={styles.inputContainer}>
                <Image style={styles.image} source={require('../assets/images/goal.png')}/>
                <TextInput
                    style={styles.textInputContainer}
                    placeholder='Your course goal'
                    onChangeText={goalInputHandler}
                    value={enteredGoalText}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title="Cancel" onPress={props.onCancel} color='#E0604F'/>
                    </View>
                    <View style={styles.button}>
                        <Button title="Add Goal" onPress={addGoalHandler} color='#40B86E'/>
                    </View>
                </View>
                
            </View>
        </Modal>
        
    )
};

export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#546162',
    },
    image: {
        width: 100,
        height: 100,
        margin: 20,
    },
    textInputContainer: {
        borderWidth: 1,
        borderColor: '#859A9C',
        backgroundColor: '#859A9C',
        color: '#546162',
        borderRadius: 6,
        width: '100%',
        color: '3A4344',
        fontWeight: 400,
        padding: 16,
        fontFamily: 'Poppins'
    },
    buttonContainer: {
        flexDirection: 'row',
        marginTop: 16,
    },
    button: {
        width: 100,
        marginHorizontal: 8
    }
})