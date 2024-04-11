import React from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import { COLORS } from './Color';

export const Title = (titleName) => {
    return(
        <View style={styles.titleContainer}>
          <View style={styles.line} />
          <Text style={styles.sectionTitle}>{titleName.text}</Text>
          <View style={styles.line} />
        </View>
    )
}
const styles = StyleSheet.create({
    titleContainer: {
        flexDirection: 'row', 
        alignItems: 'center', 
        marginTop: 35,
        marginBottom: 20,
      },
      line: {
        flex: 1,
        height: 2, 
        backgroundColor: COLORS.DARK, 
      },
      sectionTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingHorizontal: 35, 
      },
});