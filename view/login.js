
var loginView = Backbone.View.extend({
tagName  : 'div',
id       : 'loginDiv',



render   :function  () {



	    var userCredentials = {
					  
					  var userId       : $('#userId').val(),
					  var userPassword : $('#userPassword').val()
					 }
					  
			this.$el.append("<input type='text' id='userId' placeholder ='Email'>")
			this.$el.append("<input type='password'id-'userPassword' placeholder='password'>")
			this.$el.append("<button id='signin'>Login</button>");
			return this;
  			}



});