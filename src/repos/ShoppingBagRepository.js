import axios from 'axios';
import temp from '../temp';

class ShoppingBagRepository {
  URL = 'http://13.124.59.2:8081';
  token =
    'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJzc2hvIiwidXNlcl9pZHgiOjE4LCJleHAiOjE2MDQ2NzM1Nzh9.cFY430MRfKvyAwOz3XvHwvIl8OsOdQFKufmSXO7uMbE';

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
