$("button#submit").click( function() {
	 
	 
	 if( $("#email").val() == "" || $("#subject").val() == "" || $("#message").val() == "" ){
	 	$("div#ackcontact").html("Please fill in everything");
	 }
	 else{
	 	$.post( $("#contactform").attr("action"), 
		        $("#contactform :input").serializeArray(), 
				function(data) {
					$("div#ackcontact").html(data);
					} );
		 }
	 $("#contactform").submit( function() {
		 return false;
	 });
});