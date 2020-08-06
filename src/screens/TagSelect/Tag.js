import React from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';

const Tag = ({rowIndex, item}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate('Swipe')}>
      <View
        style={
          item === 0
            ? styles.firstRow
            : item === 1
            ? styles.secondRow
            : rowIndex === 1
            ? styles.firstRow
            : styles.thirdRow
        }>
        <Image style={styles.img} source={require('../../images/dooboo.jpg')} />
        <Text>{item}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  firstRow: {
    marginLeft: 50,
  },
  secondRow: {
    marginLeft: 100,
  },
  secondColumnText: {
    fontSize: 20,
  },
  img: {
    width: 230,
    height: 150,
  },
});

export default Tag;
