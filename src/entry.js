window.videoApp = angular.module('video-app', ['ngRoute']);

videoApp.config(function ($routeProvider, $locationProvider) {

    $routeProvider
        .when('/', {
            templateUrl: 'pages/video-search/video-search.html',
            controller: 'VideoSearchCtrl',
        })
        .when('my-videos', {
            templateUrl: 'pages/my-videos.html',
            controller: 'MyVideosCtrl',
        });

    $locationProvider.html5Mode(true);

});
