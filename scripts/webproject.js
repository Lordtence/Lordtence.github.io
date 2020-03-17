/*
Theodore Langlie
Description: this handles all of the basic javascript for my website
*/
// START READY
$(document).ready(function() {
/* ----------------------- CONTACT ME EMAIL FORM CODE ----------------------- */


	$("#join_list").click(
		function() {
            // get the values that the user entered in the email address text boxes and set them as variables
			var emailAddress1 = $("#email_address1").val();
            var emailAddress2 = $("#email_address2").val();
            
			var isValid = true;
			
			// validate the first email address
			if (emailAddress1 == "") {
                // if the user entered nothing, tell them the field is required 
                $("#email_address1").next().text("This field is required.");
                // email is invalid so set isValid to false
				isValid = false;
			} else {
				$("#email_address1").next().text("");
			} 
			
			// validate the second email address
			if (emailAddress2 == "") {
                // if the user entered nothing, tell them the field is required  
                $("#email_address2_error").text("This field is required.");
                // email is invalid so set isValid to false
				isValid = false; 
			} else if (emailAddress1 !== emailAddress2) {
                // if the value of the two email address's arent the same, it is invalid 
				$("#email_address2").next().text("This entry must equal first entry.");
				isValid = false;
			} else {
				$("#email_address2").next().text("");
			}
			
			// validate the first name entry  
			if ($("#first_name").val() == "") {
				$("#first_name").next().text("This field is required.");
				isValid = false;
			} 
			else {
				$("#first_name").next().text("");
			}
			
			// submit the form if all entries are valid
			if (isValid) {
				alert("Info Submitted, Thank You!"); 
			}
		} // end function
	);	// end click

	// Clear entries event handler
	// when button with clear_entires ID is clicked...
	$("#clear_entries").click(
		function() {
			// set the value of type=texts to ""
			$(":text").val("");
			// reset the * stuff to normal
			$("span").text("*");
			// focus on the first text box
			$(":text:first").focus();
	});
	// Event handler for double clicking a text box
	$(":text").dblclick(
		function() {
			// clear the box
			$(this).val("");
			// put the * back for the text box, and the other ones
			$("span").text("*");
    });
});
/* ----------------------- END OF CONTACT ME EMAIL CODE ----------------------- */
