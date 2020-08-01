import React, {Component} from 'react';
import {View, Text, StyleSheet, Button, Image} from 'react-native';
import Swiper from 'react-native-deck-swiper';
import Card from './ItemCard';
import {
  RectButton,
  ScrollView,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import axios from 'axios';

import {inject, observer} from 'mobx-react';
import {observable, toJS} from 'mobx';

@inject('itemStore')
@observer
export default class SwipeScreen extends Component {
  constructor(props) {
    super(props);
  }

  // 컴포넌트 마운트 직후
  componentDidMount = () => {
    // API 호출 , Fetch Data
    const ItemStore = this.props.itemStore;
    ItemStore.getCardList();
    console.log('get Card List');
    ItemStore.setStartTime();
  };

  // state 변화 발생 후 업데이트 직전
  shouldComponentUpdate = nextState => {
    if (this.state.cards !== nextState.cards) {
      // cards 변화 비교
      return true; // 재렌더링 실행
    }
  };

  // swipe 개별 card 생성을 위한 함수 props
  renderCard = (item, index) => {
    return <Card item={item} index={index} />;
  };

  shopWebView = link => {
    // 왜 안되는지 모르겠음
    return <WebView source={{uri: link}} style={styles.container} />;
  };

  onSwiped = (type, cardIndex) => {
    const ItemStore = this.props.itemStore;
    // 스와이프 방향별 처리를 위한 함수 props
    switch (type) {
      case 'top':
        console.log('모르겠음');
        // this.setState({ ...this.state, swiped : false });
        break;
      case 'left':
        ItemStore.addSwipeLog(cardIndex, -1); // like -1이면 싫어요
        console.log('싫어요');
        // this.setState({ ...this.state, swiped : false })
        break;
      case 'right':
        ItemStore.addSwipeLog(cardIndex, 1); // like 1이면 좋아요
        console.log('좋아요');
        // this.setState({ ...this.state, swiped : false })
        break;
      // case 'swiped':
      //   this.setState({...this.state, swiped : true})
      //   console.log(this.state.swiped)
      //   break
      default:
    }
  };

  onSwipedAllCards = () => {
    const ItemStore = this.props.itemStore;
    // 스와이프 카드 한 덱이 종료되었을 때 호출되는 메소드로 보임
    // this.setState({
    //   ...this.state,
    //   swipedAllCards: true,
    // });
    // save likeList
    ItemStore.saveSwipeLogs();
    console.log('Swipe End');
  };

  render() {
    const ItemStore = this.props.itemStore;
    const {cards, cardIndex, swipeDirection} = ItemStore;
    const isLoading = cards.length === 0 ? true : false;

    return (
      <View style={styles.container}>
        {!isLoading ? (
          <Swiper
            style={styles.swiper}
            ref={swiper => {
              this.swiper = swiper;
            }}
            allSwipedCheck
            onSwiped={() => {
              this.onSwiped('swiped');
            }}
            onSwipedLeft={cardIndex => this.onSwiped('left', cardIndex)}
            onSwipedRight={cardIndex => this.onSwiped('right', cardIndex)}
            cards={cards.slice()}
            cardIndex={cardIndex}
            cardVerticalMargin={80}
            verticalSwipe={true}
            renderCard={this.renderCard}
            onSwipedAll={() => this.onSwipedAllCards()}
            stackSize={2}
            stackSeparation={10}
            overlayLabels={{
              left: {
                title: '웩',
                style: {
                  label: {
                    backgroundColor: 'black',
                    borderColor: 'black',
                    color: 'white',
                    borderWidth: 1,
                  },
                  wrapper: {
                    flexDirection: 'column',
                    alignItems: 'flex-end',
                    justifyContent: 'flex-start',
                    marginTop: 30,
                    marginLeft: -30,
                  },
                },
              },
              right: {
                title: '내꺼',
                style: {
                  label: {
                    backgroundColor: 'black',
                    borderColor: 'black',
                    color: 'white',
                    borderWidth: 1,
                  },
                  wrapper: {
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    justifyContent: 'flex-start',
                    marginTop: 30,
                    marginLeft: 30,
                  },
                },
              },
              top: {
                title: '모르겠음',
                style: {
                  label: {
                    backgroundColor: 'black',
                    borderColor: 'black',
                    color: 'white',
                    borderWidth: 1,
                  },
                  wrapper: {
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                  },
                },
              },
            }}
            animateOverlayLabelsOpacity
            animateCardOpacity
            swipeBackCard
            outputRotationRange={['-20deg', '0deg', '20deg']}
            useViewOverflow={Platform.OS === 'ios'}
          />
        ) : (
          <Text style={styles.text}>Loading....</Text>
        )}
        <View style={styles.buttonGroup}>
          <Button
            title="싫어요"
            color="coral"
            style={styles.buttons}
            onPress={() => {
              this.swiper.swipeLeft();
            }}
          />
          <Button
            title="좋아요"
            color="coral"
            style={styles.buttons}
            onPress={() => {
              this.swiper.swipeRight();
            }}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  swiper: {
    height: 200,
  },

  buttonGroup: {
    flex: 1,
    marginTop: 600,
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 50,
  },
  buttons: {
    width: 400,
    height: 100,
    backgroundColor: 'black',
  },
  text: {
    textAlign: 'center',
    fontSize: 20,
    color: 'coral',
    backgroundColor: 'transparent',
  },
  done: {
    textAlign: 'center',
    fontSize: 30,
    color: 'white',
    backgroundColor: 'transparent',
  },
});
