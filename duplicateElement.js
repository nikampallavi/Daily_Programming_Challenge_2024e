 const array=[1,3,4,2,2];

 const uniqueEle=new Set();
 const duplicateEle=[];

 array.forEach(item=>{
    if (uniqueEle.has(item)) {
        duplicateEle.push(item)
    } else {
        uniqueEle.add(item)
    }
 })

 console.log("Duplicate element is :",duplicateEle);