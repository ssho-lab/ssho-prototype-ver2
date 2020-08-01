import React from 'react';
import {View, Text, StyleSheet, Button, Image} from 'react-native';

const Card = ({item, index}) => {
  return (
    // card 데이터가 없을 땐 빈 카드만 먼저 렌더링 됨
    <View style={styles.card}>
      <Image style={styles.image} source={{uri: item.imageUrl}} />
      <Text style={styles.text}>{item.title}</Text>
      {/* TouchableOpacity 쓰면 스와이프도 onPress로 인식하는 문제 */}
      <Button
        title="링크"
        onPress={() => {
          //WebBrowser.openBrowserAsync(item.link); // 앱의 내비게이션은 사라짐
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    marginTop: -50,
    height: '80%',
    borderRadius: 4,
    borderWidth: 2,
    borderColor: '#E8E8E8',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  image: {
    marginLeft: '2.5%',
    width: '95%',
    height: '90%',
  },
  text: {
    textAlign: 'center',
    fontSize: 20,
    color: 'coral',
    backgroundColor: 'transparent',
  },
});
export default Card;
