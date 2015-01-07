module.exports = function(config){
  config.set({

    basePath : './',

    files : [
      'vendor/angular.js',
      'angular-route/angular-route.js',
      'angular-mocks/angular-mocks.js',
      '**/*.js',
      '**/*.js'
    ],

    autoWatch : true,

    frameworks: ['jasmine'],

    browsers : ['Chrome'],

    plugins : [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine',
            'karma-junit-reporter'
            ],

    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

  });
};
