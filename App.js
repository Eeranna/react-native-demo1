import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Button, Modal } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [courseGoals, setCourseGoals] = useState([]);

  function startAddGoalHandler() {
    setModalIsVisible(true);
  }

  function endGoalHandler() {
    setModalIsVisible(false);
  }

  function addGoalHandler(enteredGoalText) {
    setCourseGoals(currentCourseGoals => [
      ...currentCourseGoals, 
      {text: enteredGoalText, id: Math.random().toString()}
      ]);
      endGoalHandler();
  }

  function deleteGoalHandler(id) {
    console.log("DELETE");
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.id !== id);
    })
  }

  return (
    <>
    <StatusBar style="light"/>
    <View style={styles.appContainer}>
      <Button 
        title="Add New Goal" 
        color="#a065ec" 
        onPress={startAddGoalHandler}/>
      <GoalInput 
        visible={modalIsVisible} 
        onAddGoal={addGoalHandler} 
        onCancel={endGoalHandler}/>
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
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
   flex: 1,
   padding: 50, 
   paddingHorizontal: 16,
   marginTop: 20
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#5e0acc',
    width: '70%',
    marginRight: 8,
    padding: 8,
    marginTop: 100
  },
  galsContainer: {
    flex: 5
  }
});
