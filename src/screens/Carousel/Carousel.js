import React from 'react';
import {View, Image, ScrollView, StyleSheet} from 'react-native';
import {exp} from 'react-native-reanimated';
import {TouchableOpacity} from 'react-native-gesture-handler';

const width = 400;
const height = (width * 100) / 60;

const images = [
  'http://vivastudio.co.kr/web/product/extra/small/20200428/0755da07ddd4865b043c4172451620b8.jpg',
  'http://vivastudio.co.kr/web/product/extra/small/20200428/5c74ce8b7f0dbad26d5e1410bcd00fb1.jpg',
  'http://vivastudio.co.kr/web/product/extra/small/20200428/fed867987702f8a066a70bcdb562eaa2.jpg',
  'http://vivastudio.co.kr/web/product/extra/small/20200428/f88a54affbac95b75ecdeb15f98ffb1d.jpg',
  'http://vivastudio.co.kr/web/product/extra/small/20200428/a3ee6aae1320b633d17f12165bcbc3f3.jpg',
  'http://vivastudio.co.kr/web/product/extra/small/20200428/b6c658af5e5a7b1d17eaa766d89ad79d.jpg',
  'http://vivastudio.co.kr/web/product/extra/small/20200428/ff18b7f1e5cc49057947db650bae5496.jpg',
  'http://vivastudio.co.kr/web/product/extra/small/20200428/45f09c5f137741482944f92ff751f3f3.jpg',
];

class Carousel extends React.Component {
  state = {
    active: 0,
  };

  change = ({nativeEvent}) => {
    const slide = Math.ceil(
      nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width,
    );
    if (slide !== this.state.active) {
      this.setState({active: slide});
    }
  };

  render() {
    return (
      <View style={{width, height}}>
        <View
          style={{
            flexDirection: 'row',
            alignSelf: 'center',
          }}>
          {images.map((i, k) => (
            <TouchableOpacity
              onPress={() =>
                this.scrollView.scrollTo({
                  x: width * k,
                })
              }
              key={k}
              style={
                k === this.state.active
                  ? styles.pagingActive
                  : styles.pagingBullet
              }
            />
          ))}
        </View>
        <ScrollView
          ref={ref => (this.scrollView = ref)}
          pagingEnabled={true}
          horizontal={true}
          onScroll={e => this.change(e)}
          showsHorizontalScrollIndicator={false}
          style={{width, height}}>
          {images.map((image, index) => (
            <Image
              key={index}
              source={{uri: image}}
              style={{width, height, resizeMode: 'cover'}}
            />
          ))}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  pagingBullet: {
    width: 54,
    height: 13,
    backgroundColor: '#ffffff',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#707070',
  },
  pagingActive: {
    width: 54,
    height: 13,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#707070',
    backgroundColor: '#707070',
  },
});
export default Carousel;
