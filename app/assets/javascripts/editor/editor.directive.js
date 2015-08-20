/**
 * @ngdoc directive
 * @name foreman.editor.directive:editor
 *
 * @description
 *   Simple directive for wrapping ace editor with some defaults.
 *
 * @example
 *   <pre>
 *     <div editor>
 *         <textarea></textarea>
 *     </div>
 */
angular.module('foreman.editor').directive('editor', function () {
  return {
    templateUrl: 'editor.html',
    transclude: true,
    scope: {
      options: '='
    },
    controller: function ($scope) {
      var aceLoaded = function (editor) {
        console.log(editor);
      };

      var aceChanged = function (event) {
        var data = event[0].data,
          editor = event[1];
        console.log(data);
        console.log(editor);
      };

      const DEFAULT_OPTIONS = {
        onLoad: aceLoaded,
        onChange: aceChanged,
        theme: 'twilight'
      };

      $scope.options = angular.extend(DEFAULT_OPTIONS, $scope.options);

    },
    link: function (scope) {

    }
  };
});
