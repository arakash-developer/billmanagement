import React from 'react'

const page = () => {
  let uninum:number = 54;
  uninum = 54.1234;
    
  let bew = uninum.toFixed(2)
  console.log(bew);

  let teo:number|string = 54;
  teo = "Hello, World!";
  teo =100;
  console.log(teo);
  
  
  let calc = (a:number,b:number):number =>{
    return a*b
  }
  calc(10,20)


  // a= 100;
  // let b:String = 'Hello, World!';
  // let calc = (a:Number,b:Number):Number=> a+b
  // calc(10,20)
  return (
    <div>
      Home {bew}
    </div>
  )
}

export default page