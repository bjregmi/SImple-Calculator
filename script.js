function getOld(){
	return document.getElementById("history-value").innerText;
}
function printOld(num){
	document.getElementById("history-value").innerText=num;
}
function getFinal(){
	return document.getElementById("output-value").innerText;
}
function printFinal(num){
	if(num==""){
		document.getElementById("output-value").innerText=num;
	}
	else{
		document.getElementById("output-value").innerText=getFormattedNumber(num);
	}	
}
function getFormattedNumber(num){
	if(num=="-"){
		return "";
	}
	var n = Number(num);
	var value = n.toLocaleString("en");
	return value;
}
function reverseNumberFormat(num){
	return Number(num.replace(/,/g,''));
}
var operator = document.getElementsByClassName("operator");
for(var i =0;i<operator.length;i++){
	operator[i].addEventListener('click',function(){
		if(this.id=="clear"){
			printOld("");
			printFinal("");
		}
		else if(this.id=="backspace"){
			var final=reverseNumberFormat(getFinal()).toString();
			if(final){//if output has a value
				final= final.substr(0,final.length-1);
				printFinal(final);
			}
		}
		else{
			var final=getFinal();
			var old=getOld();
			if(final==""&&old!=""){
				if(isNaN(old[old.length-1])){
					old= old.substr(0,old.length-1);
				}
			}
			if(final!="" || old!=""){
				final= final==""?final:reverseNumberFormat(final);
				old=old+final;
				if(this.id=="="){
					var answer=eval(old);
					printFinal(answer);
					printOld("");
				}
				else{
					old=old+this.id;
					printOld(old);
					printFinal("");
				}
			}
		}

	});
}
var number = document.getElementsByClassName("number");
for(var i =0;i<number.length;i++){
	number[i].addEventListener('click',function(){
		var final=reverseNumberFormat(getFinal());
		if(final!=NaN){ //if output is a number
			final=final+this.id;
			printFinal(final);
		}
	});
}