import React from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import { COLORS } from './Color';
export const Task = (props) => {
    return(
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <TouchableOpacity style={styles.square}></TouchableOpacity>
                <Text style={styles.itemText}>{props.text}</Text>
            </View>
            <View style={styles.circular}></View>
            
        </View>
    )
}
const styles = StyleSheet.create({
    item:{
        backgroundColor: COLORS.White,
        padding: 15,
        borderRadius:10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-bteween',
        marginBottom: 20,
    },
    itemLeft:{
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap'
    },
    square:{
        width: 24,
        height: 24,
        backgroundColor: COLORS.Squre,
        opacity: 0.4,
    },
    itemText:{
        maxWidth: '80%',
    },
    circular:{
        marginLeft:'auto',
        width: 12,
        height: 12,
        borderColor: COLORS.LittleDot,
        borderWidth: 2,
        borderRadius: 5,
    },
});