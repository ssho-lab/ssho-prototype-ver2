import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Image,
  Button,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import temp from '../../temp';

const Card = ({id, image}) => (
  <TouchableOpacity style={styles.shopItem}>
    <Image source={{uri: image}} style={styles.shopImage} />
    <Text style={styles.shopDate}>2020.10.07</Text>
    <Text style={styles.shopDate}>{id}</Text>
  </TouchableOpacity>
);

const ShoppingBagDetailScreen = ({navigation, route}) => {
  const renderItem = ({item}) => <Card id={item.id} image={item.imageUrl} />;

  return (
    <View>
      <Text>SHOPPING BAG Detail</Text>
      <Button title="뒤로가기" onPress={() => navigation.goBack()} />
      <FlatList
        data={route.params.itemList || temp.data.itemList}
        renderItem={renderItem}
        numColumns={'2'}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.shopContainer}
        columnWrapperStyle={styles.shopRow}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  shopRow: {
    marginTop: 10,
    marginBottom: 30,
    marginLeft: 10,
    marginRight: 10,
    padding: 10,
    flex: 1,
    justifyContent: 'space-between',
  },
  shopItem: {
    width: '40%',
    height: 200,
  },
  shopImage: {
    width: '100%',
    height: '100%',
  },
  shopDate: {
    textAlign: 'center',
  },
});

export default ShoppingBagDetailScreen;
