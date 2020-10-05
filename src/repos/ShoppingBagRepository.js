import axios from 'axios';
import temp from '../temp';

class ShoppingBagRepository {
  URL = 'http://13.124.59.2:8081';
  token = 'token';

  constructor(url) {
    this.URL = url || this.URL;
    this.token = this.token;
  }

  fetchItemList() {
    return axios.get('/item/shopping-bag', {
      headers: {Authorization: this.token},
    });
  }
}

export default ShoppingBagRepository;
