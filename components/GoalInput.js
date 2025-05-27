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
                {/* <Image source={}/> */}
                <TextInput
                    style={styles.textInputContainer}
                    placeholder='Your course goal'
                    onChangeText={goalInputHandler}
                    value={enteredGoalText}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title="Add Goal" onPress={addGoalHandler}/>
                    </View>
                    <View style={styles.button}>
                        <Button title="Cancel" onPress={props.onCancel}/>
                    </View>
                </View>
                
            </View>
        </Modal>
        
    )
};

export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 24,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc',
        flex: 1,
        padding: 16
    },
    textInputContainer: {
        borderWidth: 1,
        borderColor: '#cccccc',
        width: '100%',
        color: 'gray',
        fontWeight: 400,
        padding: 8
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