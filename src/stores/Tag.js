import {observable, action} from 'mobx';

class TagStore {
  constructor(root) {
    this.root = root;
  }

  // Todo 1. tag객체 명시
  @observable tagList = [];

  // Todo 2. API 연결해서 Tag List 받아오기
  @action getItem() {
    return this.tagList;
  }
}

export default TagStore;
