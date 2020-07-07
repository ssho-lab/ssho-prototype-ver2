import React from "react";
import BubbleSelect, { Bubble } from 'react-native-bubble-select';
import { Dimensions, StyleSheet } from 'react-native';

const { width, height } = Dimensions.get('window');

const BubbleScreen = () => {
  return (
    <BubbleSelect
      onSelect={bubble => console.log('Selected: ', bubble.id)}
      onDeselect={bubble => console.log('Deselected: ', bubble.id)}
      width={width}
      height={height}
    >
      <Bubble id="bubble-1" text="Bubble One" />
      <Bubble id="bubble-2" text="Bubble Two" />
      <Bubble id="bubble-3" text="Bubble Three" />
      <Bubble id="bubble-4" text="Bubble Four" />
    </BubbleSelect>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default BubbleScreen;
