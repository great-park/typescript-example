export function makePerson(name: String, age: number){
    return {name:name,age:age}
}
export function testMakePerson(){
    console.log(
        makePerson('jane',12),
        makePerson('kim',20)
    )
}