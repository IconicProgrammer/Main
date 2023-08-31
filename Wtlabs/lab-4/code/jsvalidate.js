let a = prompt("Enter Who's This:","");
if(a =="Admin"||a =='admin'){
	let b=prompt("Enter password:");
	if(b =="TheMaster"){
		alert("Welcome!")
	}
	else if(b ==  null || b == ""){
		alert("Canceled");
	}
	else{
		alert("Wrong password");
	}
}
else if(a == null || a == ""){
	alert("Canceled");
}
else{
	alert("I don't know you.");
}