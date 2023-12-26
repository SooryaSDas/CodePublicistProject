import React from 'react'

const DetailImage = () => {
  return (
    <div className='inline-flex flex-col items-start gap-[24px] pt-0 pb-[80px] px-0 absolute top-0 left-[110px]'>
            <div className="flex w-[1170px] items-start gap-[24px] top-[250px] relative flex-[0_0_auto]">
              <div className="relative w-[573px] h-[573px] rounded-[8px] bg-cover bg-[50%_50%]" style={{ backgroundImage: "url('/img/frame-10.png')" }}/>
              <div className="flex flex-col items-start gap-[24px] relative flex-1 self-stretch grow">
                <div className="flex items-start gap-[24px] relative flex-1 self-stretch w-full grow">
                  <div className="relative self-stretch w-[274.5px] rounded-[8px] bg-cover bg-[50%_50%]" style={{ backgroundImage: "url('/img/frame-10.png')" }}/>
                  <div className="relative self-stretch w-[274.5px] rounded-[8px] bg-cover bg-[50%_50%]" style={{ backgroundImage: "url('/img/frame-10.png')" }}/>
                </div>
                <div className="flex items-start gap-[24px] relative flex-1 self-stretch w-full grow">
                  <div className="relative self-stretch w-[274.5px] rounded-[8px] bg-cover bg-[50%_50%]" style={{ backgroundImage: "url('/img/frame-10.png')" }}/>
                  <div className="flex flex-col w-[274.5px] items-end justify-end p-[24px] relative self-stretch rounded-[8px] overflow-hidden bg-cover bg-[50%_50%]" style={{ backgroundImage: "url('/img/frame-10.png')" }}>
                    <div className="flex-col items-start justify-end px-[16px] py-[10px] bg-yellow-50 rounded-[32px] inline-flex gap-[6px] relative flex-[0_0_auto]">
                      <div className="relative w-fit mt-[-1.00px] [font-family:'Dessau-DemiBold',Helvetica] font-bold text-black text-[16px] tracking-[0] leading-[22px] whitespace-nowrap">
                        View all 24 photos
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
    </div>
  )
}

export default DetailImage