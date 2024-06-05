import React from "react";

function AllEventsPage() {
  return (
    <div className="bg-black flex flex-col ">
      <div className="text-white h-[80px] text-7xl pt-3 pr-8 pb-0 text-right">
        EVENTS
      </div>
      <div className="p-6 bg-[#FFBC58] ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-4">
            <div className="rounded-lg p-4 flex">
              <div className="bg-[#D9D9D9] border-black border-2 w-[570.5px] h-[192.25px] mr-4 rounded-xl"></div>
              <div className="flex flex-col justify-center">
                <h2 className="text-3xl font-bold">UPCOMING <br /> EVENTS</h2>
                <p>Get to know about the upcoming event, timings, location and how to register.</p>
              </div>
            </div>
            <div className=" rounded-lg p-4 flex">
              <div className="bg-[#D9D9D9] border-black border-2 w-[570.5px] h-[192.25px] mr-4 rounded-xl"></div>
              <div className="flex flex-col justify-center">
                <h2 className="text-3xl font-bold ">EVENT <br /> FEEDBACKS</h2>
                <p>Get to know about the experience of participants in the events and perks.</p>
              </div>
            </div>
          </div>
          <div className=" rounded-lg p-4 flex">
            <div className="bg-[#D9D9D9] border-black border-2 w-[570.5px] h-[192.25px] mr-4 rounded-xl"></div>
            <div className="flex-col justify-center">
              <h2 className="text-3xl font-bold">PAST <br /> EVENTS</h2>
              <p>Explore our previous successful events conducted by Espresso Literary and Arts Club, NIT Patna.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="pl-2 pr-2">
          <h2 className="text-white text-5xl font-bold text-center mb-4">SUGGEST EVENTS</h2>
          <form className="bg-black p-6 rounded-lg flex flex-col justify-center items-center">
            <div className="flex flex-col md:flex-row md:space-x-4 mb-4 w-1/2">
              <input
                type="text"
                placeholder="Name"
               
                className="p-2 rounded-3xl border-b-2  bg-[rgba(255,255,255,0.05)] border-gray-400  text-white mb-2 md:mb-0 w-full md:w-1/2"
              />
              <input
                type="text"
                placeholder="Contact"
                className="p-2 border-b-2  bg-[rgba(255,255,255,0.05)] text-white border-gray-400  rounded-3xl w-full md:w-1/2"
              />
            </div>
            <textarea
              placeholder="Suggestion:"
              className="p-2 border-b-2 bg-[rgba(255,255,255,0.05)] text-white border-gray-400  rounded-3xl w-1/2 h-32"
            ></textarea>
          </form>
        </div>
      </div>
  
  );
}

export default AllEventsPage;
