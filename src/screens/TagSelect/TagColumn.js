import React from 'react';
import {View, StyleSheet} from 'react-native';
import Tag from './Tag';

const TagColumn = ({item, idx}) => {
  return (
    <View styles={styles.rows}>
      <Tag rowIndex={0} item={item[0]} />
      {item[1] && <Tag rowIndex={1} item={item[1]} />}
    </View>
  );
};

const styles = StyleSheet.create({
  rows: {
    marginLeft: 50,
    marginRight: 50,
  },
});

export default TagColumn;
