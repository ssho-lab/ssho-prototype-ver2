import React from 'react';
import {
  View,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  Image,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const images = [
  'http://vivastudio.co.kr/web/product/extra/small/20200428/0755da07ddd4865b043c4172451620b8.jpg',
  'http://vivastudio.co.kr/web/product/extra/small/20200428/5c74ce8b7f0dbad26d5e1410bcd00fb1.jpg',
  'http://vivastudio.co.kr/web/product/extra/small/20200428/fed867987702f8a066a70bcdb562eaa2.jpg',
  'http://vivastudio.co.kr/web/product/extra/small/20200428/f88a54affbac95b75ecdeb15f98ffb1d.jpg',
  'http://vivastudio.co.kr/web/product/extra/small/20200428/a3ee6aae1320b633d17f12165bcbc3f3.jpg',
];

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {active: 0};
  }

  change = ({nativeEvent}) => {
    const slide = Math.ceil(
      nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width,
    );
    if (slide !== this.state.active) {
      this.setState({active: slide});
    }
  };

  // Todo - scrollTo x값 고치기
  handlePress = key => {
    this.scrollView.scrollTo({
      x: 366 * key,
    });
    this.setState({active: key});
  };

  toLocaleString = price =>
    price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  // Todo - 스타일링
  render() {
    //const images = Array(5).fill(this.props.item.imageUrl);

    const item = this.props.item;
    return (
      <View style={styles.card}>
        <View
          style={{
            flexDirection: 'row',
            alignSelf: 'center',
          }}>
          <Text />
          {images.map((i, k) => (
            <TouchableOpacity
              onPress={() => this.handlePress(k)}
              key={k}
              style={
                k === this.state.active
                  ? styles.pagingActiveBullet
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
          contentContainerstyle={styles.scrollView}>
          {images.map((image, index) => (
            <View style={styles.imageView} key={index}>
              <ImageBackground
                key={index}
                source={{uri: image}}
                style={styles.carouselImage}>
                <Text style={styles.text}> {item.title}</Text>
                <Text style={styles.text}>
                  {this.toLocaleString(item.price)}
                </Text>
              </ImageBackground>
            </View>
          ))}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    width: '100%',
    height: '80%',
    borderRadius: 4,
    borderWidth: 2,
    borderColor: '#E8E8E8',
    justifyContent: 'center',
    backgroundColor: '#F5F5F5',
  },
  scrollView: {
    width: '100%',
    height: '80%',
  },
  imageView: {
    width: '100%',
    height: '80%',
  },
  carouselImage: {
    width: 366,
    height: 480,
    resizeMode: 'cover',
  },
  pagingBullet: {
    width: 54,
    height: 13,
    backgroundColor: '#ffffff',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#707070',
  },
  pagingActiveBullet: {
    width: 54,
    height: 13,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#707070',
    backgroundColor: '#707070',
  },
  text: {
    textAlignVertical: 'bottom',
    textAlign: 'right',
    fontSize: 20,
    color: 'coral',
    backgroundColor: 'transparent',
  },
});
export default Carousel;
