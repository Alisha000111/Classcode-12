//enum Days {
    //Monday = "Sunny Weather",
    //Tuesday = "Rainy Weather",
    //Wednesda = 'Dry Weather'
//}
//let currentDay : Days = Days[0]
//console.log(Days.Monday);
//console.log(Days.Tuesday);
//let days: "Monday" | "Tuesday" | "Wednesday"
//let val:any;
//val = 5
//val = 'abc'
//val = true 
//val = undefined
//let val2: unknown
//val2 = 5
//val2 = "num"
//val = undefined
//val2 = null
//val2 = true
//let val3:string = val
//let val4:string = val2
//function abc() :never{
    //while(true){
  //  }
//}
//abc()
//type abc = string & number
//let abc :boolean = 4 as unknown as boolean
//let data : unknown
//let abc : boolean = data as boolean
//let trafficlight: string [] = 
//["green", "red", "yellow"];
//let tuples: [string,boolean,number]
//= ["abc",true,1]
//tuples.push(12)
//function greet(name:string,... teacherName: string []){
  //console.log(`hello ${name}, ${teacherName}`);
//}
//greet("Alisha")
//console.log("Hello World","Hello World from alisha",);
//function hello(value:string,): string
//function hello(age:number): number
//function hello(abc:any){
//return abc;
//}
//hello("Alisha")
 const enum sizes {
  small,
  medium,
  large,
}
const burger = {
  name: 'bacon burger',
  size: sizes.medium,
};
function greet(name?: string): void {
    console.log(`Hello, ${name ?? `Alisha`}!`)
}
function sum (values: number[]): number {
  return values.reduce(
    (a,b) =>
    a + b, 0
  )
}