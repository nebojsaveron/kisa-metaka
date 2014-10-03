(function () {
    views.Shell = Backbone.View.extend({

        el: '#shell',

        templates: {
            'shell'     : Handlebars.templates['shell'    ],
            'billboard' : Handlebars.templates['billboard'],
            'about'     : Handlebars.templates['about'    ],
            'keyPoints' : Handlebars.templates['keyPoints'],
            'members'   : Handlebars.templates['members'  ],
            'social'    : Handlebars.templates['social'   ]
        },

        initialize: function () {

        },

        render: function () {
            this.$el.append(this.templates['shell']());

            this.$el.find('#billboardContainer').append(this.templates['billboard'](                        ));
            this.$el.find('#aboutContainer'    ).append(this.templates['about'    ](                        ));
            this.$el.find('#keyPointsContainer').append(this.templates['keyPoints'](                        ));
            this.$el.find('#membersContainer'  ).append(this.templates['members'  ](window.preloaded.members));
            this.$el.find('#socialContainer'   ).append(this.templates['social'   ](                        ));
        }

    });
})();
