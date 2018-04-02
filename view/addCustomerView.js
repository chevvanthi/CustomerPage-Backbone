var addCustomerView = Backbone.View.extend({

tagName 	           : "div",
id      	           : "newCustomerForm",
className 			   : "popup",
events  	   : {

					"click #button" : "addOneCustomer",
					"click #cancel " : "hideAddCustomerForm",
 

		 		 },
hideAddCustomerForm :function  () 
				  {
				  	$('#newCustomerForm').remove();
	
				   },

 addOneCustomer : function()
 				  {		

 				  		 $('.searchCustomerLi').remove();


		              	 var customerFirstName  = $("#newcustomerName");
		              	 var customerLastName   = $("#newcustomerLname");
		              	 var customerMobile     = $('#newcustomerMobile');
		              	
		              	 var customerValue =
		              	 {
		              		 custFirstName  : customerFirstName.val(),
		              	     custLastName   : customerLastName.val(),
		              	     custMobile  	: customerMobile.val()
		              	 }
		              	
		              	 if(customerValue.custFirstName == ""){
		              	 	alert("please enter the name")
		              	 }else if(customerValue.custLastName == ""){
		              	 	alert("please enter the email")
		              	 }else if(customerValue.custMobile == ""){
		              	 	alert("please enter the mobile num")
		              	 }
		              	 
		              	 else{
		              	 cmodel = new customerModel(customerValue);
		              	
		              	customerFirstName.val("");
		              	customerLastName.val("");
		              	customerMobile.val("");
		              
		              	var singleView = new singleCustomerView({model:cmodel});    	
		              	$("#custome-name-show").append(singleView.render().el); 
		              	customerCollec.add(cmodel);
		              	console.log(customerCollec);


		              }
	              
	             },


render          : 	function()
					{

						if($('#list-holder').has($("#newCustomerForm")).length ==1) {

							return $('#list-holder #newCustomerForm').remove();

        				 } else{

						this.$el.append("<h2 id=addcustomer-header> Add new customer</h2>")
						this.$el.append(" <input type ='text'   id='newcustomerName'   placeholder ='Name'   class ='input'/>");
						this.$el.append(" <input type= 'text'   id='newcustomerLname'  placeholder='E-mail'  class ='input'/>");
						this.$el.append(" <input type= 'text'   id='newcustomerMobile' placeholder='Mobile'  class ='input'/>");
						this.$el.append(" <button id='button'>Add customer </button>");
						this.$el.append(" <button id = 'cancel'> cancel </button>");
					 	      
					 	 return this;

					 	}
					}

});