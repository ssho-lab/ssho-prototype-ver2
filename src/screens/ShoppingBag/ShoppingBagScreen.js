import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import ShoppingBagRepository from '../../repos/ShoppingBagRepository';
import temp from '../../temp';

const shoppingBagRepository = new ShoppingBagRepository();

const Item = ({image}) => (
  <TouchableOpacity style={styles.shopItem}>
    <Image source={{uri: image}} style={styles.shopImage} />
  </TouchableOpacity>
);

const ShoppingBagScreen = () => {
  const [itemList, setItemList] = useState([]);

  useEffect(() => {
    shoppingBagRepository
      .fetchItemList()
      .then(response => setItemList(response.data))
      .catch(err => {
        console.log(err);
        setItemList(temp.data.itemList);
      });
  }, []);

  const renderItem = ({item}) => (
    <Item title={item.title} image={item.imageUrl} />
  );

  return (
    <View>
      <Text>SHOPPING BAGS</Text>
      <FlatList
        data={itemList}
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
    marginBottom: 10,
    flex: 1,
    justifyContent: 'space-around',
  },
  shopItem: {
    width: '40%',
    height: 200,
  },
  shopImage: {
    width: '100%',
    height: '100%',
  },
});
export default ShoppingBagScreen;
