import {React, Component} from 'react';
import {observable, action} from 'mobx';
import moment from 'moment';
import SwiperRepository from '../repos/SwiperRepository';
import itemModel from '../models/ItemModel';

const swiperRepository = new SwiperRepository();

class itemStore {
  constructor(root) {
    this.root = root;
  }

  @observable cards = [];
  @observable swipedAllCards = false;
  @observable swipeDirection = '';
  @observable cardIndex = 0;
  @observable swipeList = [];
  @observable swipeLogs = {
    startTime: '',
    swipeList: [],
  };

  @action // api를 통해 itemList 가져오기
  async getCardList() {
    let response;
    try {
      response = await swiperRepository.getItemList();
    } catch (error) {
      console.log(error);
    }
    const data = response.data.slice(0, 10);
    this.cards = data.map(item => new itemModel(item));
  }

  @action // swipeLog startTime 저장
  // moment.js 사용
  setStartTime = () => {
    const startTime = moment(new Date()).format('YYYY-MM-DD hh:mm:ss');
    this.swipeLogs.startTime = startTime;
    console.log('startTime is ' + startTime);
  };

  @action // Swipe할때마다 로그 저장하기
  addSwipeLog = (cardIndex, score) => {
    const itemId = this.cards[cardIndex].id;
    const swipeTime = moment(new Date()).format('YYYY-MM-DD hh:mm:ss');
    const swipe = {
      userId: 1, // 임시
      itemId: itemId,
      score: score,
      swipeTime: swipeTime,
    };

    console.log('add Swipe Log');
    console.log(swipe);
    this.swipeLogs.swipeList.push(swipe);
  };

  @action // save likeList
  saveSwipeLogs = () => {
    swiperRepository.saveSwipeLogs(this.swipeLogs);
  };
}

export default itemStore;
