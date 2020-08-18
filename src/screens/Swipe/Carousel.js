import React from 'react';
import {
  View,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  Image,
  Dimensions,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const images = [
  'http://vivastudio.co.kr/web/product/extra/small/20200428/0755da07ddd4865b043c4172451620b8.jpg',
  'http://vivastudio.co.kr/web/product/extra/small/20200428/5c74ce8b7f0dbad26d5e1410bcd00fb1.jpg',
  'http://vivastudio.co.kr/web/product/extra/small/20200428/fed867987702f8a066a70bcdb562eaa2.jpg',
  'http://vivastudio.co.kr/web/product/extra/small/20200428/f88a54affbac95b75ecdeb15f98ffb1d.jpg',
  'http://vivastudio.co.kr/web/product/extra/small/20200428/a3ee6aae1320b633d17f12165bcbc3f3.jpg',
];

const {width, height} = Dimensions.get('window');
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
      x: width * key,
    });
    this.setState({active: key});
  };

  toLocaleString = price =>
    price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  // Todo - 스타일링
  render() {
    // const item = this.props.item;
    // const images = Array(5).fill(item.imageUrl);
    const item = {title: '몰라', price: '50000'};
    return (
      <View style={styles.card}>
        <ScrollView
          ref={ref => (this.scrollView = ref)}
          pagingEnabled={true}
          horizontal={true}
          style={{width: width, height: height}}
          onScroll={e => this.change(e)}
          showsHorizontalScrollIndicator={false}
          snapToInterval={120}>
          {images.map((image, index) => (
            <Image
              key={index}
              source={{uri: image}}
              style={styles.carouselImage}
            />
            // <View style={styles.imageView} key={index}>
            //   <ImageBackground
            //     key={index}
            //     source={{uri: image}}
            //     style={styles.carouselImage}>
            //     <Text style={styles.text}>{item.title}</Text>
            //     <Text style={styles.text}>
            //       {this.toLocaleString(item.price)}
            //     </Text>
            //   </ImageBackground>
            // </View>
          ))}
        </ScrollView>
        <View
          style={{
            flexDirection: 'row',
            alignSelf: 'center',
            position: 'absolute',
            marginLeft: 40,
            top: 10,
          }}>
          {images.map((i, k) => (
            <TouchableOpacity
              onPress={() => console.log(this.handlePress(k))}
              key={k}
              style={{
                width: 54,
                height: 13,
                backgroundColor: '#ffffff',
                borderStyle: 'solid',
                borderWidth: 1,
                borderColor: '#707070',
              }}
              style={
                k === this.state.active
                  ? styles.pagingActiveBullet
                  : styles.pagingBullet
              }
            />
          ))}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    position: 'absolute',
    height: '80%',
    width: width,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: '#E8E8E8',
    justifyContent: 'center',
    backgroundColor: '#F5F5F5',
  },
  scrollView: {
    position: 'absolute',
    width,
    height: '100%',
  },
  // imageView: {
  //   width: '100%',
  //   height: '100%',
  // },
  carouselImage: {
    width,
    height: '100%',
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
