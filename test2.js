var pole=document.querySelector(".pole");
var btn=document.querySelectorAll(".button");
var operators=["+","-","/","*"];
var dot=0,znak=0,oper=0;

for(var i=0; i<btn.length; i++){
	btn[i].onclick = function(event){
	var btnVal=this.value;
		if(btnVal==="clear"){
			pole.value="";
			dot=0,znak=0,oper=0;


		}
		else if(btnVal==="del"){
			if( pole.value[pole.value.length-1]==="."){
				dot=0;
			}
			else if (operators.indexOf(pole.value[pole.value.length-1])> -1){
				oper=0;
			}
			else if(pole.value.length===1){
				dot=0,znak=0,oper=0;
			}
			else{
				if( pole.value[pole.value.length-2]==="."){
					dot=1;
					znak=0;
				}
				else if (operators.indexOf(pole.value[pole.value.length-2])> -1){
					oper=1;
					znak=0;
				}
				else znak=1;
			}
			pole.value=pole.value.slice(0,pole.value.length-1);
		}
//check value includ the 00
		else if(btnVal ==="00"){
			if (pole.value==="" || pole.value==="0"){
				btnVal="0.0";
				dot=1;
			}
			else if(oper===1 && znak===0){
				btnVal="0.0";
				dot=1;
				oper=0;
			}
			 pole.value+=btnVal;
		}
//check value includ the 0
		else if(btnVal ==="0"){
			if (pole.value==="" || pole.value==="0"){
				btnVal="0.";
				dot=1;
				oper=0;
			}
			else if(oper===1 && znak===0){
				btnVal="0.";
				dot=1;
				oper=0;
			}
			pole.value+=btnVal;
		}
//check value includ the (.)
		else if(btnVal ==="."){
			if(dot===0){
				if (pole.value===""){
					btnVal="0.";
					dot=1;
					oper=0;
				}
				else if(oper===1 && znak===0){
					btnVal="0.";
					dot=1;
					oper=0;
				}
			}
			else if(dot===1){
				btnVal="";
			}

				 pole.value+=btnVal;
				dot=1;
		}
//check value includ the =
		else if(btnVal==="="){
	// check last symbol to include operators
			if(operators.indexOf(pole.value[pole.value.length-1])> -1 || pole.value[pole.value.length-1]==="."){
				pole.value=pole.value.slice(0,pole.value.length-1);
			}
			var result=eval(pole.value);
			pole.value=result;
			oper=0;
			dot=0;
		}
//check value includ the some operators
		else if(operators.indexOf(btnVal)>-1){

			if(pole.value==="" && btnVal!="-"){
				btnVal="";
			}
			else if(pole.value.length>1 && znak===0 && oper===1){
				btnVal="";
			}
			else if(pole.value==="-"){
				btnVal="";
			}
			else if(pole.value[pole.value.length-1]==="."){
				pole.value=pole.value.slice(0,pole.value.length-1);
			}
			else if(operators.indexOf(pole.value[pole.value.length-1])>-1 && pole.value[pole.value.length-1]!="-"){
				pole.value=pole.value.slice(0,pole.value.length-1);

			}
			 pole.value+=btnVal;
			 oper=1;
			 znak=0;
			 dot=0;
		}
		else {
			pole.value+=btnVal;
			znak=1;
		}
	}
}