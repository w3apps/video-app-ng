videoApp.controller('VideoSearchCtrl', ['$rootScope', function ($rootScope) {

    console.log('VideoSearchCtrl');
    $rootScope.$on('videosService:searchVideos', function(e, data) {
        console.log('changesss', data);
    });

}]);