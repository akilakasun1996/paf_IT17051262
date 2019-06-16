window.ProductListView = Backbone.View.extend({

    tagName:'ul',

    initialize:function () {
        this.model.bind("reset", this.render, this);
        var self = this;
        this.model.bind("add", function (product) {
            $(self.el).append(new ProductListItemView({model:product}).render().el);
        });
    },

    render:function (eventName) {
        _.each(this.model.models, function (product) {
            $(this.el).append(new ProductListItemView({model:product}).render().el);
        }, this);
        return this;
    }
});

window.ProductListItemView = Backbone.View.extend({

    tagName:"li",

    initialize:function () {
        this.template = _.template(tpl.get('product-list-item'));
        this.model.bind("change", this.render, this);
        this.model.bind("destroy", this.close, this);
    },

    render:function (eventName) {
        $(this.el).html(this.template(this.model.toJSON()));
        return this;
    }

});