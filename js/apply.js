$("button#submit").click( function() {
	 
	 
	 /*if( $("#name").val() == "" || $("#surname").val() == "" || $("#tel").val() == "" || $("#cell").val() == "" || $("#fax").val() == ""  || $("#email").val() == "" || $("#address").val() == "" || $("#paddress").val() == "" || $("#program").val() == "" || $("#date").val() == "" ){
	 	$("div#ackapply").html("Please fill in everything");
	 }*/
	 //else{
	 	$.post( $("#applyform").attr("action"), 
		        $("#applyform :input").serializeArray(), 
				function(data) {
					$("div#ackapply").html(data);
					} );
	 //}
	 $("#applyform").submit( function() {
		 return false;
	 });
});