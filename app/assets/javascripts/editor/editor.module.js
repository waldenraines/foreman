/**
 * @ngdoc module
 * @name  foreman.editor
 *
 * @description
 *   Module for the foreman ace editor.
 */
angular.module('foreman.editor', ['foreman-templates', 'ui.ace']);

angular.module('foreman.editor').run(function($templateCache){
  console.log($templateCache);
  console.log($templateCache.info());
  console.log($templateCache.get('editor.html'));
  console.log($templateCache.get('blah.html'));
});