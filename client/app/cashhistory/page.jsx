import React from 'react'

const  page = async () => {
    let blob = await fetch("https://akashapi.vercel.app/read");
    let response = await blob.json();
    let users = response.users;
    users.reverse()
    console.log(users);
    
  return (
    <div className='max-w-[1300px] mx-auto my-10'>
        {
            users.map((item)=>(
                <div className='my-5'>
                <p>{item._id}</p>
                <p key={item._id}>{item.name}</p>
                <p>{item.email}</p>
                </div>
                
            ))
        }
    </div>
  )
}

export default page