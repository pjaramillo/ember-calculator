require(['common'], function() {
  require(['app', 'calculator/modules'], function(App, modules) {
    window.App = App.createWithMixins(modules);
  });
});
