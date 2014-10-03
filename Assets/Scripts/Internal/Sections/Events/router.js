(function () {

    routers.App = Backbone.Router.extend
    ({
        routes: {
            '': 'home',
            ':route' : 'event'
        },

        initialize: function () {
        },

        home: function () {
            app.shell.switchToListView();
        },
        event: function (route) {
            console.log('x');
            app.mainModel.getEventHtml(route);
            app.shell.switchToEventView();
        },
        fallback: function () {
            this.navigate('', { replace: true, trigger: true });
        }
    });

})();