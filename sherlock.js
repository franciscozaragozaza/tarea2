//Input Example

_INPUT = "2\n3 9\n17 24";

//Expected Output
/*
2
0
*/

//Second Input Example (Remember to comment the first example in order
//and uncomment the next line in order test this case)

//_INPUT = "4\n1 8\n2 4\n10 13\n11 20";

//Expected Output
/*
2
1
0
1
*/

//----- Start your code here -------
Split(_INPUT);
contarImprimirCuadrados(arr, Cant);
//Dividir la string para conventirlo en arreglo
function Split(_INPUT){	
arr = _INPUT.split("\n");
Cant = arr[0];
return arr;
return Cant;
}
//Checar e imprimir cuadrados
function contarImprimirCuadrados(arr, Cant){
h=0;
while (h<Cant){
	arrTemp= arr[h+1].split(" ");
	i = arrTemp[0];
	j = arrTemp[1];
	bandera = 0;
	for (i; i <= j; i++) {
		aux=i;
		sqrt = Math.sqrt(aux);
		if (sqrt%1==0){
			bandera++;
		}
	}
	console.log(bandera);
	h++;
}
}
