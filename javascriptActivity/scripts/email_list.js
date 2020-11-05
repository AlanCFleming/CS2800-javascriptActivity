"use strict";

var joinList = function() {
    var emailAddress1 = document.getElementById("email_address1").value;
    var emailAddress2 = document.getElementById("email_address2").value;
    var firstName = document.getElementById("first_name").value;
    var errorMessage = "";

    // validate the entries
    if (emailAddress1 == "") {
    	errorMessage = "First email address entry required";
	document.getElementById("email_address1").nextElementSibling.firstChild.innerHTML= errorMessage;
    }
    else {
  	document.getElementById("email_address1").nextElementSibling.firstChild.innerHTML= "";
    }
    if (emailAddress2 == "") {
    	errorMessage = "Second email address entry required";	
	document.getElementById("email_address2").nextElementSibling.firstChild.innerHTML= errorMessage;
    }
    else if (emailAddress2 != emailAddress1) {
    	errorMessage = "Email address entries must match";
	document.getElementById("email_address2").nextElementSibling.firstChild.innerHTML= errorMessage;
    }
    else{
	document.getElementById("email_address2").nextElementSibling.firstChild.innerHTML= "";
    }
	
    if (firstName == "") {
    	errorMessage = "First name entry required";
	cument.getElementById("first_name").nextElementSibling.firstChild.innerHTML= errorMessage;
    }
	

    // submit the form if all entries are valid/
    if (errorMessage == "") {
        document.getElementById("email_form").submit(); 
    }
};

window.onload = function() {
    document.getElementById("join_list").onclick = joinList;
    document.getElementById("email_address1").focus();
};
