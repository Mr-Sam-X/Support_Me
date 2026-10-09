import React from 'react'

const page = () => {
  return (
    <div  className=" min-h-[85vh] text-white ">
     <div className=" container_Top items-center flex flex-col justify-center gap-4 min-h-[42.5vh]">   
      <div className="heading flex justify-center items-center">
<h1 className="text-2xl font-bold">Support Me Page</h1>
<img  className="w-14" src="\tea.gif" alt="Not Found" />

      </div>
      <p>A platform for supporting creators and content producers.</p>
      <div className="buttons">
        <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Start Here</button>
        <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Read More</button>
      </div>
        </div>
        <div className="bg-white h-1 opacity-20">
      </div>
      <div className="container_Bottom flex flex-col items-center">
        
          <h1 className='p-8 font-bold' >Your Fans can buy your Products</h1>
          <div className="three_typee flex gap-5 flex-wrap justify-center items-center">
            <div className="type_1 flex flex-col items-center gap-1">
            <img className='w-17 bg-gray-500 p-2 rounded-full' src="/man.gif" alt="Avatar" />
            <h1 className='text-lg font-semibold' >Fans want to work with you</h1>
            <p className='w-[80%] text-center' >Support your favorite creators and content producers.</p>
            </div>
            <div className="type_2 flex flex-col items-center gap-1">
            <img className='w-17 bg-gray-500 p-2 rounded-full' src="/coin.gif" alt="Avatar" />
            <h1 className='text-lg font-semibold' >Fans want to support your work</h1>
            <p className='w-[80%] text-center' >Show your appreciation for the content you love.</p>
            </div>
            <div className="type_3 flex flex-col items-center gap-1">
            <img className='w-17 bg-gray-500 p-2 rounded-full' src="/group.gif" alt="Avatar" />
            <h1 className='text-lg font-semibold' >Build a community around your brand</h1>
            <p className='w-[80%] text-center' >Connect with your audience and foster meaningful relationships.</p>
            </div>
          </div>
         
      </div>
       <div className="bg-white h-1 mt-10 opacity-20">
      </div>
       <div className="container_Bottom pb-8 flex flex-col items-center">
        
          <h1 className='p-8 font-bold text-xl' >Learn More About Our Platform</h1>
          <div className="three_typee flex gap-5 flex-wrap justify-center items-center">
           <iframe width="440" height="265" src="https://www.youtube.com/embed/N5OS62Bhl1c?si=5HNs3EWnfKPaHXoc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
           
          </div>
         
      </div>
    </div>
  )
}

export default page
