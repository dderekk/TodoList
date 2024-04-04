import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { ButtonPrototype } from '../components/ButtonPrototype'; 
import { Title } from '../components/Title';
import { COLORS } from '../components/Color';

export function NewToDo() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    
    const navigation = useNavigation();

    const handleCancel = () => {
        navigation.goBack();
    };

    const handleSave = () => {
        console.log('Saved:', title, description);
    };

    return (
        <View style={styles.container}>
            <Title text={'Add New Todo'}></Title>
            <Text style={styles.label}>Title</Text>
            <TextInput
                style={styles.input}
                value={title}
                onChangeText={setTitle}
                placeholder="My new todo title"
            />

            <Text style={styles.label}>Description</Text>
            <TextInput
                style={styles.inputMultiline}
                value={description}
                onChangeText={setDescription}
                placeholder="This is the description of my new todo"
                multiline
                numberOfLines={4}
            />

            <View style={styles.buttonContainer}>
                <ButtonPrototype 
                    label='  Cancel  ' 
                    icon='close-circle-outline' 
                    fn={handleCancel} 
                    Bsize={35}
                />
                <ButtonPrototype 
                    label='   Save   ' 
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
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        position: 'absolute', 
        left: 20,
        right:20,
        bottom: 0, 
        gap:'20%',
      },
    buttonText: {
        color: 'white',
        fontSize: 18,
    },
});
