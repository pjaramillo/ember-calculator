requirejs.config({
  baseUrl:  "/javascripts",
  shim: {
    'handlebars': {
      exports: 'Handlebars'
    },
    'ember': {
      deps: ['handlebars', 'jquery'],
      exports: 'Ember'
    }
  },
  paths: {
    'app': 'calculator/app',
    'jquery': 'vendor/jquery/jquery',
    'handlebars': 'vendor/handlebars/handlebars',
    'ember': 'vendor/ember/ember'
  }
});
