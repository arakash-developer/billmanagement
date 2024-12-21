const page = () => {

  type bew = number | string;
  let bew:bew = "Hello, World!";

  type person = {
    name: string;
    age: number;
    address?:string;
  };

  let person:person = {
    name: "Akash",
    age: 25,
  };

  // a= 100;
  type calc = (a:number,b:number) => number
  let calc:calc = (a,b)=> a+b
  let res = calc(10,20)

  let jj:number[] = [1,2,3,4,5,6]
  let jjk:string[] = ["aa"]
  console.log(jj);


  let arr:Array<string | number> = ["a","b","c",10,20,30]


  console.log(arr);
  
  return <div>Home {res}</div>;
};

export default page;
