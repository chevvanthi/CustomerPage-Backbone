var showCustomerDetails = Backbone.View.extend({
tagName	: 'div',
id  	: 'customer-detials',


render : function(){

			this.$el.append(" <div class ='holder'> <img src(unknown)> <input type = 'text' id = 'fname' value = '<%= fname %>'/></div>")
			this.$el.append(" <div class ='holder'><input type ='text'  id = 'Customeremail' value ='<%= email %>'/></div>");
			this.$el.append(" <div class ='holder'> <input type ='text' id = 'mobile' value ='<%= mobile %>'/></div>");
			
        
           return this;

			}


});