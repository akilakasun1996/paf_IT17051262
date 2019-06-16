window.ProductView = Backbone.View.extend({

    tagName: "div", 
    
    initialize: function() {
        this.template = _.template(tpl.get('product-details'));
		this.model.bind("change", this.render, this);
    },

    render: function(eventName) {
		$(this.el).html(this.template(this.model.toJSON()));
		return this;
    },

    events: {
        "change input": "change",
		"click .save": "saveProduct",
		"click .delete": "deleteProduct"
    },

    change: function(event) {
        var target = event.target;
        console.log('changing ' + target.id + ' from: ' + target.defaultValue + ' to: ' + target.value);
		
    },

	saveProduct: function() {
		this.model.set({
			name: $('#name').val(),
			category: $('#category').val(),
			country: $('#country').val(),
			price: $('#price').val(),
			year: $('#year').val(),
			description: $('#description').val()
		});
		if (this.model.isNew()) {
			var self = this;
			app.productList.create(this.model, {
				success: function() {
					app.navigate('products/'+self.model.id, false);
				}
			});
		} else {
			this.model.save();
		}

		return false;
	},

	deleteProduct: function() {
		this.model.destroy({
			success: function() {
				alert('Product deleted successfully');
				window.history.back();
			}
		});
		return false;
	}

});