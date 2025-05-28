import { useState } from 'react';
import { StyleSheet, View, FlatList, Button, Image, Text } from 'react-native';
import { StatusBar  } from 'expo-status-bar';

import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import {useEffect} from 'react';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';
import CustomText from './components/CustomText'

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [loaded, error] = useFonts({
    'Jaro-Regular': require('./assets/fonts/Jaro-Regular.ttf'),
    'Poppins': require('./assets/fonts/Poppins-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [courseGoals, setCourseGoals] = useState([]);

  function startAddGoalHandler(){
    setModalIsVisible(true);
  };

  function endAddGoalHandler(){
    setModalIsVisible(false);
  }

  function addGoalHandler(enteredGoalText){
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, key: Math.random().toString()}
    ]);
    endAddGoalHandler();
  };

  function deleteGoalHandler(id){
    setCourseGoals(currentCourseGoals => {
      return currentCourseGoals.filter((goal) => goal.key !== id)
    }

    )
  };
  
  return (
    <>
    <StatusBar style='light'/>
    <View style={styles.appContainer}>
      <View style={styles.appIcon}>
        <Text style={styles.iconText}>Momentum</Text>
      </View>
      <View styles={styles.addNewGoalButton}>
        <Button title='Add new goal' color={'#6099A1'} onPress={startAddGoalHandler}/>
      </View>
      <GoalInput onAddGoal={addGoalHandler} isVisible={modalIsVisible} onCancel={endAddGoalHandler}/>
      <View style={styles.goalsContainer}>
        <FlatList data={courseGoals} renderItem={(itemData) => {
          return <GoalItem 
            text={itemData.item.text} 
            id={itemData.item.key} 
            onDeleteItem={deleteGoalHandler}
            />;
        }}/>
      </View>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex:1,
    paddingTop: 50,
    paddingHorizontal: 16,
    justifyContent: 'center',
    fontStyle: 'Poppins'
  },
  appIcon: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 22,
  },
  goalsContainer: {
    flex: 9,
    marginTop: 18
  },
  addNewGoalButton: {
    width: 140
  },
  iconText: {
    fontSize: 30,
    fontFamily: 'Jaro-Regular',
    color: 'white'
  }
});
