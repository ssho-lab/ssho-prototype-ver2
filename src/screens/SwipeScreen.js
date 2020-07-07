import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { inject, observer } from "mobx-react";

const SwipeScreen = () => {
  return <Text style={styles.text}>SwipeScreen</Text>;
} 

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default SwipeScreen;
