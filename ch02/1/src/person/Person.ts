import {makeRandomNumber} from '../utils/makeRandomNumber'
import IPerson from './IPerson'

export default class Person implements IPerson{
    constructor(public name:String, public age:number){}
}



export const makePerson = (name:String, age:number = makeRandomNumber()): IPerson => ({name,age})
