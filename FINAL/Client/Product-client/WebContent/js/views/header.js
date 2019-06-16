window.HeaderView = Backbone.View.extend({

    initialize: function() {
        this.template = _.template(tpl.get('header'));
    },

    render: function(eventName) {
		$(this.el).html(this.template());
		return this;
    },

    events: {
		"click .new"    : "newProduct"
    },

	newProduct: function(event) {
		app.navigate("products/new", true);
		return false;
	}

});