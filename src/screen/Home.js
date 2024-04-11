import { Text, SafeAreaView, StyleSheet, View, FlatList } from 'react-native';
import React, { useState, useEffect } from 'react';

import { loadData } from '../datamodel/mydata';
import { COLORS } from '../components/Color';
import { Task } from '../components/Task';
import { ButtonPrototype } from '../components/ButtonPrototype'
import { Title } from '../components/Title';
import { deleteTodo,updateData } from '../datamodel/mydata';

import { useNavigation } from "@react-navigation/native";

//import AsyncStorage from "@react-native-async-storage/async-storage";
export function Home() {
  //AsyncStorage.clear();
  const [todos, setTodos] = useState([
    { id: 1, title: 'First Task', description: 'Description of first task', completed: false },
  ]);
  const navigation = useNavigation();

  useEffect(() => {
    const loadTodos = async () => {
      const loadedTodos = await loadData();
      if (loadedTodos && loadedTodos.Todos) {
        setTodos(loadedTodos.Todos); // Ensure this matches the data structure returned by loadData
      }
    };

    const willFocusSubscription = navigation.addListener('focus', loadTodos);

    loadTodos();

    return willFocusSubscription;
  }, [navigation]);

  const gotoAddNewHandler = () => navigation.navigate("NewToDo");
  console.log(todos);

  // The renderItem function for FlatList
  const renderTodoItem = ({ item }) => {
    return (
      <Task
        id={item.id}
        text={item.title}
        description={item.description}
        completed={item.completed}
        onToggleComplete={toggleComplete}
        onDelete={deleteTodoID}
      />
    );
  };

  const toggleComplete = async (id) => {
    // Determine the new completed status
    const currentTodo = todos.find(todo => todo.id === id);
    const newCompletedStatus = !currentTodo.completed;
  
    // Update the local state
    const newTodos = todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, completed: newCompletedStatus };
      }
      return todo;
    });
    setTodos(newTodos);
  
    // Update the data in AsyncStorage
    await updateData(id, newCompletedStatus);
  };


  const deleteTodoID = async (id) => {
    await deleteTodo(id);
    const updatedTodos = await loadData(); 
    setTodos(updatedTodos.Todos || []); 
  };

return (
    <View style={styles.container}>
      <View style={styles.taskWrapper}>
        <Title text={"My Todo List"}/>
        <FlatList
          data={todos}
          renderItem={renderTodoItem}
          keyExtractor={item => item.id.toString()}
          style={styles.items}
        />
      </View>
      <View style={styles.buttonContainer}>
        <ButtonPrototype fn={gotoAddNewHandler} icon='add' label='Add New Todo' Bsize={25}/>
      </View>
    </View>
  );
}
  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.BBC,
  },
  taskWrapper: {
    flex: 1, 
    paddingHorizontal: 20,
  },
  buttonContainer: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
});