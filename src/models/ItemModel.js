import {extendObservable, Autobind} from 'mobx';

class itemModel {
  constructor(data) {
    extendObservable(this, data);
  }
}

export default itemModel;
