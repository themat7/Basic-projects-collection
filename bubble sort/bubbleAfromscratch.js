var array = [12,1,13,65,45,12,33,55,76,1234,65];
for(var y=0; y<array.length; y++)
for(var i=0;i<array.length;++i){
	if(array[i]>array[i+1]){
var temp = array[i];
array[i] = array[i+1];
array[i+1] = temp;


}
}		
console.log(array);



var array = [12,1,13,65,45,12,33,55,76,1234,65];
for(var y=0; y<array.length; y++)
for(var i=0;i<array.length;++i){
	if(array[i]>array[i+1]){
array.splice(i,2, array[i+1], array[i] )

}
}		
console.log(array);

//a quick change