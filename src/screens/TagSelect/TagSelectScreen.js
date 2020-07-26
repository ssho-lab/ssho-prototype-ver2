import React from 'react';
import {
  FlatList,
  StyleSheet,
  Button,
  Text,
  TouchableOpacity,
  Image,
  View,
} from 'react-native';
import TagColumn from './TagColumn';
import SearchButton from './SearchButton';

let list = [];

for (let i = 0; i < 50; i++) {
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
    <>
      <View styles={styles.searchView}>
        <SearchButton />
      </View>
      <FlatList
        horizontal={true}
        contentContainerStyle={styles.flatListContainer}
        data={tags}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderColumn}
        showsHorizontalScrollIndicator={true}
        indicatorStyle="white"
      />
      <Button title="태그선택완료" styles={styles.button} />
    </>
  );
};

const styles = StyleSheet.create({
  searchView: {
    flexGrow: 1,
    height: 100,
    width: 300,
    paddingLeft: 50,
    paddingTop: 100,
    marginLeft: 50,
  },

  flatListContainer: {
    flexGrow: 1,
    alignItems: 'center',
  },

  button: {
    width: 200,
    paddingLeft: 50,
    paddingRight: 50,
  },
});

export default TagSelectScreen;
