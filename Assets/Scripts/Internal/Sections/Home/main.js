(function () {

    $(function () {

        app.shell = new views.Shell();
        app.router = new routers.App();

        Backbone.history.start
        ({
            pushState: true,
            root: ''
        });
    });
})();
