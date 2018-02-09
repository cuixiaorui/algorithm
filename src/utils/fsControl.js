const fs = require('fs');
function writeFs(path,data){
    return new Promise((resolve,reject)=>{
        fs.writeFile(path,data,(e,data)=>{
            if(e){
                reject(e);
            }else{
                resolve(data);
            }
        })
    })
}
function readFs(path){
    return new Promise((resolve,reject)=>{
        fs.readFile(path,(e,data)=>{
            if(e){
                reject(e);
            }else{
                resolve(data);
            }
        })
    })
}

/**
 * 创建随机数文本
 * @param {*} size 
 */
function createRandomNumJsonToTxt(size){
    if(!size)size = 10;
    let arr = [];
    for(let i=0; i<size; i++){
        let value = Math.floor(Math.random() * 100000);
        arr.push(value);
    }
    let data = JSON.stringify(arr);
    return writeFs('./res/input.txt',data).then(()=>{
        console.log('写入成功')
    })
}

/**
 * 读取txt文件
 * 返回解析后的数据
 */
function readTxt(path){
    return readFs(path).then((data)=>{
        data = data.toString();
        data = JSON.parse(data);
        return data;
    })
}

module.exports = {
    createRandomNumJsonToTxt,
    readTxt
}