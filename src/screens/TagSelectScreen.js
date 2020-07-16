import React from 'react';
import {FlatList, Text, View, Image, StyleSheet} from 'react-native';
let list = [];

for (let i = 0; i < 100; i++) list.push(i);

const list1 = list.filter((el, idx) => idx % 2 === 0);
const list2 = list.filter((el, idx) => idx % 2 !== 0);
const tags = [];

list1.forEach((el, idx) => {
  let arr = list2[idx] ? [el, list2[idx]] : [el];
  tags.push(arr);
});

const TagSelectScreen = () => {
  const Column = ({item, idx}) => {
    return (
      <View styles={styles.rows}>
        <View style={styles.firstRow}>
          <Image style={styles.img} source={require('../images/dooboo.jpg')} />
          <Text>{item[0]}</Text>
        </View>
        <View style={styles.secondRow}>
          <Image style={styles.img} source={require('../images/dooboo.jpg')} />
          <Text>{item[1]}</Text>
        </View>
      </View>
    );
  };

  const renderColumn = ({item}) => {
    return <Column item={item} />;
  };

  return <FlatList horizontal={true} data={tags} renderItem={renderColumn} />;
};

const styles = StyleSheet.create({
  rows: {
    marginLeft: 50,
    marginRight: 50,
  },
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
    width: 200,
    height: 200,
  },
});

export default TagSelectScreen;
