// var $form = $("#ajax-form");



// $('#ingredientsList').on("click", '.outOfStock', function(event){

//   //sends post request to server side with the id and updated out of stock boolean 
//   $.post("/ingredient/outOfStock", { 
//     id: id, 
//     outOfStock: true
//   })
//   .done(function(updatedObject, status){
//     //Input: updated object and status
//     //Output: removed updated object from handlebars template 

//     $('li#'+ updatedObject._id).remove(); 

//   })
//   .error(function(err){
//     //Input: error object 
//     //Output: logs object if there is an error 
//     if(err){ 
//       console.log("There has been an error editing the ingredient", err); 
//     }    
//   }); 
// }); 

// window.sr = ScrollReveal();

// sr.reveal('.foo');
// sr.reveal('.bar');

// $("#something").on("click", ".button", function(event){ 

// 	console.log("You clicked me!")
// })

new scrollReveal();