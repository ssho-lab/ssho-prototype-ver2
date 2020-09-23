import axios from 'axios';

class SwiperRepository {
  URL = 'http://3.35.129.79';

  constructor(url) {
    this.URL = url || this.URL;
  }

  getItemList() {
    return axios.get(this.URL + ':8080/cache/user-item', {
      params: {
        userId: 14,
      },
    });
  }

  saveSwipeLogs(SwipeLogs) {
    axios
      .post('http://13.124.59.2' + ':8082/log/swipe', SwipeLogs)
      .then(response => {
        console.log('saveSwipeLogs success');
      })
      .catch(error => console.log(error));
  }
}

export default SwiperRepository;
