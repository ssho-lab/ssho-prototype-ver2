import React, {useState} from 'react';
import {Text, View, FlatList, TouchableOpacity, Image} from 'react-native';

const sample = {
  id: '0001249921',
  category: '스커트',
  mallNo: '0001',
  mallNm: '스타일난다',
  title: '릴랙시무드 셔츠앤스커트 (set',
  price: '79000',
  imageUrl:
    'https://vivastudio.co.kr/web/product/medium/20200324/6c1779ed4ee8f05f36c727eb4db5531b.jpg',
  link:
    'https://www.stylenanda.com/product/detail.html?product_no=249921&cate_no=52&display_group=1',
  realTagList: [
    {
      id: '1',
      name: '큐트',
      expTagId: '1',
      embedding: null,
    },
    {
      id: '5',
      name: '모노톤',
      expTagId: '5',
      embedding: null,
    },
  ],
  expTagList: [
    {
      id: '1',
      name: '큐트',
      embedding: null,
    },
    {
      id: '5',
      name: '모노톤',
      embedding: null,
    },
  ],
  productExtra: {
    extraImageUrlList: [
      'https://www.stylenanda.com//2017/upload5/ke200730-0727tsr-103-001(1).jpg',
      'https://www.stylenanda.com//2017/upload5/ke200730-0727tsr-103-001(2).jpg',
    ],
    description:
      '편안하고 나긋한 무드의 셔츠 & 스커트 세트 구성을 소개해 드립니다. 난다메이드의 퀄리티가 접목되어 그런지 원단의 터치감부터 부들부들 남다른 느낌이에요. 신축성도 훌륭해 몸에 편안함을 더해 주고, 꽉 피트되는 스타일도 아니어서 착용 부담이 적답니다. 슬쩍 여릿하게 비침이 있는 원단에 하의에만 안감 처리를 하였으니 이 부분만 선택에 참고해 주세요 :)',
    sizeList: ['FREE'],
  },
};

const DATA = Array(8).fill(sample);

const Item = ({image}) => (
  <Image source={{uri: image}} style={{height: 100, width: '50%'}} />
);

const ShoppingBagScreen = () => {
  let idx = 0;
  const renderItem = ({item}) => (
    <Item title={item.title} image={item.imageUrl} />
  );

  return (
    <View>
      <Text>SHOPPING BAGS</Text>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        numColumns={'2'}
        keyExtractor={item => idx++}
      />
    </View>
  );
};

export default ShoppingBagScreen;
