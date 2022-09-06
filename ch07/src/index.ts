import { readFilePromise } from "./filePromise";


readFilePromise('./package.json')
    .then((content:String)=>{
        console.log(content);
        return readFilePromise('./tsconfig.json')
    })
    .then((content:String)=>{
        console.log(content);
        return readFilePromise('.')
    })
    .catch((err:Error)=>console.log('error:', err.message))
    .finally(()=>console.log('끝'));