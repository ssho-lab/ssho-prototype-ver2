import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import TagColumn from './TagColumn';

let list = [];

for (let i = 0; i < 100; i++) {
  list.push(i);
}

const list1 = list.filter((el, idx) => idx % 2 === 0);
const list2 = list.filter((el, idx) => idx % 2 !== 0);
const tags = [];

list1.forEach((el, idx) => {
  let arr = list2[idx] ? [el, list2[idx]] : [el];
  tags.push(arr);
});

const TagSelectScreen = () => {
  const renderColumn = ({item}) => {
    return <TagColumn item={item} />;
  };

  return (
    <FlatList
      contentContainerStyle={styles.flatListcontainer}
      horizontal={true}
      data={tags}
      keyExtractor={(item, index) => index.toString()}
      renderItem={renderColumn}
    />
  );
};

const styles = StyleSheet.create({
  flatListcontainer: {
    flexGrow: 1,
    alignItems: 'center',
  },
});

export default TagSelectScreen;
