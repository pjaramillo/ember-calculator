require(['common'], function() {
  require(['app', 'calculator/modules'], function(App, modules) {
    window.App = App['default'].createWithMixins(modules);
  });
});
