import React from 'react';
import {Dimensions, StyleSheet, ScrollView} from 'react-native';
import {Svg, G, Circle, Text, Symbol, Use} from 'react-native-svg';

const {width, height} = Dimensions.get('window');
const centerX = (width + width) / 2;
const centerY = height / 2 - 50;
const radius = 40;

const Bubble = ({x, y, r}) => {
  return (
    <>
      <Text stroke="red" fontSize="16" x={x} y={y} textAnchor="middle">
        Bubble
      </Text>
      <Circle stroke="blue" fill="none" cx={x} cy={y} r={r} />
    </>
  );
};

const BubbleScreen = () => {
  return (
    <ScrollView horizontal={true}>
      <Svg width={width + width} height={height}>
        <Bubble x={centerX} y={centerY} r={radius} />
        <Bubble
          x={centerX - Math.sin((60 * Math.PI) / 180) * 2 * radius}
          y={centerY - Math.cos((60 * Math.PI) / 180) * 2 * radius}
          r={radius}
        />
        <Bubble
          x={centerX - Math.sin((120 * Math.PI) / 180) * 2 * radius}
          y={centerY - Math.cos((120 * Math.PI) / 180) * 2 * radius}
          r={radius}
        />
        <Bubble
          x={centerX - Math.sin((180 * Math.PI) / 180) * 2 * radius}
          y={centerY - Math.cos((180 * Math.PI) / 180) * 2 * radius}
          r={radius}
        />
      </Svg>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  myButton: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 200,
    width: 200,
    borderRadius: 400,
    backgroundColor: 'yellow',
  },
  bubble: {
    width: 10,
    height: 10,
  },
  circle: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default BubbleScreen;
