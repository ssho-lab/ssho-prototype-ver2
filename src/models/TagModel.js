import {extendObservable, Autobind} from 'mobx';

class tagModel {
  constructor(data) {
    extendObservable(this, data);
  }
}

export default tagModel;
