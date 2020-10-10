import axios from 'axios';
import temp from '../temp';

class ShoppingBagRepository {
  URL = 'http://13.124.59.2';
  token =
    'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJzc2hvIiwidXNlcl9pZHgiOjE4LCJleHAiOjE2MDUwMTA4MzV9.vwk36zLdeaJWTNgAamE6cHYmpudrEtETX_bhgbVwTWc';
  constructor(url) {
    this.URL = url || this.URL;
    this.token = this.token;
  }

  fetchItemList() {
    return axios.get(this.URL + ':8081/item/shopping-bag', {
      headers: {
        Authorization: this.token,
      },
    });
  }
}

export default ShoppingBagRepository;
