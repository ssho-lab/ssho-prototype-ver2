import {observable, action} from 'mobx';
import UserRepository from '../repos/UserRepository';

const userRepository = new UserRepository();

class UserStore {
  constructor(root) {
    this.root = root;
  }

  @observable user = {name: '', email: '', id: '', status: 'initial', password: '', token: ''};

  @action
  setUserName(userName) {
    this.user.name = userName;
  }

  @action
  setUserEmail(userEmail) {
    this.user.email = userEmail;
  }

  @action
  setUserPassword(password) {
    this.user.password = password;
  }

  @action
  async signIn() {
    let response;
    try {
      response = await userRepository.signIn(
        this.user.email,
        this.user.password,
      );
      if (response.status === 200) {
        this.user.token = response.data.token || ''; // 응답으로 받은 토큰 저장
      }
    } catch (error) {
      console.log(error);
    }

    console.log('!!!USER TOKEN :' + this.user.token);
    this.user.id = 14;
    this.user.status = response.data.userType || 'initial';
  }

  @action
  async signUp() {
    let response;
    try {
      response = await userRepository.signUp(
        this.user.email,
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
