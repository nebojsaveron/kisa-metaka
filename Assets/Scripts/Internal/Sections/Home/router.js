(function () {
    routers.App = Backbone.Router.extend({

        routes:
        {
            '' : 'home'
        },

        home: function ()
        {
            app.shell.render();
        }
    });
})();
