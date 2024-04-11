import React, { useState } from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import { COLORS } from './Color';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export const Task = ({ id, text, description, completed, onToggleComplete, onDelete }) => {
    const [expanded, setExpanded] = useState(false);
  
    return (
        <View style={styles.item}>
        <View style={styles.topSection}>
            <View style={[styles.square, completed && styles.completedSquare]}></View>
            <Text style={[styles.itemText, completed && styles.strikethrough]}>{text}</Text>
            <MaterialCommunityIcons
            name={expanded ? 'chevron-up' : 'chevron-down'}
            size={26}
            color="black"
            onPress={() => setExpanded(!expanded)}
            style={styles.chevron}
            />
        </View>

        {expanded && (
            <>
            <Text style={styles.description}>{description}</Text>
            <View style={styles.bottomSection}>
                <TouchableOpacity onPress={() => onToggleComplete(id)} >
                    {!completed && (
                        <MaterialCommunityIcons name="check-circle" size={30} color={COLORS.CompleteSqure} />
                    )}
                </TouchableOpacity>
                <TouchableOpacity onPress={() => onDelete(id)}>
                    <MaterialCommunityIcons name="delete-circle" size={30} color="red" />
                </TouchableOpacity>
            </View>
            </>
        )}
        </View>

    );
  };

const styles = StyleSheet.create({
    item: {
        backgroundColor: COLORS.White,
        padding: 10,
        borderRadius: 10,
        marginBottom: 20,
    },
    topSection: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    square: {
        width: 24,
        height: 24,
        backgroundColor: COLORS.Squre,
        opacity: 0.4,
    },
    completedSquare:{
        width: 24,
        height: 24,
        backgroundColor: COLORS.CompleteSqure,
        opacity: 0.4,
    },
    itemText: {
        flex: 1,
        marginLeft: 10,
        fontSize: 16,
        color: COLORS.Desicp,
    },
    chevron: {
        // 
    },
    description: {
        fontSize: 16,
        color: COLORS.Desicp,
        lineHeight: 24,
        marginTop: 8,
        flexWrap: 'wrap', 
    },
    bottomSection: {
        flexDirection: 'row',
        justifyContent: 'space-around', 
        marginTop: 8,
    },
    strikethrough: {
        textDecorationLine: 'line-through',
        color: COLORS.CompleteTitle,
    },
});