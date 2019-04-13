module.exports = function (grunt, options) {
  return {
    options: {
      separator: ';',
      sourceMap: true
    },
    dist: {
      files: {
        '<%= tmpPath %>/assets/js/layout.js': ['<%= devPath %>/assets/js/layout.js']
      }
    }
  };
};