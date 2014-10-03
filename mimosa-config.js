exports.config = {
  minMimosaVersion:"2.3.1",
  modules: [
    // misc
    'jshint',
    'bower',

    // ember-specific stuff
    'ember-module-import',
    'ember-test',

    // compilers
    'esperanto-es6-modules',
    'copy',
    'ember-handlebars',
    'sass',
    'stream-copy',

    // server support
    'live-reload',
    'server',
    'server-reload',

    // packaging
    'combine',
    'minify-js',
    'minify-css',
    'minify-img',
    'require@3.0.0',
    'web-package',
    'handlebars-on-window',
    'fix-rjs-ember'
  ],
  sass: {
    // want to use node-sass rather than ruby compiler
    lib: require('node-sass')
  },
  require: {
    optimize: {
      overrides: {
        paths: {
          // want to use ember.prod for packaging
          ember: 'vendor/ember/ember.prod'
        }
      }
    }
  },
  emberHandlebars: {
    emberPath: "ember",
    helpers:["calculator/helpers/helpers"]
  },
  emberModuleImport: {
    apps: [{
      namespace: "calculator",
      manifestFile: "modules",
      additional: ["router"]
    }]
  },
  emberTest: {
   apps: [{
     testLocation: 'tests',
     testAppFactory: 'create_test_app',
     stylesheetPaths: [
       '/public/stylesheets/vendor.css',
       '/public/stylesheets/calculator.css'
     ]
   }]
  },
  template: {
    nameTransform: /.*\/templates\//,
    writeLibrary: false,
  },
  combine: {
    folders:[{
      folder: "stylesheets/vendor",
      output: "stylesheets/vendor.css"
    }]
  },
  server: {
    views: {
      compileWith: "handlebars",
      extension: "hbs"
    }
  }
};
