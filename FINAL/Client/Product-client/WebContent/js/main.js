Backbone.View.prototype.close = function () {
    console.log('Closing view ' + this);
    if (this.beforeClose) {
        this.beforeClose();
    }
    this.remove();
    this.unbind();
};

var AppRouter = Backbone.Router.extend({

    initialize: function() {
        $('#header').html( new HeaderView().render().el );
    },

	routes: {
		""			: "list",
		"products/new"	: "newProduct",
		"products/:id"	: "productDetails"
	},

	list: function() {
        this.before();
  	},

	productDetails: function(id) {
        this.before(function() {
			var product = app.productList.get(id);
		    app.showView( '#content', new ProductView({model: product}) );
        });
  	},

	newProduct: function() {
        this.before(function() {
    		app.showView( '#content', new ProductView({model: new Product()}) );
        });
	},

    showView: function(selector, view) {
        if (this.currentView)
            this.currentView.close();
        $(selector).html(view.render().el);
        this.currentView = view;
        return view;
    },

    before: function(callback) {
        if (this.productList) {
            if (callback) callback();
        } else {
            this.productList = new ProductCollection();
       		this.productList.fetch({success: function() {
               $('#sidebar').html( new ProductListView({model: app.productList}).render().el );
               if (callback) callback();
            }});
        }
    }

});

tpl.loadTemplates(['header', 'product-details', 'product-list-item'], function() {
    app = new AppRouter();
    Backbone.history.start();
});