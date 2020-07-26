import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {SearchBar} from 'react-native-elements';
import {} from 'react-native-vector-icons';

const SearchButton = () => {
  const [searchWord, setSearchWord] = useState('');

  return (
    <SearchBar
      containerStyle={styles.searchContainer}
      inputContainerStyle={styles.searchInputContainer}
      placeholder="Type Here..."
      onChangeText={value => setSearchWord(value)}
      value={searchWord}
    />
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    width: 255,
    borderRadius: 22,
    backgroundColor: '#ffffff',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#707070',
  },
  searchInputContainer: {
    width: 240,
    height: 43,
    backgroundColor: '#ffffff',
  },
});

export default SearchButton;
