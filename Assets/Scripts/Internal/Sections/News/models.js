(function () {

    models.MainModel = Backbone.Model.extend
    ({
        settings: {
            newsUrl:       '/api/post',   
            newsPageUrl:   '/api/posts/latest',
            newsSearchUrl: '/api/posts/search'
        },

        schema: {
            activeNews:                 'News',
            isActiveNewsLoading:        'Boolean',
            
            latestNewsPages:           ['NewsPage'],
            isNextPageAvailable:        'Boolean',
                                       
            searchResultNews:          ['News'],
                                       
            activeSearchQuery:         'searchQuery',
            activeSearchRequestsCount: 'Integer'
        },

        initialize: function()
        {
            this.set('activeNews',                preloaded.activeNews     );
            this.set('isActiveNewsLoading',       false                    );
            this.set('latestNewsPages',           new Backbone.Collection());
            this.set('isNextPageAvailable',       true                     );
            this.set('activeSearchRequestsCount', 0                        );

            this.fetchNextNewsPage();
        },

        fetchNews:         function(postId)
        {
            var me = this;
            me.set('isActiveNewsLoading', true);

            return $.ajax
            ({
                type: 'GET',
                url:  this.settings.newsUrl,
                data: { 
                    postId: postId,
                }
            })
            .done(function(news)
            {
                me.set('activeNews', news);
                me.set('isActiveNewsLoading', false);
            });
        },
        fetchNextNewsPage: function(      )
        {
            var me = this;
            
            return $.ajax
            ({
                type: 'GET',
                url: this.settings.newsPageUrl,
                data: {
                    pageIndex: this.nextNewsPageIndex()
                }
            })
            .done(function(newsPage)
            {
                me.set('isNextPageAvailable', newsPage.isNextPageAvailable);
                
                me.get('latestNewsPages').add(newsPage);
            });
        },
        fetchNewsSearchResults:   function(query )
        {
            var me = this;

            this.set('activeSearchRequestsCount', this.get('activeSearchRequestsCount') + 1);

            return $.ajax
            ({
                type: 'GET',
                url: this.settings.newsSearchUrl,
                data: {
                    searchQuery: query,
                    pageIndex:   0
                }
            })
            .done(function(news) 
            {
                me.set('searchResultNews', news);
            })
            .always(function()
            {
                me.set('activeSearchRequestsCount', me.get('activeSearchRequestsCount') - 1);
            });
        },

        nextNewsPageIndex: function()
        {
            return this.get('latestNewsPages').length;
        }
    });

})();
