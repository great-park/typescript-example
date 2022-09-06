// import { readFilePromise } from "./filePromise";


// readFilePromise('./package.json')
//     .then((content:String)=>{
//         console.log(content);
//         return readFilePromise('./tsconfig.json')
//     })
//     .then((content:String)=>{
//         console.log(content);
//         return readFilePromise('.')
//     })
//     .catch((err:Error)=>console.log('error:', err.message))
//     .finally(()=>console.log('끝'));

import {test1} from './test1';
import {test2} from './test2';

console.log("처음")
test1();
console.log("중간");
test2();
console.log("마지막")
