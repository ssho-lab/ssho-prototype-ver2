import {observable, action} from 'mobx';
import UserRepository from '../repos/UserRepository';

const userRepository = new UserRepository();

class UserStore {
  constructor(root) {
    this.root = root;
  }

  @observable user = {name: '', id: '', status: 'initial'};

  @action
  setUserName(userName) {
    this.user.name = userName;
  }

  @action
  async signIn() {
    let response;
    try {
      response = await userRepository.getUserId(this.user.name);
    } catch (error) {
      console.log(error);
    }

    this.user.id = (response && response.data) || 14;
    this.user.status =
      (response && response.header && response.header['User-Type']) ||
      'initial';
  }
}

export default UserStore;
