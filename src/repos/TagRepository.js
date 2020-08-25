import axios from 'axios';

class TagRepository {
  URL = 'http://13.125.68.140';

  constructor(url) {
    this.URL = url || this.URL;
  }
  // Todo - userId 값 식별해서 요청 보내기 
  getTags() {
    return axios.get(this.URL + ':8083/tag/reco?userId=14', {});
  }

  searchTag(keyword) {
    return axios.get(this.URL + ":8083/tag/search?keyword=" + keyword + "&userId=14");
  }
}

export default TagRepository;
