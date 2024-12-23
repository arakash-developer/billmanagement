import React from 'react'
const Header = ({name,phone,companyName,address,setusName,setusPhone,setusAddress}) => {
    const day = new Date().toLocaleDateString("en-BG" , {
        day: "2-digit",
    });
    const month = new Date().toLocaleDateString("en-BG" , {
        month: "2-digit",
    })
    const year = new Date().toLocaleDateString("en-BG" , {
        year: "numeric",
    })
    return (
        <div className='w-full pb-7 md:pb-8'>
            <div className='flex justify-between pt-2.5 px-3'>
                <p className='text-center text-[10px] md:text-sm font-normal text-blue-600 tracking-widest'>Your needs</p>
                <p className='text-center text-[10px] md:text-sm font-normal text-blue-600 tracking-widest'>بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ</p>
                <p className='text-center text-[10px] md:text-sm font-normal text-blue-600 tracking-widest'>our commitment</p>
            </div>
            <div className='flex justify-center shadow-lg md:py-4 py-2'>
                <h1 className='font-bold text-blue-600 text-xl md:text-4xl'>{companyName?companyName:"COMPANY NAME"}</h1>
            </div>
            <div className='w-full flex justify-between bg-[#9b9b9b2c] shadow-md px-3 py-2'>
                <div className='flex  items-center gap-x-2 md:gap-x-5'>
                    <div className='flex flex-col gap-y-2 md:gap-y-5 md:text-bold text-blue-600'>
                        <label htmlFor="" className='text-[12px] md:text-base'>Name:</label>
                        <label htmlFor="" className='text-[12px] md:text-base'>Phone:</label>
                        <label htmlFor="" className='text-[12px] md:text-base'>Address:</label>
                    </div>
                    <div className='w-24 md:w-60 flex flex-col items-center gap-x-2'>
                        <input onChange={(e) => setusName(e.target.value)} type="text" className='w-full md:text-base text-[12px] px-1 md:px-3 md:py-1 bg-transparent outline-none border-b-2 border-[#7c7c7c5c] border-dashed  md:placeholder:text-base placeholder:text-[10px]' />
                        <input onChange={(e) => setusPhone(e.target.value)} type="number" className='w-full text-[12px] md:text-base  md:px-3 md:py-1 bg-transparent outline-none border-b-2 border-[#7c7c7c5c] border-dashed  md:placeholder:text-base placeholder:text-[10px]' />
                        <input onChange={(e) => setusAddress(e.target.value)} type="text" className='w-full px-1 md:px-3 md:py-1 text-[12px] md:text-base bg-transparent outline-none border-b-2 border-[#7c7c7c5c] border-dashed  md:placeholder:text-base placeholder:text-[10px]' />
                    </div>
                </div>
                <div className='w-80 text-end'>
                    <p className='font-semibold text-blue-600 text-[12px] md:text-lg '>{address}</p>
                    <p className='md:font-bold text-[10px] md:text-lg text-blue-400'>Proprietor: {name}</p>
                    <p className='md:font-bold text-sm md:text-lg text-blue-400'>Phone: {phone?phone:"00000000000"}</p>
                    <p className='md:font-bold text-sm md:text-lg text-blue-400'>Fax: xxxx0000</p>
                </div>
            </div>
            <div className='flex justify-between items-center py-1 px-3'>
                <div>
                    <p className='md:text-lg text-[12px] font-semibold text-blue-600 md:font-bold'>Serial No : <span className='font-semibold'>0000000001</span></p>
                </div>
                <div className='flex'>
                <div className='w-7 md:w-10 h-5 md:h-8 text-blue-600 text-[10px] md:text-base border border-r-transparent border-[#7c7c7c] flex justify-center items-center'>{day}</div>
                <div className='w-7 md:w-10 h-5 md:h-8 text-blue-600 text-[10px] md:text-base border border-[#7c7c7c] flex justify-center items-center'>{month}</div>
                <div className='w-10 md:w-20 h-5 md:h-8 text-blue-600 text-[10px] md:text-base border border-l-transparent border-[#7c7c7c] flex justify-center items-center'>{year}</div>
                </div>
            </div>
                <h1 className='text-[12px] md:text-xl text-center text-slate-100 bg-blue-500 py-1 md:py-2 shadow-lg'>Cash Memo</h1>
        </div>
    )
}

export default Header