//gruntfile.js
module.exports = function(grunt) {

  grunt.initConfig({
    watch: {
      files: ['Gruntfile.js', 'eventex/**/*.py'],
      tasks: ['shell']
    },
    shell: {
      test: {
        command: '.wttd/Scripts/activate && python manage.py test'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-shell');

  grunt.registerTask('default', ['watch']);
};