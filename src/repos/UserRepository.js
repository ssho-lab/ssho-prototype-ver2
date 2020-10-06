import axios from 'axios';
import {exp} from 'react-native-reanimated';

class UserRepository {
  URL = 'http://13.125.225.61';

  constructor(url) {
    this.URL = url || this.URL;
  }

  getUserId(name) {
    return axios.get(this.URL + ':8080/users/signin', {
      params: {
        name,
      },
    });
  }

  signUp(name, email, password) {
    return axios.post(this.URL + '8080/users/signup', {
      params: {
        email: email,
        password: password,
        name: name,
      },
    });
  }
}

export default UserRepository;
