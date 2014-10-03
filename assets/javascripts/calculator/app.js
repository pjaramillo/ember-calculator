import Ember from 'ember';
import 'templates';

var App = Ember.Application.extend();

// Override didInsertElement() to trigger event to run
// DOM-ready dependent code, like jQuery plugins
Ember.View.reopen({
  didInsertElement: function() {
    this._super();
    Ember.run.scheduleOnce('afterRender', this, this.afterRenderEvent);
  },
  afterRenderEvent: function() {
    // implement this hook in your own Views
  }
});

export default App;
