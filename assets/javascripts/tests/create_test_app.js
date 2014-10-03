import Ember from 'ember';
import Application from 'app';
import modules from 'calculator/modules';

export default function(attrs) {
  var App;

  var attributes = Ember.merge({
    rootElement: '#ember-testing',
    LOG_ACTIVE_GENERATION: false,
    LOG_VIEW_LOOKUPS: false
  }, attrs);

  Ember.run(function() {
    App = Application.createWithMixins(modules, attributes);

    App.Router.reopen({
      location: 'none'
    });

    App.setupForTesting();
    App.injectTestHelpers();
  });

  return App;
}
