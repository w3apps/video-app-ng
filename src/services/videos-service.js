(function () {
    'use strict';

    const VIDEOS_COUNT_LIMIT = 20;
    const API_KEY = 'AIzaSyBSbxBuOc7rKjU-mahRSt94B38dsq9NGLQ';

    videoApp.service('videosService', ['$rootScope', '$http', function ($rootScope, $http) {

        return {

            searchVideos: function(searchText) {

                return $http.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=${VIDEOS_COUNT_LIMIT}&q=${searchText}&type=video+&videoDefinition=high&key=${API_KEY}`)
                    .then(function(response) {
                        $rootScope.$emit('videosService:searchVideos', response.data.items);
                    });

            }

        }

    }]);

})();