import {observable, action} from 'mobx';
import tagModel from '../models/TagModel';
import TagRepository from '../repos/TagRepository';

const tagRepository = new TagRepository();

class tagStore {
  constructor(root) {
    this.root = root;
  }

  // Todo 1. tag객체 명시
  @observable tagList = [];

  // Todo 2. API 연결해서 Tag List 받아오기
  @action 
  async getTags() {
    let response;
    try {
      response = await tagRepository.getTags();
    } catch (error) {
      console.log(error);
    }
    const data = response.data;
    if(response.headers["user-type"] === "initial"){
      this.tagList = [{embedding: null, id: 0, name: "랜덤 추천"}]
    }
    else if(response.headers["user-type"] === "pass"){
      this.tagList = data.map(tag => new tagModel(tag));
    }
  }

  @action
  async searchTag(searchWord) {
    let response;
    try{
      response = await tagRepository.searchTag(searchWord);
    } catch (error) {
      console.log(error);
    }
    this.tagList = response.data;
  }
}

export default tagStore;
