var singleCustomerView = Backbone.View.extend({

tagName    : 'ul',
id         :'name-ul',

events     :{ 
				"click  #name-li" : "showCustomerForm",
				"click .trash" :   "deleteCustomer",


			},

initialize : function(){

			this.listenTo(this.model,'change',this.render);

			},

showCustomerForm : function(event)
			{		

	 				value                =   $(event.currentTarget);
	 				var cusName     	 =   value[0].childNodes[0].data;
	 				split           	 =   cusName.split(" ");		
					var addcustomer 	 =   new addCustomerView();
				    var email       	 =   this.model.get("custLastName");
					 mobile      		 =   this.model.get("custMobile");

					$('#form-holder').show();

					$('.popup').hide();
					var template     =  _.template($("#custome-form-template").html());
					$("#form-holder").html( template({fname : cusName, email : email , mobile : mobile}));

					$('.blur').blur(function(){

					     console.log('blur');

						 var customerFirstName  = $("#fname");
		              	 var customerLastName   = $("#Customeremail");
		              	 var customerMobile     = $('#mobile');
		              	
		              	 var customerValue =
		              	 {
		              		 custFirstName  : customerFirstName.val(),
		              	     custLastName   : customerLastName.val(),
		              	     custMobile  	: customerMobile.val()
		              	 }


							 cmodel = new customerModel(customerValue);
						     customerCollec.set(cmodel);
						 
						 

					});

						 
			},

deleteCustomer : function (event){

				var value = $(event.currentTarget).parent();
				customerCollec.remove(this.model);
				value.remove();
				$('#form-holder').hide();


				},

render      : function() {
				
				$('#newCustomerForm').remove();
				this.$el.append($("<li id= 'name-li'>").append(this.model.get("custFirstName")));
				this.$el.append($("<span class ='trash'>delete</span>"));
                return this;

              }

});