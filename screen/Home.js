import { Text, SafeAreaView, StyleSheet, View, Button } from 'react-native';
import React from 'react';

import { COLORS } from '../components/Color';
import { Task } from '../components/Task';
import { ButtonPrototype } from '../components/ButtonPrototype'
import { Title } from '../components/Title';

import { useNavigation } from "@react-navigation/native";

export function Home() {
  // Handlers for navigation
  const navigation = useNavigation();
  const gotoAddNewHandler = () => navigation.navigate("NewToDo");

  return (
    <View style={styles.container}>
      {/* Today's Tasks */}
      <View style={styles.taskWrapper}>
        <Title text={"My Todo List"}/>

        <View style={styles.items}>
          <Task text={'task one'} />
          <Task text={'task two'} />
          <Task text={'task three'} />
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <ButtonPrototype fn={gotoAddNewHandler} icon='create' label='Add New Todo' Bsize={25}/>
      </View>
    </View>
  );
}
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: COLORS.BBC,
      justifyContent: 'space-between', 
      paddingBottom: 30,
    },
    taskWrapper: {
      paddingHorizontal: 20,
    },
    items: {
      // ...
    },
    buttonContainer: {
      paddingHorizontal: 20, 
      paddingBottom: 20, 
    },
  });