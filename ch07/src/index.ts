import { PathOrFileDescriptor, readFile, readFileSync } from "fs";


console.log("동기식 api");
const buffer : Buffer = readFileSync('./package.json');
console.log(buffer.toString());

readFile('./package.json', (error: Error | null, buffer:Buffer) => {
    console.log("비동기식 api");
    console.log(buffer.toString());
})

const readFilePromise = (filename: PathOrFileDescriptor):Promise<String> =>
    new Promise<String>((resolve, reject) =>{
        readFile(filename, (error:Error, buffer:Buffer)=>{
            if(error)
                reject(error)
            else
                resolve(buffer.toString())
        })
    });

(async () =>{
    const content = await readFilePromise('./package.json');
    console.log('Promise');
    console.log(content);
})