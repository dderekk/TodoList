import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, Alert } from 'react-native';
import { useNavigation } from "@react-navigation/native";

import { loadData,saveData } from '../datamodel/mydata';
import { ButtonPrototype } from '../components/ButtonPrototype'; 
import { Title } from '../components/Title';
import { COLORS } from '../components/Color';

export function NewToDo() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    useEffect(() => {
        const fn = async () => {
          const data = await loadData();
          setTitle(data?.title || '');
          setDescription(data?.description || '');
        };
        fn();
      }, []);
    
    const navigation = useNavigation();

    const handleCancel = () => {
        navigation.goBack();
    };
    const descriptionChangeHandler = (val) => setDescription(val);

    const handleSave = async () => {
        if (title.trim() === '' || description.trim() === '') {
            // If either is empty, just return without saving
            return;
        }
        console.log('Saved:', title, description);
        const newTodo = { title, description, id: Date.now(),completed:false }; 
        await saveData(newTodo);

        Alert.alert("Success", "Todo Added Successfully", [
            { text: "OK", onPress: () => {
                setTitle('');
                setDescription('');
            }}
        ]);

        // Clear the input fields
        setTitle('');
        setDescription('');
    };
      

    return (
        <View style={styles.container}>
            <Title text={'Add New Todo'}></Title>
            <Text style={styles.label}>Title</Text>
            <TextInput
                style={styles.input}
                value={title}
                onChangeText={(text) => setTitle(text)}
                placeholder="My new todo title"
            />

            <Text style={styles.label}>Description</Text>
            <TextInput
                style={styles.inputMultiline}
                value={description}
                onChangeText={(text) => setDescription(text)}
                placeholder="This is the description of my new todo"
                multiline
                numberOfLines={4}
            />

            <View style={styles.buttonContainer}>
                <ButtonPrototype 
                    label='  Back  ' 
                    icon='close-circle-outline' 
                    fn={handleCancel} 
                    Bsize={35}
                />
                <ButtonPrototype 
                    label='  Save  ' 
                    icon='checkmark-circle-outline' 
                    fn={handleSave} 
                    Bsize={35}
                />
            </View>
        </View>
    );
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        justifyContent: 'flex-start',
    },
    label: {
        fontWeight: 'bold',
        fontSize: 16,
        color: COLORS.ButtonText,
        paddingBottom: 5,
    },
    input: {
        fontSize: 18,
        borderColor: COLORS.LBlue,
        backgroundColor: COLORS.White,
        borderWidth: 2,
        borderRadius: 10,
        padding: 10,
        marginBottom: 20,
    },
    inputMultiline: {
        fontSize: 18,
        borderColor: COLORS.LBlue,
        backgroundColor: COLORS.White,
        borderWidth: 2,
        borderRadius: 8,
        padding: 10,
        height: 150, 
        textAlignVertical: 'top', 
        marginBottom: 20,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
        position: 'absolute', 
        left: 20,
        right: 20,
        bottom: 0,
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
    },
});
