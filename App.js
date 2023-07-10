import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  function addGoalHandler(enteredGoalText) {
    setCourseGoals(currentCourseGoals => [
      ...currentCourseGoals, 
      {text: enteredGoalText, id: Math.random().toString()}
      ]);
  }

  function deleteGoalHandler(id) {
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.id !== id);
    })
  }

  return (
    <View style={styles.appContainer}>
      <GoalInput onAddGoal={addGoalHandler} />
      <View style={styles.galsContainer}>
        <FlatList data={courseGoals} renderItem={(itemData) => {
          return (
            <GoalItem 
              text={itemData.item.text} 
              id={itemData.item.id} 
              onDeleteItem={deleteGoalHandler}/>
          )
        }} 
        keyExtractor={(item, index) => {
          return item.id;
        }}
        alwaysBounceVertical={false} />
      </View>
      <View 
        style={{ 
          padding: 50, 
          flexDirection: 'row', 
          width: '80%', 
          height: 300,
          justifyContent: 'space-between',
          alignItems: 'stretch'}}>
      <View
          style={{
            backgroundColor: 'red',
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Text>1</Text>
        </View>
        <View
          style={{
            backgroundColor: 'blue',
            flex: 2,
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Text>2</Text>
        </View>
        <View
          style={{
            backgroundColor: 'green',
            flex: 3,
            justifyContent: 'center',
            alignItems: 'center'
        }}
        >
          <Text>3</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
   flex: 1,
   padding: 50, 
   paddingHorizontal: 16
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    marginRight: 8,
    padding: 8
  },
  galsContainer: {
    flex: 5
  }
});
