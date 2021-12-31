function question(){
    var a = "aaaa";
    var b = "what?";
    document.getElementById("aaaa").classList.toggle("hidden");
    if(document.getElementById("aaaa").classList.contains("hidden")){
    document.getElementById("terserah").innerHTML=b;
    }
    else{
        document.getElementById("terserah").innerHTML=a;
    }
    
}
const txtElement = ['Assalamualaikum everyone, welcome to my portfolio'];
let count = 0;
let txtIndex = 0;
let currentTxt = '';
let words = '' ;

// function typing(){

// 	if (count == txtElement.length) {
// 		count = 0;
// 	}

// 	currentTxt = txtElement[count];

// 	words = currentTxt.slice(0, ++txtIndex);
// 	document.querySelector('.efect').textContent = words;

// 	if (words.length == currentTxt.length) {
// 		count++;
// 		txtIndex = 0;
// 	}

// 	setTimeout(typing, 100);
// };
function authenticate(){
	const username = document.getElementById("uname");
	const password = document.getElementById("pass");
	
	if (username.value==="Nabila Fahrunnisa" && password.value==="nabila123"){
		window.location= "something.html";
		
	}
	else{
		alert("Salah!");
	}
}
function toggleSidebar(){
    document.querySelector('.sidebar').classList.toggle('hidden')
}