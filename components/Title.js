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
        flexDirection: 'row', // Aligns the children horizontally
        alignItems: 'center', // Centers the children vertically
        marginTop: 35,
        marginBottom: 20,
      },
      line: {
        flex: 1, // Each line will take up equal space
        height: 2, // The thickness of the line
        backgroundColor: COLORS.DARK, // Color of the line, change it as needed
      },
      sectionTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingHorizontal: 35, // Adds spacing between the text and the lines
      },
});