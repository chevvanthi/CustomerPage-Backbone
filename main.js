$(document).ready(function(){


customerCollec = new customerCollection();



 var login = new loginView({model:customerCollec});
 $("#LoginContainer").append(login.render().el);


// var customerview   = new customerView({ model:customerCollec });
// $("#list-holder").append(customerview.render().el);
// console.log(customerview);


});
