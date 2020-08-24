import {observable, action} from 'mobx';

class UserStore {
  constructor(root) {
    this.root = root;
  }

  @observable userName = '';

  @action
  setUserName(userName) {
    this.userName = userName;
  }
}

export default UserStore;
