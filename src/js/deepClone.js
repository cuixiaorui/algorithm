/**
 * js 语言的特定算法
 * 对象的深复制
 */


 function deepClone(obj){

    if(!obj)return;
    
    let newObj = Array.isArray(obj)? []:{};


    for(let key in obj){
        if(typeof obj[key] === "object" ) 
        {
           newObj[key] = deepClone(obj[key]); 
        }else{
            newObj[key] = obj[key]
        }
    }

    return newObj;
 }

 var obj = {
    name : "cxr",
    list : [1,2,3],
    info:{
        title: "heiheihei"
    }
 }
 console.log(deepClone(obj));