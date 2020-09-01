import React, {useState, useEffect} from 'react';
import {FlatList, StyleSheet, Text, View, Button} from 'react-native';
import TagColumn from './TagColumn';
import SearchButton from './SearchButton';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {inject, observer} from 'mobx-react';

//let list = [];

/*for (let i = 0; i < 50; i++) {
  list.push({'idx': i, 'tag' : "태그"});
}*/

const TagSelectScreen = ({tagStore, userStore}) => {
  const user = userStore.user.name;
  const tags = [];
  const [searchWord, setSearchWord] = useState('');

  useEffect(() => {
    tagStore.getTags(userStore.userId);
  }, []);

  let list = tagStore.tagList;

  const list1 = list.filter((el, idx) => idx % 2 === 0);
  const list2 = list.filter((el, idx) => idx % 2 !== 0);

  list1.forEach((el, idx) => {
    let arr = list2[idx] ? [el, list2[idx]] : [el];
    tags.push(arr);
  });

  const renderColumn = ({item}) => {
    return <TagColumn item={item} />;
  };

  // user 체크
  if (!user) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>로그인해주세요</Text>
      </View>
    );
  }

  const onSubmitSearchWord = () => {
    tagStore.searchTag(searchWord, userStore.userId);
  };

  return (
    <>
      <SearchButton
        searchWord={searchWord}
        setSearchWord={setSearchWord}
        onSubmit={onSubmitSearchWord}
        onClear={() => tagStore.getTags()}
      />
      {list.length === 0 ? (
        <View style={styles.textContainer}>
          <Text>검색어와 일치하는 태그가 없습니다.</Text>
        </View>
      ) : (
        <FlatList
          horizontal={true}
          contentContainerStyle={styles.flatListContainer}
          data={tags}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderColumn}
          showsHorizontalScrollIndicator={true}
          indicatorStyle="white"
        />
      )}
      <View style={styles.buttonView}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>태그선택완료</Text>
        </TouchableOpacity>
      </View>
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
  buttonView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'white',
    borderColor: 'gray',
    borderRadius: 50,
    borderWidth: 1,

    justifyContent: 'center',
    alignItems: 'center',
    width: 200,
    height: 50,

    marginBottom: 25,
  },
  buttonText: {
    color: 'black',
  },
  textContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default inject('tagStore', 'userStore')(observer(TagSelectScreen));
