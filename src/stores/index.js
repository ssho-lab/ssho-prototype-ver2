import ItemStore from './Item';
import tagStore from './Tag';
import UserStore from './User';

class RootStore {
  constructor() {
    this.itemStore = new ItemStore(this);
    this.tagStore = new tagStore(this);
    this.userStore = new UserStore(this);
  }
}

export default RootStore;
