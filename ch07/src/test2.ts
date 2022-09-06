export async function test2() {
    let value = await 'Hello';
    console.log(value);
    value = await 'Hello2';
    console.log(value);
    value = await 'Hello3';
    console.log(value);
    setTimeout(function () {
        console.log("test2 중간");
    }, 3000);
    
    value = await Promise.resolve('Bye');
    console.log(value);
    setTimeout(function () {
        console.log("test2 마지막");
    }, 3000);
 }