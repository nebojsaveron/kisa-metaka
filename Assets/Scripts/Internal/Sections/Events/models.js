(function () {

    models.MainModel = Backbone.Model.extend
    ({
        settings: {
            eventApiUrl: '/api/event'
        },
        schema: {
            activeEventHtml:      'String',
            isActiveEventLoading: 'Boolean'
        },

        initialize: function () {
            this.set('isActiveEventLoading', false);
        },

        getEventHtml: function (eventName) {
            var me = this;
            me.set('isActiveEventLoading', true);

            return $.ajax
            ({
                type: 'GET',
                url: me.settings.eventApiUrl,
                data: {
                    name: eventName
                }
            })
            .done(function (html) {
                me.set('activeEventHtml', html);
                me.set('isActiveEventLoading', false);
            });
        }

    });
})();
