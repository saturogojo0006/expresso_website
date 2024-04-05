import React from "react";
import Image from 'next/image';

const Event = () => {
  return <div className="flex-col bg-[#4B4B4B] h-full pt-4">
    {/* <div className="flex  ml-20 ">
    <div className="flex ">
      <Image src='/eventPicture.png' width={1500} height={200} alt="image" className=""/>
</div>
      <div className="flex-col ml-4">
        <div className="font-antonio text-[#FEFEFE] text-5xl ">EVENT-3
        </div>
        <div className="text-[#ffffff] h-[250px] pt-4 pl-6 pb-4" style={{backgroundImage:`url('/event.png')`}} >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam voluptatibus ut officiis, maiores dolore n Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima aperiam aliquid tempore ut? Repellendus, praesentium alias. In veritatis nostrum quibusdam. Sunt exercitationem deleniti, nulla atque adipisci dicta odio ea recusandae quia, saepe esse culpa?

          isi aperiam, ipsa tempora autem omnis reprehenderit quisquam recusandae placeat ratione suscipit magni error provident soluta!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam alias eligendi natus eos quia consequatur cum delectus ipsa modi? Laudantium vitae est unde animi, temporibus voluptatum quis aut possimus labore expedita culpa delectus voluptas optio omnis est soluta debitis molestias tempore, ipsa quibusdam? Eius.
        </div>
  </div> */}
 <div className="flex mt-4 ml-20 gap-2 mr-0 pr-0 ">
 <div className="h-[30px] w-[250px]">
      <Image src='/eventPicture.png' width={250} height={30} alt="image" className=""/>
      </div>
      <div className="flex-col mr-0">

       <div className="font-antonio text-[#FEFEFE] text-5xl ">EVENT-3
       </div>
       <div  className=" text-[#ffffff] h-[200px] w-[900px] text-[16px]   pt-4 pl-6 pb-4 "   style={{backgroundImage:`url('/event.png')`}}>
         Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam voluptatibus ut officiis, maiores dolore n
         isi aperiam, ipsa tempora autem omnis reprehenderit quisquam recusandae placeat ratione suscipit magni error provident soluta!
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam alias eligendi natus eos quia consequatur cum delectus ipsa modi? Laudantium vitae est unde animi, temporibus voluptatum quis aut possimus quos.
         Lorem ipsum dolor sit amet coes. Sed id nisi ipsum veniam, quae accusamus, amet optio consequuntur deleniti eum itaque iste.
       </div>
       </div>
       
    </div>
    
    <div className="flex h-1/4 mt-4 mr-20 gap-2">
      <div className="flex-col items-end">
       <div className="font-antonio text-[#FEFEFE] text-5xl "> <p className="text-right">   EVENT-3</p>
    
       </div>
       <div  className=" text-[#ffffff] w-[900px] h-[200px] text-[16px] text-wrap  pt-4 pl-6 pb-4 "   style={{backgroundImage:`url('/event.png')`}}>
         Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam voluptatibus ut officiis, maiores dolore n
         isi aperiam, ipsa tempora autem omnis reprehenderit quisquam recusandae placeat ratione suscipit magni error provident soluta!
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam alias eligendi natus eos quia consequatur cum delectus ipsa modi? Laudantium vitae est unde animi, temporibus voluptatum quis aut possimus quos.
         Lorem ipsum dolor sit amet coes. Sed id nisi ipsum veniam, quae accusamus, amet optio consequuntur deleniti eum itaque iste.
       </div>
       </div>
       <div className="h-[30px] w-[250px] pt-4">
      <Image src='/Group 204.png' width={250} height={30} alt="image" className=""/>
     
      </div>
    </div>
  </div>;
};

export default Event;
