import React, {useState} from 'react';
import {View, Image, StyleSheet, Text, TouchableOpacity} from 'react-native';

// const images = [
//   'http://vivastudio.co.kr/web/product/extra/small/20200428/0755da07ddd4865b043c4172451620b8.jpg',
//   'http://vivastudio.co.kr/web/product/extra/small/20200428/5c74ce8b7f0dbad26d5e1410bcd00fb1.jpg',
//   'http://vivastudio.co.kr/web/product/extra/small/20200428/fed867987702f8a066a70bcdb562eaa2.jpg',
//   'http://vivastudio.co.kr/web/product/extra/small/20200428/f88a54affbac95b75ecdeb15f98ffb1d.jpg',
//   'http://vivastudio.co.kr/web/product/extra/small/20200428/a3ee6aae1320b633d17f12165bcbc3f3.jpg',
// ];

const imageCarousel = item => {
  const productExtra = item.item.productExtra;
  let images = productExtra.extraImageUrlList.slice(0, 4);
  images.unshift(item.item.imageUrl);
  console.log(images);
  const length = images.length;

  const [zIndexArr, setZIndexArr] = useState(
    Array(length)
      .fill()
      .map((el, idx) => (idx === 0 ? 1 : 0)),
  );

  const handlePress = index => {
    setZIndexArr(
      zIndexArr.map((el, idx) => (idx === (index + 1) % length ? 1 : 0)),
    );
  };

  const itemInfo = (index, item) => {
    return (
      <View style={{...styles.itemInfo, zIndex: 3}}>
        {item.realTagList.map((tag, idx) => (
          <Text style={styles.text} key={idx}>
            #{tag.name}
          </Text>
        ))}
        <Text style={styles.text}>{item.title}</Text>
        <Text style={styles.text}>{item.price}</Text>
      </View>
    );
  };

  const imageList = item => {
    return images.map((image, index) => {
      return (
        <TouchableOpacity
          key={index}
          style={{...styles.imageContainer, zIndex: zIndexArr[index]}}
          onPress={() => handlePress(index)}
          activeOpacity={1}>
          <Image key={index} source={{uri: image}} style={styles.image} />
          {itemInfo(index, item)}
        </TouchableOpacity>
      );
    });
  };

  const bulletList = images.map((image, index) => {
    return (
      <TouchableOpacity
        key={index}
        style={
          zIndexArr[index] === 1
            ? styles.pagingActiveBullet
            : styles.pagingBullet
        }
      />
    );
  });

  return (
    <View style={styles.card}>
      <View style={styles.imageListContainer}>{imageList(item.item)}</View>
      <View style={styles.bulletListContainer}>{bulletList}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    position: 'absolute',
    height: '80%',
    width: '100%',
  },
  imageListContainer: {
    position: 'absolute',
    height: '100%',
    width: '100%',
  },
  imageContainer: {
    position: 'absolute',
    height: '100%',
    width: '100%',
  },
  image: {
    flex: 1,
    position: 'absolute',
    height: '100%',
    width: '100%',
  },
  bulletListContainer: {
    position: 'absolute',
    top: 10,
    flexDirection: 'row',
    alignSelf: 'center',
    zIndex: 2,
  },
  pagingBullet: {
    width: 54,
    height: 13,
    backgroundColor: '#ffffff',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#f1c40f',
  },
  pagingActiveBullet: {
    width: 54,
    height: 13,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#f1c40f',
    backgroundColor: '#f39c12',
  },
  itemInfo: {
    position: 'absolute',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    bottom: 20,
    right: 10,
  },
  text: {
    fontSize: 15,
    color: '#c0392b',
  },
});

export default imageCarousel;
