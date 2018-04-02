var searchCustomer = Backbone.View.extend({

tagName    : 'ul',
className  :'searchCustomerLi',
events     : {
				'click' : 'showCustomerDetails'
			},

showCustomerDetails : function (event) 
				{
					 

					  var target        =  event.currentTarget;
					  var  customer_name =  target.childNodes[0].innerText;

					   var found 		=  customerCollec.where({custFirstName :customer_name });

					 var custName   =  found[0].get('custFirstName');
					 var custEmail  =  found[0].get('custLastName');
					 var custMobile =  found[0].get('custMobile');
					 var  split     =  custName.split(" ");

					 var template   =  _.template($("#custome-form-template").html());
					 $("#form-holder").html( template({fname : custName, email : custEmail , mobile : custMobile}));
					


				},

render     : function(){

						var searchValue = 	$('#add').val();
						 var found 		= 	customerCollec.where({custFirstName : searchValue});

 						 if(found.length > 0){ 	
 						 	
 						 		for(var i=0;i<found.length;i++){
 						 		var create_li = $('<li/>')
 						 		create_li.append(found[i].get('custFirstName'));
 						 	 	this.$el.append(create_li);

	 						 	}
	 						}else{

	 							this.$el.append("No customer found");
	 						}

	 							return this.$el;

			}


})