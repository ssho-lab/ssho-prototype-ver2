import {observable, action} from 'mobx';

class TagStore {
  constructor(root) {
    this.root = root;
  }

  @observable tagList = [];

  @action getItem() {
    return this.tagList;
  }
}

export default TagStore;
