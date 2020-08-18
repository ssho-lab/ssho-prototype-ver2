import ItemStore from "./Item";
import tagStore from "./Tag";

class RootStore {
  constructor() {
    this.itemStore = new ItemStore(this);
    this.tagStore = new tagStore(this);
  }
}

export default RootStore;
