import React, {Component} from 'react';
import {View, Text, Platform} from 'react-native';
import Swiper from 'react-native-deck-swiper';
import Carousel from './Carousel';
import styles from './SwipeScreenCss';
import {inject, observer} from 'mobx-react';

// Todo - 코드 정리, 스타일링, 로직 확인, 태그 스크린과 연동
@inject('itemStore')
@observer
class SwipeScreen extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount = () => {
    // API 호출 , Fetch Data
    const ItemStore = this.props.itemStore;
    ItemStore.getCardList();
    ItemStore.setStartTime();
  };

  // swipe 개별 card 생성을 위한 함수 props
  renderCard = (item, index) => {
    return <Carousel item={item} index={index} />;
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
  };

  render() {
    const itemStore = this.props.itemStore;
    const {cards, cardIndex} = itemStore;
    const isLoading = cards.length === 0 ? true : false;

    return (
      <View style={styles.container}>
        {!isLoading ? (
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
            onTapCard={() => console.log('Tap Card')}
            outputRotationRange={['-20deg', '0deg', '20deg']}
            useViewOverflow={Platform.OS === 'ios'}
          />
        ) : (
          <Text style={styles.text}>Loading....</Text>
        )}
      </View>
    );
  }
}

export default SwipeScreen;
