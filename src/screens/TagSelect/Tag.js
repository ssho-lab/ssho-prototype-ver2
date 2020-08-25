import React from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';

const Tag = ({rowIndex, item}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate('Swipe')}>
      <View
        style={rowIndex ? styles.secondRow : styles.firstRow}>
        <Image style={styles.img} source={require('../../images/dooboo.jpg')} />
        <Text>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  firstRow: {
    marginLeft: 30,
    alignItems: "center",
  },
  secondRow: {
    marginLeft: 100,
    alignItems: "center"
  },
  secondColumnText: {
    fontSize: 20,
  },
  img: {
    width: 200,
    height: 150,
    borderRadius: 100,
    borderColor: "black",
    borderWidth: 1,
  },
});

export default Tag;
