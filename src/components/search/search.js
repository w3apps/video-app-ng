videoApp.component('searchBox', {
    templateUrl: 'components/search/search.html',
    controller: ['autoComplete', 'videosService', function(autoComplete, videosService) {

        this.searchText = null;

        this.querySearch = function(searchText) {
            if (searchText.length > 1) {
                return autoComplete.getSuggestions(this.searchText);
            }
            return [];
        };

        this.searchVideos = function(searchText) {
            videosService.searchVideos(searchText);
        };

    }]
});