import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  ScrollView,
  Dimensions,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const {width} = Dimensions.get('window');
const height = (width * 100) / 60;

const Bullets = () => {
  let bullets = [];
  for (let i = 0; i < 5; i++) {
    bullets.push(<Button title="클릭" style={styles.bullet} />);
  }
};

const Card = ({item, index}) => {
  console.log(item.productExtra.extraImageUrlList);
  const images = item.productExtra.extraImageUrlList.slice(0, 5);
  return (
    // card 데이터가 없을 땐 빈 카드만 먼저 렌더링 됨
    <View>
      <View
        style={{
          flexDirection: 'row',
          position: 'absolute',
          top: 0,
          alignSelft: 'center',
        }}
      />

      <ScrollView horizontal={true}>
        {images.map((item, index) => {
          <Image key={index} style={styles.image} source={{uri: item}} />;
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 2500,
    marginTop: -50,
    height: '80%',
    borderRadius: 4,
    borderWidth: 2,
    borderColor: '#E8E8E8',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  imageView: {
    width: '100%',
    height: '100%',
  },
  image: {
    marginLeft: '2.5%',
    width: 500,
    height: '90%',
  },
  text: {
    textAlign: 'center',
    fontSize: 20,
    color: 'coral',
    backgroundColor: 'transparent',
  },
  bullet: {
    width: 50,
    height: 13,
    backgroundColor: '#ffffff',
    borderColor: '#707070',
    borderWidth: 1,
    borderStyle: 'solid',
  },
});

export default Card;
