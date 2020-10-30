import {observable, action} from 'mobx';
import UserRepository from '../repos/UserRepository';

const userRepository = new UserRepository();

class UserStore {
  constructor(root) {
    this.root = root;
  }

  @observable user = {name: '', id: '', status: 'initial', password: '', token: ''};

  @action
  setUserName(userName) {
    this.user.name = userName;
  }

  @action
  setUserPassword(password) {
    this.user.password = password;
  }

  @action
  async signIn() {
    let response;
    try {
      response = await userRepository.getUserId(this.user.name);
    } catch (error) {
      console.log(error);
    }

    this.user.token = response.data.token; // 응답으로 받은 토큰 저장
    
    this.user.id = (response && response.data) || 14;
    this.user.status =
      (response && response.header && response.header['User-Type']) ||
      'initial';
  }

  @action
  async signUp() {
    let response;
    try {
      response = await userRepository.signUp(
        this.user.name,
        this.user.name,
        this.user.password,
      );
      console.log(response);
      if (response.status === 200) {
        return true;
      }
    } catch (error) {
      console.log(error);
    }
  }
}

export default UserStore;
