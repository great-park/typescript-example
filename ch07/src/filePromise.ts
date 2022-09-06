import { readFileSync, readFile, read, PathOrFileDescriptor } from "fs";


export const readFilePromise = (filename:PathOrFileDescriptor) : Promise<String> =>
    new Promise<String>((
        resolve: (value:String) => void,
        reject: (error: Error) => void) => {
            readFile(filename, (err:Error, buffer:Buffer)=>{
                if(err) reject(err)
                else resolve(buffer.toString())
            })
        }
    )
