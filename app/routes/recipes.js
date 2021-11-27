import Route from '@ember/routing/route';
import RealtimeRouteMixin from 'emberfire/mixins/realtime-route';
import PerformanceRouteMixin from 'emberfire/mixins/performance-route';

export default class Recipes extends Route {
  model() {
    return this.store.findAll('recipe');
  }
}
