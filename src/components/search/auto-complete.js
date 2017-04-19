videoApp.service('autoComplete', ['$http', function ($http) {

    return {
        getSuggestions: function(searchText) {
            console.log('getSuggestions');
            return $http.jsonp(`http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=${searchText}`)
                .then(function (response) {
                    return response.data[1];
                });
        }
    }

}]);