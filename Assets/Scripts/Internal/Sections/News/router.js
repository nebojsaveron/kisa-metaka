(function () {

    routers.App = Backbone.Router.extend
    ({
        routes: {
            ':newsId/:title' : 'home'
        },

        initialize: function() 
        {
            //this.on('route', window.googleAnalytics.sendPageView);

            //window.googleAnalytics.sendPageView();
        },

        home:     function(newsId)
        {
            app.mainModel.fetchNews(newsId);
        },
        fallback: function(      )
        {
            this.navigate('', { replace: true, trigger: true });
        }
    });

})();
