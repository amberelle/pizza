function Pizza (name, size, toppings1, toppings2, toppings3 ){
			this.name = name;
			this.size = size;
			this.toppings1 = toppings1;
			this.toppings2 = toppings2;
			this.toppings3 = toppings3;
		}
// Pizza.prototype.price = function(){
// 	var price;
// 	if(this.age <= 12){
// 		price = 3;
// 	}
// 	if(this.age >= 65){
// 		price = 4;
// 	}
// 	if(this.age > 12 && this.age < 65){
// 		price = 5;
// 	}
// 	if(this.time === 3){
//     	price += 2;
// 	}
// 	if(this.movie === 1){
// 		price += 1;
// 	}
// 	return price;
// }
// $(function(){
// 	$("form#movie-form").submit(function(event){
// 		event.preventDefault();
//
// 		var nameInput = $("#name").val();
// 		var movieInput = parseInt($("#movies").val());
// 		var ageInput = parseInt($("#age").val());
// 		var timeInput = parseInt($("#time").val());
// 		var newTicket = new Ticket(nameInput, movieInput, ageInput, timeInput);
//
// 		$("#names").append("<li>"+newTicket.name+"</li>");
// 		$("#prices").append("<li>$"+newTicket.price()+"</li>");
// 		$("#reset").show();
// 		$(".row").fadeIn(1000);
// 		$("#movie-form")[0].reset();
// 	});
// 	$("#reset").click(function(event){
// 		event.preventDefault();
// 		$(".row").fadeOut();
// 		$("#names").text("");
// 		$("#prices").text("");
// 		$("#reset").hide();
// 	});
// });
