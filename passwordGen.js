var errorMessageVar = document.querySelector("#errorMessage")
var newPasswordBox = document.querySelector("#newPassword")
var monitorPassword = document.querySelector("#display")
var inputPasswordVar = document.querySelector("#inputPassword")
monitorPassword.style.display = "none"
inputPassword.style.display = "none"

function lenghtPassword(){
	var lenghtPassword = document.querySelector("#myText").value
    
	if(lenghtPassword < 8){
		lenghtPassword = 8
		errorMessageVar.innerHTML = "Password too short (8 - 100)"
		errorMessageVar.style.display = "block"
		errorMessageVar.style.color = "red"   
	}
	if(lenghtPassword > 100){
		lenghtPassword = 100
		errorMessageVar.innerText = "Password too long (8 - 100)"
		errorMessageVar.style.display = "block"
		errorMessageVar.style.color = "red"   
	}
	console.log("Lenght Password = " + lenghtPassword)
	newVector()

}

function newVector(){

    var lenghtPassword = document.querySelector("#myText").value
	if(lenghtPassword < 8){
		lenghtPassword = 8 
	}
	if(lenghtPassword > 100){
		lenghtPassword =  100
	}
	
	var newPassword = ""
	var number
	for(i = 1; i<= lenghtPassword; i++){
	number = Math.floor(Math.random() * 88) //0 - 87
	//console.log(number)
	
	if(number == 0){
			newPassword = newPassword + "A";
		}
		if(number == 1){
			newPassword = newPassword + "a";
		}
		if(number == 2){
			newPassword = newPassword + "B";
		}
		if(number == 3){
			newPassword = newPassword + "b";
		}
		if(number == 4){
			newPassword = newPassword + "C";
		}
		if(number == 5){
			newPassword = newPassword + "c";
		}
		if(number == 6){
			newPassword = newPassword + "D";
		}
		if(number == 7){
			newPassword = newPassword + "d";
		}
		if(number == 8){
			newPassword = newPassword + "E";
		}
		if(number == 9){
			newPassword = newPassword + "e";
		}
		if(number == 10){
			newPassword = newPassword + "F";
		}
		if(number == 11){
			newPassword = newPassword + "f";
		}
		if(number == 12){
			newPassword = newPassword + "G";
		}
		if(number == 13){
			newPassword = newPassword + "g";
		}
		if(number == 14){
			newPassword = newPassword + "H";
		}
		if(number == 15){
			newPassword = newPassword + "h";
		}
		if(number == 16){
			newPassword = newPassword + "I";
		}
		if(number == 17){
			newPassword = newPassword + "i";
		}
		if(number == 18){
			newPassword = newPassword + "J";
		}
		if(number == 19){
			newPassword = newPassword + "j";
		}
		if(number == 20){
			newPassword = newPassword + "K";
		}
		if(number == 21){
			newPassword = newPassword + "k";
		}
		if(number == 22){
			newPassword = newPassword + "L";
		}
		if(number == 23){
			newPassword = newPassword + "l";
		}
		if(number == 24){
			newPassword = newPassword + "M";
		}
		if(number == 25){
			newPassword = newPassword + "m";
		}
		if(number == 26){
			newPassword = newPassword + "N";
		}
		if(number == 27){
			newPassword = newPassword + "n";
		}
		if(number == 28){
			newPassword = newPassword + "O";
		}
		if(number == 29){
			newPassword = newPassword + "o";
		}
		if(number == 30){
			newPassword = newPassword + "P";
		}
		if(number == 31){
			newPassword = newPassword + "p";
		}
		if(number == 32){
			newPassword = newPassword + "Q";
		}
		if(number == 33){
			newPassword = newPassword + "q";
		}
		if(number == 34){
			newPassword = newPassword + "R";
		}
		if(number == 35){
			newPassword = newPassword + "r";
		}
		if(number == 36){
			newPassword = newPassword + "S";
		}
		if(number == 37){
			newPassword = newPassword + "s";
		}
		if(number == 38){
			newPassword = newPassword + "T";
		}
		if(number == 39){
			newPassword = newPassword + "t";
		}
		if(number == 40){
			newPassword = newPassword + "U";
		}
		if(number == 41){
			newPassword = newPassword + "u";
		}
		if(number == 42){
			newPassword = newPassword + "V";
		}
		if(number == 43){
			newPassword = newPassword + "v";
		}
		if(number == 44){
			newPassword = newPassword + "W";
		}
		if(number == 45){
			newPassword = newPassword + "w";
		}
		if(number == 46){
			newPassword = newPassword + "X";
		}
		if(number == 47){
			newPassword = newPassword + "x";
		}
		if(number == 48){
			newPassword = newPassword + "Y";
		}
		if(number == 49){
			newPassword = newPassword + "y";
		}
		if(number == 50){
			newPassword = newPassword + "Z";
		}
		if(number == 51){
			newPassword = newPassword + "z";
		}
		if(number == 52){
			newPassword = newPassword + "0";
		}
		if(number == 53){
			newPassword = newPassword + "1";
		}
		if(number == 54){
			newPassword = newPassword + "2";
		}
		if(number == 55){
			newPassword = newPassword + "3";
		}
		if(number == 56){
			newPassword = newPassword + "4";
		}
		if(number == 57){
			newPassword = newPassword + "5";
		}
		if(number == 58){
			newPassword = newPassword + "6";
		}
		if(number == 59){
			newPassword = newPassword + "7";
		}
		if(number == 60){
			newPassword = newPassword + "8";
		}
		if(number == 61){
			newPassword = newPassword + "9";
		}
		if(number == 62){
			newPassword = newPassword + ".";
		}
		if(number == 63){
			newPassword = newPassword + ",";
		}
		if(number == 64){
			newPassword = newPassword + ";";
		}
		if(number == 65){
			newPassword = newPassword + ":";
		}
        if(number == 66){
			newPassword = newPassword + ".";
		}
		if(number == 67){
			newPassword = newPassword + "$";
		}
		if(number == 68){
			newPassword = newPassword + "@";
		}
		if(number == 69){
			newPassword = newPassword + "$";
		}
        if(number == 70){
			newPassword = newPassword + "0";
		}
		if(number == 71){
			newPassword = newPassword + "1";
		}
		if(number == 72){
			newPassword = newPassword + "2";
		}
		if(number == 73){
			newPassword = newPassword + "3";
		}
		if(number == 74){
			newPassword = newPassword + "4";
		}
		if(number == 75){
			newPassword = newPassword + "5";
		}
		if(number == 76){
			newPassword = newPassword + "6";
		}
		if(number == 77){
			newPassword = newPassword + "7";
		}
		if(number == 78){
			newPassword = newPassword + "8";
		}
		if(number == 79){
			newPassword = newPassword + "9";
		}
		if(number == 80){
			newPassword = newPassword + ".";
		}
		if(number == 81){
			newPassword = newPassword + ",";
		}
		if(number == 82){
			newPassword = newPassword + ";";
		}
		if(number == 83){
			newPassword = newPassword + ":";
		}
        if(number == 84){
			newPassword = newPassword + ".";
		}
		if(number == 85){
			newPassword = newPassword + "$";
		}
		if(number == 86){
			newPassword = newPassword + "@";
		}
		if(number == 87){
			newPassword = newPassword + "$";
		}
	}
	console.log("New Password: " + newPassword)
	newPasswordBox.style.display = "block"
	var passwordDisplay = document.querySelector("#newPassword")
	passwordDisplay.innerText = newPassword
	inputPasswordVar.style.display = "block"
	
	//////////////////////////////////////////////////////////////
	let passwordInsideTheInput = document.querySelector("#myPassword")
	passwordInsideTheInput.value = newPassword 
	
	
	
	
		
	//navigator.clipboard.writeText(newPassword)
	//this line helps me to copy the
	//string on the device clipboard
	
	var monitorPassword = document.querySelector("#display")
    monitorPassword.style.display = "block"
	
	
	var passwordReviewVar = document.querySelector("#passwordReview")
	var passwordReviewBoxVar = document.querySelector("#passwordReviewBox")
	
	if(lenghtPassword < 12){
	passwordReviewVar.style.borderColor = "#da0000"
	passwordReviewBoxVar.style.borderColor = "#da0000"
	passwordReviewBoxVar.style.backgroundColor = "#da0000"
	passwordReviewBoxVar.innerText = "Weak" 
	}
	if(lenghtPassword >= 12 && lenghtPassword < 16){
	passwordReviewVar.style.borderColor = "#f4ff00"
	passwordReviewBoxVar.style.borderColor = "#f4ff00"
	passwordReviewBoxVar.style.backgroundColor = "#f4ff00"
	passwordReviewBoxVar.innerText = "Medium" 
	}
	if(lenghtPassword >= 16 && lenghtPassword < 25){
	passwordReviewVar.style.borderColor = "#00FF00"
	passwordReviewBoxVar.style.borderColor = "#00FF00"
	passwordReviewBoxVar.style.backgroundColor = "#00FF00"
	passwordReviewBoxVar.innerText = "Strong" 
	}
	if(lenghtPassword >= 25 && lenghtPassword < 35){
	passwordReviewVar.style.borderColor = "#008000"
	passwordReviewBoxVar.style.borderColor = "#008000"
	passwordReviewBoxVar.style.backgroundColor = "#008000"
	passwordReviewBoxVar.innerText = "Very Strong" 
	}
	if(lenghtPassword >= 35){
	passwordReviewVar.style.borderColor = "#FF00FF"
	passwordReviewBoxVar.style.borderColor = "#FF00FF"
	passwordReviewBoxVar.style.backgroundColor = "#FF00FF"
	passwordReviewBoxVar.innerText = "Legendary" 
	}
}


function copyOnClipboard(){
	// Get the text field
  var copyText = document.getElementById("myPassword")

  // Select the text field
  copyText.select()
  copyText.setSelectionRange(0, 99999)// For mobile devices

   // Copy the text inside the text field
  navigator.clipboard.writeText(copyText.value)

  // Alert the copied text
  alert("Password Copied: " + copyText.value)
}