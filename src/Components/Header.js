import React from 'react'


const Header = () => {
  return (
    <div>
        <div className='w-[1440px]  relative'>
            <div className='w-[1168px] flex left-[136px] items-center justify-between relative top-[26px]'>
                <img
                    className="w-[63.9px] object-cover h-[48px] relative"
                    alt="Dv homes"
                    src="/img/dv-homes.png"
                />
                <div className="inline-flex items-center gap-[36px] flex-[0_0_auto] relative">
                    <div
                        className="[font-family:'Dessau-Medium',Helvetica] w-fit tracking-[0] text-[18px] font-medium leading-[22px] whitespace-nowrap relative text-primary">
                        Home
                    </div>
                    <div
                        className="[font-family:'Dessau-Medium',Helvetica] w-fit tracking-[0] text-[18px] font-medium leading-[22px] whitespace-nowrap relative text-black">
                        About Us
                    </div>
                    <div
                        className="[font-family:'Dessau-Medium',Helvetica] w-fit tracking-[0] text-[18px] font-medium leading-[22px] whitespace-nowrap relative text-black">
                        Home Valuation
                    </div>
                    <div
                        className="[font-family:'Dessau-Medium',Helvetica] w-fit tracking-[0] text-[18px] font-medium leading-[22px] whitespace-nowrap relative text-black">
                        Market Report
                    </div>
                    <div
                        className="[font-family:'Dessau-Medium',Helvetica] w-fit tracking-[0] text-[18px] font-medium leading-[22px] whitespace-nowrap relative text-black">
                        Buy
                    </div>
                    <div
                        className="[font-family:'Dessau-Medium',Helvetica] w-fit tracking-[0] text-[18px] font-medium leading-[22px] whitespace-nowrap relative text-black">
                        Sell
                    </div>
                    <div className="inline-flex items-start gap-[10px] flex-[0_0_auto] px-[16px] py-[10px] rounded-[22px] bg-sky-500 hover:bg-rose-400 relative">
                        <div className="inline-flex items-start gap-[10px] flex-[0_0_auto] pt-0 pb-[2px] px-0 relative">
                            <div className="[font-family:'Dessau-Medium',Helvetica] w-fit mt-[-1.00px] tracking-[0] text-[18px] font-medium leading-[22px] whitespace-nowrap relative text-white">
                                Get in touch
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}


  
export default Header