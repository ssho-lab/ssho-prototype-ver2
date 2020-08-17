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
  async getItem() {
    let response;
    try {
      response = await tagRepository.getTagList();
    } catch (error) {
      console.log(error);
    }
    const data = response.data;
    this.tagList = data.map(tag => new tagModel(tag));
  }
}

export default tagStore;
