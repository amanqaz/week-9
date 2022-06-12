// Q. Find the nth largest element in a sorted array 
function findNthLargest(arr,n){
    var index=0;
    var largest=arr[0];
    for(let i=0;i<arr.length;i++){
        if(arr[i]>largest){
            largest=arr[i];
            index=i;
        }
    }
    console.log('largest element is ',largest);
    console.log('index of largest element is ',index);
    return index;
}
arr=[1,2,3,4,5,6,7,8,9,10];
findNthLargest(arr,5);
