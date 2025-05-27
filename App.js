import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from 'react-native';

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  function goalInputHandler(enteredText){
    setEnteredGoalText(enteredText);
  };

  function addGoalHandler(){
    setCourseGoals(currentCourseGoals => [
      ...currentCourseGoals,
      {text: enteredGoalText, key:Math.random().toString()}
    ]);
  };
  
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInputContainer}
          placeholder='Your course goal'
          onChangeText={goalInputHandler}
        />
        <Button title="Add Goal" onPress={addGoalHandler}/>
      </View>
      <View style={styles.goalsContainer}>
        <FlatList data={courseGoals} renderItem={(itemData) => {
          return (
          <View style={styles.goalItem}>
            <Text style={styles.goalText}>
              {itemData.item}
            </Text>
          </View>
          )
        }}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex:1,
    paddingTop: 50,
    paddingHorizontal: 16
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
    flex: 1,
  },
  textInputContainer: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    color: 'gray',
    fontWeight: 400,
    marginRight: 8,
    padding: 8
  },
  goalsContainer: {
    flex: 9,
  },
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
  },
  goalText: {
    color: 'white'
  }
});
