function Pizza (name, size, toppings1, toppings2, toppings3 ){
			this.name = name;
			this.size = size;
			this.toppings1 = toppings1;
			this.toppings2 = toppings2;
			this.toppings3 = toppings3;
		}
Pizza.prototype.price = function(){
	var price;
	if(this.size === 1){
		price = 4;
	}
	if(this.size === 2){
		price = 6;
	}
	if(this.size === 3){
		price = 8;
	}
	if(this.toppings1 === 1){
    	price += 1;
	}
	if(this.toppings1 === 2){
    	price += 2;
	}
	if(this.toppings2 === 1){
			price += 1;
	}
	if(this.toppings2 === 2){
			price += 2;
	}
	if(this.toppings3 === 1){
			price += 1;
	}
	if(this.toppings3 === 2){
			price += 2;
	}

	return price;
}
$(function(){
	$("form#pizzaOptions").submit(function(event){
		event.preventDefault();

		var nameInput = $("#name").val();
		var sizeInput = parseInt($("#size").val());
		var toppings1Input = parseInt($("#toppings1").val());
		var toppings2Input = parseInt($("#toppings2").val());
		var toppings3Input = parseInt($("#toppings3").val());
		var newPizza = new Pizza(nameInput, sizeInput, toppings1Input, toppings2Input, toppings3Input);

		// $("#names").append("<li>"+newPizza.name+"</li>");
		// $("#prices").append("<li>$"+newPizza.price()+"</li>");
		$("#names").append(newPizza.name);
		$("#prices").append(newPizza.price());
		$("#reset").show();
		$("#result").show();
		$("#pizzaOptions")[0].reset();
	});

	$("#reset").click(function(event){
		event.preventDefault();
		$("#result").hide();
		$("#names").text("");
		$("#prices").text("");
		$("#reset").hide();
	});
});
