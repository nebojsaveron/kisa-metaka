(function () {

    views.Shell = Backbone.View.extend
    ({
        el:        '#shell',
        template:  Handlebars.templates['shell'],

        initialize: function()
        {
            this.latestNews        = new views.LatestNews       ({ model: this.model });
            this.activeNews        = new views.ActiveNews       ({ model: this.model });
            this.activeNewsSummary = new views.ActiveNewsSummary({ model: this.model });
        },
        render:     function()
        {
            this.$el .empty() .html(this.template());

            this.$('#newsNavigation'              ).append(this.latestNews       .$el);
            this.$('#activeNews'                  ).append(this.activeNews       .$el);
            this.$('#activeNewsSummaryPlaceholder').append(this.activeNewsSummary.$el);

            this.latestNews         .render();
            this.activeNews         .render();
            this.activeNewsSummary  .render();
        }
    });

    views.ActiveNews = Backbone.View.extend
    ({
        id:        'activeNewsView',
        
        template:  Handlebars.templates['activeNews'],

        initialize: function()
        {
            this.model.on('change:activeNews'         , this.onActiveNewsChange         , this);
            this.model.on('change:isActiveNewsLoading', this.onIsActiveNewsLoadingChange, this);
        },

        render:                 function()
        {
            var modelJson = this.model.toJSON();

            this.$el .empty() .html(this.template(modelJson));

            return this;
        },

        onActiveNewsChange:          function()
        {
            this.render();

            var activeNewsTitle = this.model.get('activeNews').title;

            helpers.setPageTitle(activeNewsTitle);
        },
        onIsActiveNewsLoadingChange: function()
        {
            var isActiveNewsLoading = this.model.get('isActiveNewsLoading');

            $('#loadingActiveNews').toggleClass('ui-active', isActiveNewsLoading);
        }
    });    
    
    views.LatestNews = Backbone.View.extend
    ({
        id:        'newsNavigationView',

        templates: {
            shell: Handlebars.templates['newsNavigation_shell'],
            news:  Handlebars.templates['newsNavigation_news' ]
        },

        events:
        {
            'click .news:not(.ui-active)'                      : 'onNewsClick',
            'click .loadMoreLatestNewsButton:not(.ui-disabled)': 'onLoadMoreLatestNewsClick',
            'keyup #searchInput'                               : 'onNewsSearchInputKeyUp'
        },

        initialize: function()
        {
            this.model.get('latestNewsPages').on('add', this.onLatestNewsPagesChange, this);
            
            this.model.on('change:searchResultNews',          this.onSearchResultNewsChange,          this);
            this.model.on('change:activeSearchQuery',         this.onActiveSearchQueryChange,         this);
            this.model.on('change:isNextPageAvailable',       this.onNextNewsPageAvailabilityChange,  this);
            this.model.on('change:activeSearchRequestsCount', this.onActiveSearchRequestsCountChange, this);
        },
        render:     function()
        {
            var modelJson = this.model.toJSON();

            this.$el.empty().html(this.templates.shell(modelJson));

            this.$('#searchInput').searchBox();

            this.switchNewsListToLatest();

            this.highlightSelectedNewsItem(preloaded.activeNews.id);

            return this;
        },

        onNewsClick:               function(e)
        {
            e.preventDefault();

            var currentNewsElement = $(e.currentTarget);
            var currentNewsId      = currentNewsElement.data('news-id');
            var currentNewsHref    = currentNewsElement.data('href'   );

            this.highlightSelectedNewsItem(currentNewsId);

            app.router.navigate(currentNewsHref, { trigger: true });

            helpers.scrollTo($('body'), 200);
        },
        onLoadMoreLatestNewsClick: function( )
        {
            var me             = this;
            var loadingElement = this.$('#newsContainer .loadingNews');
            var loadMoreButton = this.$('.loadMoreLatestNewsWrapper');
            
            loadingElement.addClass('ui-active');
            loadMoreButton.addClass('ui-disabled');

            this.model.fetchNextNewsPage()
            .done(function()
            {
                loadingElement.removeClass('ui-active');
                loadMoreButton.removeClass('ui-disabled');
            });
        },
        onNewsSearchInputKeyUp:    function(e)
        {
            var query = $(e.currentTarget).val();

            this.model.set('activeSearchQuery', query);
        },

        onActiveSearchQueryChange:         _.throttle(function()
        {
            var query = this.model.get('activeSearchQuery');

            if (query.length == 0)
            {
                this.switchNewsListToLatest();
                return;
            }
            
            this.switchNewsListToSearch();

            this.model.fetchNewsSearchResults(query);

        }, 500),
        onLatestNewsPagesChange:           function(addedNewsPageModel)
        {
            var latestNewsList = this.$('#newsListContainer');
            
            var addedNewsPageModelJson = addedNewsPageModel.toJSON();

            latestNewsList.append(this.templates.news(addedNewsPageModelJson.posts));

            this.highlightSelectedNewsItem(this.model.get('activeNews').id);
        },
        onSearchResultNewsChange:          function(                  )
        {
            var searchResultNewsList = this.$('#newsSearchListContainer');
            
            var news = this.model.get('searchResultNews');

            searchResultNewsList.empty().html(this.templates.news(news));

            this.highlightSelectedNewsItem(this.model.get('activeNews').id);
        },
        onNextNewsPageAvailabilityChange:  function(                  )
        {
            var loadMoreButton = this.$('.loadMoreLatestNewsWrapper');
            var isNextPageAvailable = this.model.get('isNextPageAvailable');

            if (isNextPageAvailable)
            {
                loadMoreButton.show();
            }
            else
            {
                loadMoreButton.hide();
            }
        },
        onActiveSearchRequestsCountChange: function(                  )
        {
            var count = this.model.get('activeSearchRequestsCount');
            var searchLoading = this.$('#newsSearchContainer .loadingNews');

            if (count > 0) 
            {
                searchLoading.addClass('ui-active');
            }
            else
            {
                searchLoading.removeClass('ui-active');
            }
        },
        
        highlightSelectedNewsItem: function(selectedNewsId)
        {
            this.$("li").removeClass('ui-active');

            var selectedNewsElement = this.$("li").filter(function () { return $(this).data('news-id') == selectedNewsId; });

            selectedNewsElement.addClass('ui-active');
        },
        switchNewsListToSearch:    function(              )
        {
            this.$('#newsContainer' ).hide();
            this.$('#newsSearchContainer').show();
        },
        switchNewsListToLatest:    function(              )
        {
            this.$('#newsContainer' ).show();
            this.$('#newsSearchContainer').hide();
        }
    });

    views.ActiveNewsSummary = Backbone.View.extend
    ({
        id:        'activeNewsSummary',
        className: 'activeNewsSummary',
        template:  Handlebars.templates['activeNewsSummary'],

        initialize: function()
        {
            this.model.on('change:activeNews', this.onActiveNewsChange, this);
        },
        render:     function()
        {
            var modelJson = this.model.toJSON();

            this.$el.empty().html(this.template(modelJson));

            return this;
        },

        onActiveNewsChange: function()
        {
            this.render();
        }
    });
})();
