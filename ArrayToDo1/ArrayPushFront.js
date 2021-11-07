function pushFront(array ,number ){

    for(var i=array.length-1;i>=0;i--){
        

        array[i+1]=array[i]


    }
    array[0]= number;
    return array;
}

var  myarray=popFront([2 ,3,4,5,6,9],1)
 console.log(myarray);
console.log(=====================================);

 function popFront(array){
    var num=array[0];
    console.log(array);
    for(var i=0;i<array.length-1;i++){

        
        

     array[i]= array[i+1];


    }
    array.pop();
  console.log(array);

    return num;
}

var  myarray=popFront([2 ,3,4,5,6,9])
 console.log(myarray);
 // Given an array and an index into array, remove and return the array value at that index.
//  Do this without using built-in array methods except pop().
//  Think of popFront(arr) as equivalent to removeAt(arr,0).

//  input 
//  array =[3,2,5,4,6,7,1,8];
//  array[3];
//  output = elemt of index 3
//  array =[3,2,5,6,7,1,8];

function removeatIndex(array,idx){
    console.log("The array at the beggining is: ");
    console.log(array);
    var number = array[idx];
    for(var i=idx;i<array.length-1;i++){
        array[i] = array[i+1]
    }

    array.pop();
    console.log("The array at the end is: ");
    console.log(array);
    console.log("The number taken out is: " + number);
    return number;
}
array =[3,2,5,4,6,7,1,8];
removeatIndex(array,3);


// Swap positions of successive pairs of values of given array.
//  If length is odd, do not change the final element. For [1,2,3,4], return [2,1,4,3]. For example, change input ["Brendan",true,42] to [true,"Brendan",42]. 
// As with all array challenges, do this without using any built-in array methods.

// Input 
// array=[1,2,3,4]
// output
// array=[2,1,4,3]

function swapNumber(array){

    var arrayLength=array.length;
    if (arrayLength%2==0){
        var temp=0;
        var idx=0;
        for(var i=idx;i>=idx+1;i++){
         temp=array[i];
         
         array[i]=   array[i+1];
         console.log(array[i]);
         array[i+1]=temp;
         

        }
        console.log("swap front and back");

    }else{
        console.log("swap only front");
    }

   // return swapedArray;
}

array=[1,2,3,4];
console.log(swapNumber(array));