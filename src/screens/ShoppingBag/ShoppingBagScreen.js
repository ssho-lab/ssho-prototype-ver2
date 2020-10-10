import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import ShoppingBagRepository from '../../repos/ShoppingBagRepository';
import temp from '../../temp';

const shoppingBagRepository = new ShoppingBagRepository();

const DATA = [
  [
    {
      id: 1,
      imageUrl:
        'https://www.stylenanda.com/web/product/medium/20200129/f235736bef3e76625723e0a9299e4fa1.jpg',
    },
    {
      id: 2,
      imageUrl:
        'https://www.stylenanda.com/web/product/medium/20200129/f235736bef3e76625723e0a9299e4fa1.jpg',
    },
    {
      id: 3,
      imageUrl:
        'https://www.stylenanda.com/web/product/medium/20200129/f235736bef3e76625723e0a9299e4fa1.jpg',
    },
  ],
  [
    {
      id: 4,
      imageUrl:
        'https://www.stylenanda.com/web/product/medium/20200129/f235736bef3e76625723e0a9299e4fa1.jpg',
    },
    {
      id: 5,
      imageUrl:
        'https://www.stylenanda.com/web/product/medium/20200129/f235736bef3e76625723e0a9299e4fa1.jpg',
    },
    {
      id: 6,
      imageUrl:
        'https://www.stylenanda.com/web/product/medium/20200129/f235736bef3e76625723e0a9299e4fa1.jpg',
    },
  ],
  [
    {
      id: 7,
      imageUrl:
        'https://www.stylenanda.com/web/product/medium/20200129/f235736bef3e76625723e0a9299e4fa1.jpg',
    },
    {
      id: 8,
      imageUrl:
        'https://www.stylenanda.com/web/product/medium/20200129/f235736bef3e76625723e0a9299e4fa1.jpg',
    },
    {
      id: 9,
      imageUrl:
        'https://www.stylenanda.com/web/product/medium/20200129/f235736bef3e76625723e0a9299e4fa1.jpg',
    },
  ],
];

const Card = ({id, image, onPress}) => {
  return (
    <TouchableOpacity style={styles.shopItem} onPress={onPress}>
      <Image source={{uri: image}} style={styles.shopImage} />
      <Text style={styles.shopDate}>2020.10.07</Text>
      <Text style={styles.shopDate}>{id}</Text>
    </TouchableOpacity>
  );
};

const ShoppingBagScreen = () => {
  const [itemList, setItemList] = useState([]);

  useEffect(() => {
    shoppingBagRepository
      .fetchItemList()
      .then(response => {
        console.log(response.data);
        setItemList(response.data);
      })
      .catch(err => {
        console.log(err);
        setItemList(DATA);
      });
  }, []);

  const navigation = useNavigation();

  const onPressCard = list => {
    navigation.navigate('ShopDetail', {itemList: list});
  };

  const renderItem = ({item}) => (
    <Card
      id={item[0].id}
      image={item[0].imageUrl}
      onPress={() => onPressCard(item)}
    />
  );

  if (itemList.length === 0) {
    return (
      <View>
        <Text>로딩중</Text>
      </View>
    );
  }
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
    marginBottom: 30,
    padding: 10,
    marginLeft: 10,
    marginRight: 10,
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

export default ShoppingBagScreen;
