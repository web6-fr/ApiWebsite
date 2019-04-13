module.exports = function (grunt, options) {
  return {
    dist: {
      files: {
        '<%= distPath %>/assets/js/layout.js': '<%= tmpPath %>/assets/js/layout.js'
      }
    }
  };
};