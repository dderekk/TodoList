import { Home } from "./src/screen/Home"
import { NewToDo } from "./src/screen/NewToDo";

// This is for navigation
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();
export default function App(){
  return (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component = {Home} />
      <Stack.Screen name="NewToDo" component={NewToDo} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}