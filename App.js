import { Text, SafeAreaView, StyleSheet, View, Button } from 'react-native';
import React from 'react';

import { COLORS } from './components/Color';
import Task from './components/Task';


export default function App() {
  return (
    <View style={styles.container}>
      {/* Today's Tasks */}
      <View style={styles.taskWrapper}>
        <View style={styles.divider} ></View>
        <Text style={styles.sectionTitle}>Todays' Tasks</Text>

        <View style={styles.items}>
          <Task text={'task one'}></Task>
          <Task text={'task two'}></Task>
          <Task text={'task three'}></Task>
        </View>

      </View>
      <View style={styles.fakeBox}>
        <Button title= "ADD NEW TODO" />
      </View>
      



    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: COLORS.BBC,
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  taskWrapper:{
    paddingTop:5,
    paddingHorizontal: 20,
  },
  sectionTitle:{
    marginTop: 100,
    fontSize: 24,
    fontWeight: 'bold',
  },
  items:{
    marginTop: 30,
  },
  divider:{
    backgroundColor: 'blue',
    height:1,
    alignself: "center",
    flex:1,
  },
  fakeBox:{
    marginTop: 200,
    padding:6,
    backgroundColor: COLORS.ButtonOutter,
    borderRadius:10,
  },
  fakeText:{
    textAlign: 'center',
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
});
