var customerView = Backbone.View.extend({
tagName 	   : "ul",
events         : {
	          		"keypress #add":"searchCustomer",
	          		"click #newCustomer" : "showForm",
	          		"click .trash" : "deleteCustomer",
	          		
	           	},


showForm   : function(event)
 				{
 					
 					addcustomer  = new addCustomerView();
 					$("#list-holder").append(addcustomer.render().el);

 				},
 searchCustomer : function(event){

 					if(event.keyCode == 13){

 						$('.searchCustomerLi').remove();
 						$('#name-ul').hide();
 						var searchCustomerresult = new searchCustomer();
 						$("#searchDiv").append(searchCustomerresult.render());
 					}
 					

 				},

 render         : function()
        			{ 		
        				 
		 	               this.$el.append("<input type ='text' id ='add'/>  <a id='newCustomer'> + </a>");
 						   return this;		

                   }



});