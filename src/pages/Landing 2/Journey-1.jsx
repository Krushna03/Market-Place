import React from 'react'

const Journey1 = () => {
  return (
    <>
    <div className='pt-10'> 
      <p className="text-center font-bold text-6xl mb-4">Explore Our Journey</p>
          <h1 className="text-center font-bold text-2xl ">"Discover how we evolved, innovated, and shaped the future of IoT solutions."</h1>
            <div className="w-full min-h-screen flex items-center justify-center p-4">
              <div className="relative w-full max-w-4xl h-[1150px] mb-20 mt-12">
                {/* Vertical Timeline */}
                <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-white transform -translate-x-1/2"></div>
                  
                  {/* 1 */}
                  <div className="absolute left-1/2 flex items-center">
                    <div className="w-8 h-8 rounded-full bg-white border-2 border-white flex items-center justify-center z-10 transform -translate-x-1/2">
                      <div className="w-6 h-6 rounded-full bg-black"></div>
                    </div>
                    <div className="text-gray-800 text-2xl font-bold">Destination 1</div>
                  </div>
                  <div className="absolute left-[10%] text-center">
                    <div className="w-80 h-80 rounded-md mb-4 relative -left-5 overflow-hidden">
                      <img src="/widget.png" alt="Market Widget" fill className="object-contain" />
                      <h2 className="text-gray-800 text-2xl font-bold">Market Widget</h2>
                    </div>
                  </div>

                  {/* 2 */}
                  <div className="absolute left-[30%] top-[38%] flex items-center gap-7">
                    <div className=" text-gray-800 text-2xl font-bold">Destination 2</div>
                    <div className="w-8 h-8 rounded-full bg-white border-2 border-white flex items-center justify-center z-10 transform -translate-x-1/2">
                      <div className="w-6 h-6 rounded-full bg-black"></div>
                    </div>
                  </div>
                  <div className="absolute right-[5%] top-[38%] text-center">
                    <div className="w-80 h-80 mb-4 relative overflow-hidden">
                      <img src="/hardware.png" alt="Hardware Widget" fill className="object-contain" />
                      <h2 className="text-gray-800 text-2xl font-bold">Hardware Widget</h2>
                    </div>
                  </div>

                  {/* 3 */}
                  <div className="absolute left-1/2 top-[77%] flex items-center">
                    <div className="w-8 h-8 rounded-full bg-white border-2 border-white flex items-center justify-center z-10 transform -translate-x-1/2">
                      <div className="w-6 h-6 rounded-full bg-black"></div>
                    </div>
                    <div className="text-gray-800 text-2xl font-bold">Destination 3</div>
                  </div>
                  <div className="absolute left-[10%] top-[77%] text-center">
                    <div className="w-80 h-80 rounded-md mb-4 relative -left-5 overflow-hidden">
                      <img src="/pharma.png" alt="Market Widget" fill className="object-contain" />
                      <h2 className="text-gray-800 text-2xl font-bold">Pharma Widget</h2>
                    </div>
                  </div>
              </div>
          </div>
      </div>
    </>
  )
}

export default Journey1