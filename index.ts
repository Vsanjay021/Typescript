// const arr=[1,2,3] as const;
// console.log(arr);

// let val : any ="333";
// console.log(val);

// function fun(x:string | null){
//     console.log(x);
// }
// fun("sanjay")


// function fun(name:string):void{
//     console.log("hello",name);
// }
// fun("sanjay V")



// const fun: (name: string) => void = (name: string) => {
//     console.log("Hello", name);
//   };
  
//   fun("sanjay V"); 

// interface Person{
//     name:string;
//     age:number;
// }

// function fun(obj:Person):void{
//     console.log(obj.name);
//     console.log(obj.age);
// }
// fun({name: "John", age:21})


// class Person{
//     name:string;
//     #age:number;
//     constructor(name:string, age:number) {
//         this.name=name;
//         this.#age=age;
//     }
//     displayName():void{
//         console.log(this.name);
//     }
// }

// console.log(new Person("sanjay v",21));


//enums

// enum Cost{
//     apple,
//     orrange,
//     mango,
//     banana
// }


// const cost:Cost = Cost.banana;
// console.log(cost);


// const arr:string[] = ["apple", "orrange"];
// console.log(arr)


//typle


// type Person=[string,number];

//     const info:Person=["sanjay v",21];
//     console.log(info)

//alias
// it allows to create a new name for a type  
type name=string;
type age=number;
type Person={name:string, age:number};

const user:Person={ name:"sanjay",age:22};
console.log(user)

// key of operator

interface User{
    name:string;
    age:number
}

type userKeys=keyof User;

const Users:userKeys="name"


//type predicates

function typePredicates(value:boolean):value is boolean{
    return value;
}

console.log(typePredicates(true));

// typing functions

    let  tf:(a:number,b:number)=>number;
    tf=(a,b)=>{
        return a+b
    }
    console.log(tf(1,2))

//function overloading

// function add(a:string,b:string):string{
//     return a+" "+b;
// }

// function add(a:number,b:number):number{
//     return a+b;
// }
// function add(a:any,b:any):any{
//     return a+b
// }
// console.log(add(8,2));
function add(a: number, b: number): number;
function add(a: string, b: string): string;

function add(a: any, b: any): any {
  return a + b;
}

console.log(add(1, 2)); // 3
console.log(add('Hello', ' World')); // "Hello World"