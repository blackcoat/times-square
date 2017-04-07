import _ from 'lodash';

export class Dashboard {
  constructor(data) {
    this.data = data;
    this.id   = _.uniqueId();
    this.viewClass = null;
  }
}
