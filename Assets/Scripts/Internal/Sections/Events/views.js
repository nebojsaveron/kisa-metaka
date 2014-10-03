(function () {

    views.Shell = Backbone.View.extend
    ({
        el: '#shell',
        template: Handlebars.templates['shell'],

        initialize: function () {
            this.eventList   = new views.EventList  ({ model: this.model });
            this.activeEvent = new views.ActiveEvent({ model: this.model });
        },
        render: function () {
            this.$el.empty().html(this.template());
            this.$('#eventList').html(this.eventList.$el);
            this.$('#activeEvent').html(this.activeEvent.$el);
            this.eventList.render();
        },
        switchToEventView: function () {
            var event = this.activeEvent.$el;
            this.eventList.$el.slideUp(function () { event.slideDown(); });
            
        },
        switchToListView: function () {
            var list = this.eventList  .$el;
            this.activeEvent.$el.slideUp(function () { list.slideDown(); });
        }
    });

    views.EventList = Backbone.View.extend
    ({
        id: 'eventListView',
        template: Handlebars.templates['eventList'],

        initialize: function () {

        },

        events: {
            'click .eventListItem .header' : 'onEventClick'
        },

        render: function () {
            this.$el.empty().html(this.template());
        },

        onEventClick: function (e) {
            e.preventDefault();

            var eventName = $(e.target).parents('a').attr('href');
            app.router.navigate(eventName, { trigger: true });
        }
    });

    views.ActiveEvent = Backbone.View.extend
    ({
        id: 'activeEventView',
        template: Handlebars.templates['activeEvent'],
    
        initialize: function () {
            this.model.on('change:isActiveEventLoading', this.onIsActiveEventLoadingChange, this);
            this.model.on('change:activeEventHtml',      this.onActiveEventHtmlChange, this);
        },

        render: function (html) {
            this.$el.empty().html(this.template(''));
        },

        onIsActiveEventLoadingChange: function () {
            var isEventLoading = this.model.get('isActiveEventLoading');
            $('#loadingActiveEvent').toggleClass('ui-active', isEventLoading);
        },

        onActiveEventHtmlChange: function () {
            this.$el.empty().html(this.template(this.model.get('activeEventHtml')));
            this.onIsActiveEventLoadingChange();
        }
    });
})();
