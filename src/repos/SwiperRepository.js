import axios from 'axios';

class SwiperRepository {
  URL = 'http://101.101.217.66';

  constructor(url) {
    this.URL = url || this.URL;
  }

  getItemList() {
    return axios.get(this.URL + ':8080/cache/user-item?userId=', 14);
  }

  saveSwipeLogs(SwipeLogs) {
    axios
      .post(this.URL + ':8082/log/swipe', SwipeLogs)
      .then(response => {
        console.log('saveSwipeLogs');
        console.log(response);
      })
      .catch(error => console.log(error));
  }
}

export default SwiperRepository;
