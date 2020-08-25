import React, {Component} from 'react';
import {View, Text, Platform, TouchableOpacity, Button} from 'react-native';
import Swiper from 'react-native-deck-swiper';
import styles from './SwipeScreenCss';
import {inject, observer} from 'mobx-react';
import ImageCarousel from './ImageCarousel';

// const images = [
//   'http://vivastudio.co.kr/web/product/extra/small/20200428/0755da07ddd4865b043c4172451620b8.jpg',
//   'http://vivastudio.co.kr/web/product/extra/small/20200428/5c74ce8b7f0dbad26d5e1410bcd00fb1.jpg',
//   'http://vivastudio.co.kr/web/product/extra/small/20200428/fed867987702f8a066a70bcdb562eaa2.jpg',
//   'http://vivastudio.co.kr/web/product/extra/small/20200428/f88a54affbac95b75ecdeb15f98ffb1d.jpg',
//   'http://vivastudio.co.kr/web/product/extra/small/20200428/a3ee6aae1320b633d17f12165bcbc3f3.jpg',
// ];
// Todo - 코드 정리, 스타일링, 로직 확인, 태그 스크린과 연동
@inject('itemStore', 'userStore')
@observer
class SwipeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {isFinished: false};
  }

  componentDidMount = () => {
    // API 호출 , Fetch Data
    const ItemStore = this.props.itemStore;
    ItemStore.getCardList();
    ItemStore.setStartTime();
  };

  // swipe 개별 card 생성을 위한 함수 props
  renderCard = item => {
    return <ImageCarousel item={item} />;
  };

  onSwiped = (type, cardIndex) => {
    const {addSwipeLog} = this.props.itemStore;
    // 스와이프 방향별 처리를 위한 함수
    switch (type) {
      case 'left':
        addSwipeLog(cardIndex, -1); // like -1이면 싫어요
        break;
      case 'right':
        addSwipeLog(cardIndex, 1); // like 1이면 좋아요
        break;
      default:
        break;
    }
  };

  onSwipedAllCards = () => {
    const {saveSwipeLogs} = this.props.itemStore;
    saveSwipeLogs();
    this.setState({
      isFinished: true,
    });
  };

  tapToCarousel = () => {};

  render() {
    const user = this.props.userStore.userName;
    if (!user) {
      return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text>로그인해주세요</Text>
        </View>
      );
    }

    const isFinished = this.state.isFinished;

    if (isFinished) {
      return (
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#F5FCFF',
          }}>
          <Text>스와이프가 끝났습니다</Text>
        </View>
      );
    }
    const itemStore = this.props.itemStore;
    const {cards, cardIndex} = itemStore;
    const isLoading = cards.length === 0 ? true : false;

    return (
      <View style={styles.container}>
        {isLoading ? (
          <Text>Loading...</Text>
        ) : (
          <Swiper
            containerStyle={styles.swiper}
            ref={swiper => {
              this.swiper = swiper;
            }}
            allSwipedCheck
            onSwipedLeft={index => this.onSwiped('left', index)}
            onSwipedRight={index => this.onSwiped('right', index)}
            cards={cards.slice()}
            cardStyle={styles.card}
            cardIndex={cardIndex}
            cardVerticalMargin={80}
            verticalSwipe={true}
            renderCard={this.renderCard}
            onSwipedAll={() => this.onSwipedAllCards()}
            stackSize={2}
            stackSeparation={10}
            overlayLabels={{
              left: {
                title: 'HATE',
                style: {label: styles.label, wrapper: styles.leftWrapper},
              },
              right: {
                title: 'LIKE',
                style: {label: styles.label, wrapper: styles.rightWrapper},
              },
              top: {
                title: 'SUPERLIKE',
                style: {label: styles.label, wrapper: styles.topWrapper},
              },
            }}
            animateOverlayLabelsOpacity
            animateCardOpacity
            swipeBackCard
            outputRotationRange={['-20deg', '0deg', '20deg']}
            useViewOverflow={Platform.OS === 'ios'}
          />
        )}
      </View>
    );
  }
}

export default SwipeScreen;
