import React from 'react';
import {
  View,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
} from 'react-native';
import {exp} from 'react-native-reanimated';
import {TouchableOpacity} from 'react-native-gesture-handler';

const width = 300;
const height = (width * 100) / 60;

// const images = [
//   'http://vivastudio.co.kr/web/product/extra/small/20200428/0755da07ddd4865b043c4172451620b8.jpg',
//   'http://vivastudio.co.kr/web/product/extra/small/20200428/5c74ce8b7f0dbad26d5e1410bcd00fb1.jpg',
//   'http://vivastudio.co.kr/web/product/extra/small/20200428/fed867987702f8a066a70bcdb562eaa2.jpg',
//   'http://vivastudio.co.kr/web/product/extra/small/20200428/f88a54affbac95b75ecdeb15f98ffb1d.jpg',
//   'http://vivastudio.co.kr/web/product/extra/small/20200428/a3ee6aae1320b633d17f12165bcbc3f3.jpg',
//   'http://vivastudio.co.kr/web/product/extra/small/20200428/b6c658af5e5a7b1d17eaa766d89ad79d.jpg',
//   'http://vivastudio.co.kr/web/product/extra/small/20200428/ff18b7f1e5cc49057947db650bae5496.jpg',
//   'http://vivastudio.co.kr/web/product/extra/small/20200428/45f09c5f137741482944f92ff751f3f3.jpg',
// ];

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

  handlePress = key => {
    this.scrollView.scrollTo({
      x: width * key,
    });
    this.setState({active: key});
  };

  render() {
    const images = this.props.item.productExtra.extraImageUrlList.slice(0, 5);
    return (
      <View style={styles.card}>
        <View
          style={{
            flexDirection: 'row',
            alignSelf: 'center',
          }}>
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
          style={styles.scrollView}>
          {images.map((image, index) => (
            <View style={styles.imageView} key={index}>
              <ImageBackground
                key={index}
                source={{uri: image}}
                style={styles.carouselImage}>
                <Text style={styles.text}> {index > 2 && 'eee'}</Text>
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
    marginTop: -50,
    height: '80%',
    borderRadius: 4,
    borderWidth: 2,
    borderColor: '#E8E8E8',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  scrollView: {
    width,
    height,
  },
  imageView: {
    width: '100%',
    height: '100%',
  },
  carouselImage: {
    width,
    height,
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
    textAlign: 'center',
    fontSize: 20,
    color: 'coral',
    backgroundColor: 'transparent',
    position: 'absolute',
    bottom: 30,
    left: 150,
  },
});
export default Carousel;
