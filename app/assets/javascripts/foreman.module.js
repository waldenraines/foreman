(function () {
    'use strict';

    /**
     * @ngdoc config
     * @name  foreman.config
     *
     * @requires $httpProvider
     *
     * @description
     *   Ensure all XHR requests are compiled if they contain html.
     */

    function ForemanConfig($httpProvider) {
        $httpProvider.interceptors.push(function () {
            return {
                request: function (config) {

                },
                response: function (response) {
                    console.log(response);
                    return response;
                }
            };
        });
    }

    ForemanConfig.$inject = ['$httpProvider'];

    /**
     * @ngdoc module
     * @name  foreman
     *
     * @description
     *   Parent module for the foreman application.
     */
    angular.module('foreman', ['foreman.editor']);
    angular.module('foreman').config(ForemanConfig);

})();

