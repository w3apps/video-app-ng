window.videoApp = angular.module('video-app', ['ngMaterial', 'ngRoute']);

videoApp.config(function ($routeProvider, $locationProvider, $sceDelegateProvider) {

    $sceDelegateProvider.resourceUrlWhitelist([
        'self',
        'http://suggestqueries.google.com/complete/search**'
    ]);

    $routeProvider
        .when('/', {
            templateUrl: 'pages/video-search/video-search.html',
            controller: 'VideoSearchCtrl',
        })
        .when('/my-videos', {
            templateUrl: 'pages/my-videos/my-videos.html',
            controller: 'MyVideosCtrl as ctrl',
        });

    $locationProvider.html5Mode(true);

});
