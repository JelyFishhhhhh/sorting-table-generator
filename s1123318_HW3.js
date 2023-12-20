// sort rebuild
var matrix= [[]];
matrix.sort(function(a, b){

	return a- b;
});

function progress(){
	var txt = document.form.txt.value;
	var line = txt.split("\n"); // 每一行內容
	var line_num = line.length; // 共有幾行
	for (var i = 0; i< line_num; i++){
	    var seq = line[i].split(" "); //seq[0]: label名稱, seq[1] : context
		// YOUR CODE START
		
		/* clean NaN */
		// console.log(seq[0]);
		console.log(seq[1]);
		if(seq[0]== "" || seq[1]== undefined || seq[1]== ""){

			continue;
		}
		/* end */

		/* init new array*/
		if(!matrix[seq[0]]){
			
			matrix[seq[0]]= [];
		}
		/* end */
		
		/* push value */
		matrix[seq[0]].push(parseInt(seq[1]));
		/* end*/
		
		/* sort */
		matrix[seq[0]].sort();
		/* end */

		/* clean matrix[0] */
		if(!(i || matrix[0].length)){

			matrix.shift();
		}
		/* end */

		// YOUR CODE END
	}
	var out="<table>"; // 結果存在變數out, 用table顯示
	// YOUR CODE START
	
	var keys= Object.keys(matrix).sort();
	var max_length=0;
	
	/* thead */
	out+= "<tr>";
	for(var i= 0; i< keys.length; i++){

		out+= "<td>"
		out+= keys[i]
		out+= "</td>";
		max_length= max_length> matrix[keys[i]].length? max_length: matrix[keys[i]].length;
	}
	out+= "</tr>";
	/* end */
	
	/* tbody */
	for(var i= 0; i< max_length; i++){
		out+= "<tr>";

		for(var j= 0; j< keys.length; j++){

			out+= "<td>";
			out+= (matrix[keys[j]][i]== undefined? "": matrix[keys[j]][i]);
			out+= "</td>";
		}
		out+= "</tr>";
	}
	/* end */
	// console.log(out);

	// YOUR CODE END
	out=out+"</table>"
	document.getElementById('out').innerHTML=out; // 顯示結果

}
