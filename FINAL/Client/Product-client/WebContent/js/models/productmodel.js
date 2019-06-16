window.Product = Backbone.Model.extend({
	urlRoot: "api/products",
	defaults: {
		"id": null,
	    "name":  "",
	    "category":  "",
	    "country":  "",
	    "year":  "",
	    "price":  "",
	    "description":  ""
	  }
});

window.ProductCollection = Backbone.Collection.extend({
	model: Product,
	url: "api/products"
});