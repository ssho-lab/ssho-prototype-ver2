import React from 'react';
import {StyleSheet} from 'react-native';
import {SearchBar} from 'react-native-elements';
import {} from 'react-native-vector-icons';

const SearchButton = (props) => {

  return (
    <SearchBar
      containerStyle={styles.searchContainer}
      inputContainerStyle={styles.searchInputContainer}

      placeholder="Type Here..."
      onChangeText={value => props.setSearchWord(value)}
      onSubmitEditing={props.onSubmit} // props of TextInput, callback when submit button is pressed
      onClear={props.onClear}
      
      value={props.searchWord}

      round={true} // change TextInput styling to rounded corners 
      showLoading={false}
    />
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    marginHorizontal: 25,
    marginTop: 25,
    borderRadius: 22,
    backgroundColor: '#ffffff',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#707070',
  },
  searchInputContainer: {
    width: "95%",
    height: "5%",
    backgroundColor: '#ffffff',
  },
});

export default SearchButton;
