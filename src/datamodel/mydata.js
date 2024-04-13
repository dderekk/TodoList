// this data save file, can be use many times for other project
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Title } from "../components/Title";

const key = "things-to-do";
const defualtData = { Todos: [] };

export const loadData = async () =>{
    try{
        const str = await AsyncStorage.getItem(key);
        if(str != null){
            const myData = JSON.parse(str);
            return myData;
        }
        return defualtData;
    }catch(e){
        console.error("Error in LoadData:", e);
        return defualtData;
    }
}

export const saveData = async (newTodo) => {
    try {
      const loadedTodos = await loadData();
      let updatedTodos = loadedTodos && loadedTodos.Todos ? [...loadedTodos.Todos] : [];
      updatedTodos.push(newTodo);
      const myDataStr = JSON.stringify({ Todos: updatedTodos });
      await AsyncStorage.setItem(key, myDataStr);
    } catch (e) {
      console.error("Error in saveData:", e);
    }
  };

export const deleteTodo = async (id) => {
  try {
    const jsonString = await AsyncStorage.getItem(key); // Use the same key "things-to-do"
    const data = jsonString ? JSON.parse(jsonString) : { Todos: [] };

    const updatedTodos = data.Todos.filter(todo => todo.id !== id); // Correct structure

    await AsyncStorage.setItem(key, JSON.stringify({ ...data, Todos: updatedTodos }));
  } catch (e) {
    console.error('Error deleting todo:', e);
  }
};

export const updateData = async (id, newCompletedStatus) => {
  try {
    const loadedTodos = await loadData();
    const updatedTodos = loadedTodos.Todos.map(todo => {
      if (todo.id === id) {
        // Update the completed status of the todo that matches the id
        return { ...todo, completed: newCompletedStatus };
      }
      return todo;
    });

    // Save the updated todos array back to AsyncStorage
    await AsyncStorage.setItem(key, JSON.stringify({ Todos: updatedTodos }));
  } catch (e) {
    console.error("Error in updateData:", e);
  }
};