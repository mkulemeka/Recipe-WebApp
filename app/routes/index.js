import Route from '@ember/routing/route';
import { database } from 'firebase';

export default class IndexRoute extends Route {
  model() {
    return fetch('sample.json').then(function (res) {
      return res.json();
    });
  }
}
