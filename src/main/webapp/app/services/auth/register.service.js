(function () {
    'use strict';

    angular
        .module('myJHipsterBlogApp')
        .factory('Register', Register);

    Register.$inject = ['$resource'];

    function Register ($resource) {
        return $resource('api/register', {}, {});
    }
})();
