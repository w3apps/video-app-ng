window.videoApp = angular.module('video-app', ['ngRoute']);

videoApp.config(function ($routeProvider, $locationProvider) {

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
