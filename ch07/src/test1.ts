export const test1 =async () => {
   let value = await 1;
   console.log(value);
   value = await 2;
   console.log(value);
   value = await 3;
   console.log(value);
   value = await 4;
   console.log(value);
   setTimeout(function () {
    console.log("test1 중간");
}, 3000);
   
   value = await Promise.resolve(5);
   console.log(value);
   setTimeout(function () {
    console.log("test1 마지막");
}, 3000);
}