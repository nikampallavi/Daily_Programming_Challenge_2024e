function findMissingNum(arr){
    const n=arr.length+1;
    const sumOfFirstN=(n*(n+1))/2;

    let sumOfArray=0
    for(let i=0;i<n-1;i++)
    {
        sumOfArray=sumOfArray+arr[i]
    }
    let missingNum=sumOfFirstN-sumOfArray;
    return missingNum

}



const arr=[1,2,3,5]
const missingNum=findMissingNum(arr);
console.log("Missing Number is : "+missingNum)