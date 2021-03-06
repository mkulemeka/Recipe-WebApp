import EmberRouter from '@ember/routing/router';
import config from 'recipe-web-app/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('about');
  this.route('add-recipe');
});
