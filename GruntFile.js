/* eslint-disable import/no-extraneous-dependencies */
const load = require('load-grunt-tasks');
const lintHtmlReport = require('eslint-html-reporter');

module.exports = (grunt) => {
  load(grunt);
  grunt.initConfig({
    eslint: {
      options: {
        configFile: '.eslintrc.js',
        outputFile: 'report.html',
        format: lintHtmlReport,
      },
      target: ['.'],
    },
    second: {
      options: {},
    },
  });
  grunt.registerTask('lint', ['eslint']);
  grunt.registerTask('sec', ['second']);
};
