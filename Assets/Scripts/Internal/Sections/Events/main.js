(function () {

    $(function () {

        $.ajaxSetup({ cache: false });

        app.router = new routers.App();
        app.mainModel = new models.MainModel();
        app.shell = new views.Shell({ model: app.mainModel });

        app.shell.render();

        Backbone.history.start
        ({
            pushState: true,
            root: '/dogadanja/',
        });
    });

})();
