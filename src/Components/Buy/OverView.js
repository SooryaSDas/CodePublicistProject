import React, { useState } from 'react'
import { Forward } from '../../icons/Forward'

const OverView = () => {
    const [show, setShow] = useState(false);
  return (
    <div>
        <div className="inline-flex flex-col items-start gap-[24px] pt-0 px-0 absolute top-7">
            <div className='absolute w-full top-[850px] left-32 '>
                    <div className="flex gap-[24px] self-stretch w-full items-start relative flex-[0_0_auto]">
                    <div className="inline-flex flex-col items-start gap-[24px] relative flex-[0_0_auto]">
                        <div className="flex flex-col w-[700px] items-start gap-[10px] relative flex-[0_0_auto] bg-gray-100 rounded-lg overflow-hidden">
                        <div className="flex flex-col items-start gap-[10px] px-[16px] py-[24px] relative self-stretch w-full flex-[0_0_auto]">
                            <div className="relative w-fit mt-[-1.00px] [font-family:'Dessau-DemiBold',Helvetica] font-bold text-black text-[20px] tracking-[0] leading-[24px] whitespace-nowrap">
                            Overview
                            </div>
                            <div className="flex self-stretch w-full flex-col items-start gap-[8px] relative flex-[0_0_auto]">
                            <p className="relative self-stretch mt-[-1.00px] [font-family:'Dessau-Medium',Helvetica] font-medium text-body text-[16px] tracking-[0] leading-[20px]">
                                Come live in this terrific low turnover, single story apartment that is just perfect for 1 or
                                two. One bedroom, living room, full bath, kitchen and a private free laundry facility on-site
                                for units without washer &amp; dryer. This brick sided home is just 5 minutes from Lea Hill and
                                the college, really fast commute over to Hwy 18 and SR 167, plenty of shopping and restaurants
                                close by or for delivery and just a couple minutes walk to the river, low key
                            </p>
                            <div onClick={()=>setShow(!show)} className=" hover:cursor-pointer relative self-stretch [font-family:'Dessau-DemiBold',Helvetica] font-bold text-black text-[16px] tracking-[0] leading-[24px] underline">
                               {show ? "Show Less" : "Show More"}
                            </div>
                           { show && <div>
                                <p className="relative self-stretch mt-[-1.00px] [font-family:'Dessau-Medium',Helvetica] font-medium text-body text-[16px] tracking-[0] leading-[20px]">
                                    Come live in this terrific low turnover, single story apartment that is just perfect for 1 or
                                    two. One bedroom, living room, full bath, kitchen and a private free laundry facility on-site
                                    for units without washer &amp; dryer. This brick sided home is just 5 minutes from Lea Hill and
                                    the college, really fast commute over to Hwy 18 and SR 167, plenty of shopping and restaurants
                                    close by or for delivery and just a couple minutes walk to the river, low key
                                </p>
                            </div>}
                            </div>
                        </div>
                        </div>
                        <div className="flex flex-col w-[700px] items-start gap-[10px] relative flex-[0_0_auto] bg-gray-100 rounded-lg overflow-hidden">
                        <div className="flex flex-col items-start gap-[16px] px-[16px] py-[24px] relative self-stretch w-full flex-[0_0_auto]">
                            <div className="relative w-fit mt-[-1.00px] [font-family:'Dessau-DemiBold',Helvetica] font-bold text-black text-[20px] tracking-[0] leading-[24px] whitespace-nowrap">
                            Details
                            </div>
                            <div className="flex flex-col gap-[16px] self-stretch w-full items-start relative flex-[0_0_auto]">
                            <div className="flex items-start gap-[10px] relative self-stretch w-full flex-[0_0_auto]">
                                <div className="flex flex-1 grow flex-col items-start gap-[4px] relative">
                                <div className="inline-flex items-start gap-[4px] relative flex-[0_0_auto]">
                                    <div className="relative w-fit mt-[-1.00px] [font-family:'Dessau-DemiBold',Helvetica] font-bold text-black text-[16px] tracking-[0] leading-[20px] whitespace-nowrap">
                                    Listing Id:
                                    </div>
                                    <div className="text-body text-[16px] leading-[20px] relative w-fit mt-[-1.00px] [font-family:'Dessau-Medium',Helvetica] font-medium tracking-[0] whitespace-nowrap">
                                    2182179
                                    </div>
                                </div>
                                </div>
                                <div className="flex flex-1 grow flex-col items-start gap-[4px] relative">
                                <div className="inline-flex items-start gap-[4px] relative flex-[0_0_auto]">
                                    <div className="relative w-fit mt-[-1.00px] [font-family:'Dessau-DemiBold',Helvetica] font-bold text-black text-[16px] tracking-[0] leading-[20px] whitespace-nowrap">
                                    Property Sub Type:
                                    </div>
                                    <div className="relative w-fit mt-[-1.00px] [font-family:'Dessau-Medium',Helvetica] font-medium text-body text-[16px] tracking-[0] leading-[20px] whitespace-nowrap">
                                    Rental
                                    </div>
                                </div>
                                </div>
                                <div className="flex flex-1 grow flex-col items-start gap-[4px] relative">
                                <div className="inline-flex items-start gap-[4px] relative flex-[0_0_auto]">
                                    <div className="relative w-fit mt-[-1.00px] [font-family:'Dessau-DemiBold',Helvetica] font-bold text-black text-[16px] tracking-[0] leading-[20px] whitespace-nowrap">
                                    Subdivision:
                                    </div>
                                    <div className="text-[16px] leading-[20px] relative w-fit mt-[-1.00px] [font-family:'Dessau-Medium',Helvetica] font-medium text-body tracking-[0] whitespace-nowrap">
                                    Auburn
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="flex items-start gap-[10px] relative self-stretch w-full flex-[0_0_auto]">
                                <div className="flex flex-1 grow flex-col items-start gap-[4px] relative">
                                <div className="inline-flex items-start gap-[4px] relative flex-[0_0_auto]">
                                    <div className="relative w-fit mt-[-1.00px] [font-family:'Dessau-DemiBold',Helvetica] font-bold text-black text-[16px] tracking-[0] leading-[20px] whitespace-nowrap">
                                    Lot area (sqft):
                                    </div>
                                    <div className="w-fit mt-[-1.00px] text-body text-[16px] leading-[20px] whitespace-nowrap relative [font-family:'Dessau-Medium',Helvetica] font-medium tracking-[0]">
                                    200 sqft
                                    </div>
                                </div>
                                </div>
                                <div className="flex flex-1 grow flex-col items-start gap-[4px] relative">
                                <div className="inline-flex items-start gap-[4px] relative flex-[0_0_auto]">
                                    <div className="relative w-fit mt-[-1.00px] [font-family:'Dessau-DemiBold',Helvetica] font-bold text-black text-[16px] tracking-[0] leading-[20px] whitespace-nowrap">
                                    Home area (sqft):
                                    </div>
                                    <div className="w-fit mt-[-1.00px] text-body text-[16px] leading-[20px] whitespace-nowrap relative [font-family:'Dessau-Medium',Helvetica] font-medium tracking-[0]">
                                    150 sqft
                                    </div>
                                </div>
                                </div>
                                <div className="flex flex-1 grow flex-col items-start gap-[4px] relative">
                                <div className="inline-flex items-start gap-[4px] relative flex-[0_0_auto]">
                                    <div className="relative w-fit mt-[-1.00px] [font-family:'Dessau-DemiBold',Helvetica] font-bold text-black text-[16px] tracking-[0] leading-[20px] whitespace-nowrap">
                                    Beds:
                                    </div>
                                    <div className="relative w-fit mt-[-1.00px] [font-family:'Dessau-Medium',Helvetica] font-medium text-body text-[16px] tracking-[0] leading-[20px] whitespace-nowrap">
                                    6
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="flex items-start gap-[10px] relative self-stretch w-full flex-[0_0_auto]">
                                <div className="flex flex-1 grow flex-col items-start gap-[4px] relative">
                                <div className="inline-flex items-start gap-[4px] relative flex-[0_0_auto]">
                                    <div className="relative w-fit mt-[-1.00px] [font-family:'Dessau-DemiBold',Helvetica] font-bold text-black text-[16px] tracking-[0] leading-[20px] whitespace-nowrap">
                                    Baths:
                                    </div>
                                    <div className="relative w-fit mt-[-1.00px] [font-family:'Dessau-Medium',Helvetica] font-medium text-body text-[16px] tracking-[0] leading-[20px] whitespace-nowrap">
                                    2
                                    </div>
                                </div>
                                </div>
                                <div className="flex flex-1 grow flex-col items-start gap-[4px] relative">
                                <div className="inline-flex items-start gap-[4px] relative flex-[0_0_auto]">
                                    <div className="relative w-fit mt-[-1.00px] [font-family:'Dessau-DemiBold',Helvetica] font-bold text-black text-[16px] tracking-[0] leading-[20px] whitespace-nowrap">
                                    Garages:
                                    </div>
                                    <div className="relative w-fit mt-[-1.00px] [font-family:'Dessau-Medium',Helvetica] font-medium text-body text-[16px] tracking-[0] leading-[20px] whitespace-nowrap">
                                    1
                                    </div>
                                </div>
                                </div>
                                <div className="flex flex-1 grow flex-col items-start gap-[4px] relative">
                                <div className="inline-flex items-start gap-[4px] relative flex-[0_0_auto]">
                                    <div className="mt-[-1.00px] [font-family:'Dessau-DemiBold',Helvetica] font-bold text-black relative w-fit text-[16px] tracking-[0] leading-[20px] whitespace-nowrap">
                                    Price ($):
                                    </div>
                                    <div className="relative w-fit mt-[-1.00px] [font-family:'Dessau-Medium',Helvetica] font-medium text-body text-[16px] tracking-[0] leading-[20px] whitespace-nowrap">
                                    4,667
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="flex flex-col w-[700px] items-start gap-[10px] relative flex-[0_0_auto] bg-gray-100 rounded-[10px] overflow-hidden">
                        <div className="flex flex-col items-start gap-[16px] px-[16px] py-[24px] relative self-stretch w-full flex-[0_0_auto]">
                            <div className="flex items-center gap-[10px] relative self-stretch w-full flex-[0_0_auto]">
                            <div className="relative flex-1 mt-[-1.00px] [font-family:'Dessau-DemiBold',Helvetica] font-bold text-black text-[20px] tracking-[0] leading-[24px]">
                                Location
                            </div>
                            <div className="[font-family:'Dessau-Medium',Helvetica] font-medium text-body relative w-fit text-[16px] tracking-[0] leading-[20px] whitespace-nowrap">
                                Washington
                            </div>
                            </div>
                            <div className="relative self-stretch w-full h-[240px] rounded-[8px] bg-cover bg-[50%_50%]" style={{ backgroundImage: "url('/img/map.png')" }}/>
                        </div>
                        </div>
                        <div className="flex flex-col w-[700px] items-start gap-[10px] relative flex-[0_0_auto] bg-gray-100 rounded-[10px] overflow-hidden">
                        <div className="flex flex-col items-start gap-[16px] px-[16px] py-[24px] relative self-stretch w-full flex-[0_0_auto]">
                            <div className="relative w-fit mt-[-1.00px] [font-family:'Dessau-DemiBold',Helvetica] font-bold text-black text-[20px] tracking-[0] leading-[24px] whitespace-nowrap">
                            Features
                            </div>
                            <div className="flex flex-col gap-[16px] self-stretch w-full items-start relative flex-[0_0_auto]">
                            <div className="self-stretch h-5 flex-col justify-start items-start gap-4 flex">
                                <div className="self-stretch justify-start items-start gap-2.5 inline-flex">
                                    <div className="grow shrink basis-0 h-5 justify-start items-center gap-2 flex">
                                        <div className="w-2 h-2 bg-slate-900 rounded-full" />
                                        <div className="text-gray-600 text-base font-normal [font-family:'Dessau-Medium',Helvetica]  leading-tight">Air Conditioning</div>
                                    </div>
                                    <div className="grow shrink basis-0 h-5 justify-start items-center gap-2 flex">
                                        <div className="w-2 h-2 bg-slate-900 rounded-full" />
                                        <div className="text-gray-600 text-base font-normal [font-family:'Dessau-Medium',Helvetica]  leading-tight">Gym</div>
                                    </div>
                                    <div className="grow shrink basis-0 h-5 justify-start items-center gap-2 flex">
                                        <div className="w-2 h-2 bg-slate-900 rounded-full" />
                                        <div className="text-gray-600 text-base font-normal [font-family:'Dessau-Medium',Helvetica]  leading-tight">Lawn</div>
                                    </div>
                                </div>
                            </div>
                            <div className="self-stretch h-5 flex-col justify-start items-start gap-4 flex">
                                <div className="self-stretch justify-start items-start gap-2.5 inline-flex">
                                    <div className="grow shrink basis-0 h-5 justify-start items-center gap-2 flex">
                                        <div className="w-2 h-2 bg-slate-900 rounded-full" />
                                        <div className="text-gray-600 text-base font-normal [font-family:'Dessau-Medium',Helvetica]  leading-tight">Microwave</div>
                                    </div>
                                    <div className="grow shrink basis-0 h-5 justify-start items-center gap-2 flex">
                                        <div className="w-2 h-2 bg-slate-900 rounded-full" />
                                        <div className="text-gray-600 text-base font-normal [font-family:'Dessau-Medium',Helvetica]  leading-tight">Outdoor Shower</div>
                                    </div>
                                    <div className="grow shrink basis-0 h-5 justify-start items-center gap-2 flex">
                                        <div className="w-2 h-2 bg-slate-900 rounded-full" />
                                        <div className="text-gray-600 text-base font-normal [font-family:'Dessau-Medium',Helvetica]  leading-tight">Refrigerator</div>
                                    </div>
                                </div>
                            </div>
                            <div className="self-stretch h-5 flex-col justify-start items-start gap-4 flex">
                                <div className="self-stretch justify-start items-start gap-2.5 inline-flex">
                                    <div className="grow shrink basis-0 h-5 justify-start items-center gap-2 flex">
                                        <div className="w-2 h-2 bg-slate-900 rounded-full" />
                                        <div className="text-gray-600 text-base font-normal [font-family:'Dessau-Medium',Helvetica]  leading-tight">Swimming Pool</div>
                                    </div>
                                    <div className="grow shrink basis-0 h-5 justify-start items-center gap-2 flex">
                                        <div className="w-2 h-2 bg-slate-900 rounded-full" />
                                        <div className="text-gray-600 text-base font-normal [font-family:'Dessau-Medium',Helvetica]  leading-tight">TV Cable</div>
                                    </div>
                                    <div className="grow shrink basis-0 h-5 justify-start items-center gap-2 flex">
                                        <div className="w-2 h-2 bg-slate-900 rounded-full" />
                                        <div className="text-gray-600 text-base font-normal [font-family:'Dessau-Medium',Helvetica]  leading-tight">Washer</div>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="flex flex-col w-[700px] items-start gap-[10px] relative flex-[0_0_auto] bg-gray-100 rounded-[10px] overflow-hidden">
                        <div className="flex flex-col items-start gap-[16px] px-[16px] py-[24px] relative self-stretch w-full flex-[0_0_auto]">
                            <div className="relative w-fit mt-[-1.00px] [font-family:'Dessau-DemiBold',Helvetica] font-bold text-black text-[20px] tracking-[0] leading-[24px] whitespace-nowrap">
                            Floor plans
                            </div>
                            <div className="flex flex-col items-start gap-[24px] relative self-stretch w-full flex-[0_0_auto]">
                                {/* 1st floor start */}
                                <div className="flex flex-col gap-[16px] self-stretch w-full items-start relative flex-[0_0_auto]">
                                    <div className="flex flex-col gap-[10px] self-stretch w-full items-start relative flex-[0_0_auto]">
                                    <div className="flex items-center gap-[10px] relative self-stretch w-full flex-[0_0_auto]">
                                        <div className="flex-1 [font-family:'Dessau-Medium',Helvetica] font-medium text-[24px] leading-[26px] relative mt-[-1.00px] text-black tracking-[0]">
                                        First floor
                                        </div>
                                        <Forward className="!relative !w-[18px] !h-[18px]" />
                                    </div>
                                    <div className="inline-flex items-start gap-[24px] relative flex-[0_0_auto]">
                                        <div className="inline-flex flex-col items-start gap-[8px] relative flex-[0_0_auto]">
                                        <div className="inline-flex items-start gap-[4px] relative flex-[0_0_auto]">
                                            <div className="relative w-fit mt-[-1.00px] [font-family:'Dessau-DemiBold',Helvetica] font-bold text-black text-[16px] tracking-[0] leading-[20px] whitespace-nowrap">
                                            Rooms:
                                            </div>
                                            <div className="relative w-fit mt-[-1.00px] [font-family:'Dessau-Medium',Helvetica] font-medium text-body text-[16px] tracking-[0] leading-[20px] whitespace-nowrap">
                                            4
                                            </div>
                                        </div>
                                        </div>
                                        <div className="inline-flex flex-[0_0_auto] flex-col items-start gap-[4px] relative">
                                        <div className="inline-flex items-start gap-[8px] relative flex-[0_0_auto]">
                                            <div className="relative w-fit mt-[-1.00px] [font-family:'Dessau-DemiBold',Helvetica] font-bold text-black text-[16px] tracking-[0] leading-[20px] whitespace-nowrap">
                                            Baths:
                                            </div>
                                            <div className="relative w-fit mt-[-1.00px] [font-family:'Dessau-Medium',Helvetica] font-medium text-body text-[16px] tracking-[0] leading-[20px] whitespace-nowrap">
                                            2
                                            </div>
                                        </div>
                                        </div>
                                        <div className="inline-flex flex-[0_0_auto] flex-col items-start gap-[4px] relative">
                                        <div className="inline-flex items-start gap-[8px] relative flex-[0_0_auto]">
                                            <div className="relative w-fit mt-[-1.00px] [font-family:'Dessau-DemiBold',Helvetica] font-bold text-black text-[16px] tracking-[0] leading-[20px] whitespace-nowrap">
                                            Size:
                                            </div>
                                            <div className="w-fit mt-[-1.00px] text-body text-[16px] leading-[20px] whitespace-nowrap relative [font-family:'Dessau-Medium',Helvetica] font-medium tracking-[0]">
                                            150 SqFt
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                    <div className="relative self-stretch w-full h-px bg-line" />
                                </div>
                                {/* 1st floor ends */}
                                {/* //image start */}
                                <div className="relative self-stretch w-full h-[300px] bg-[#ffffff] rounded-[8px] overflow-hidden">
                                    <img
                                    className="absolute w-[413px] h-[300px] top-0 left-[127px] object-cover"
                                    alt="Floor"
                                    src="/img/floor1-1.png"
                                    />
                                </div>
                                {/* image ends */}

                                {/* 2nd floor */}
                                <div className="flex flex-col gap-[16px] self-stretch w-full items-start relative flex-[0_0_auto]">
                                    <div className="flex flex-col gap-[6px] self-stretch w-full items-start relative flex-[0_0_auto]">
                                    <div className="flex items-center gap-[10px] relative self-stretch w-full flex-[0_0_auto]">
                                        <div className="flex-1 [font-family:'Dessau-Medium',Helvetica] font-medium text-[24px] leading-[26px] relative mt-[-1.00px] text-black tracking-[0]">
                                        Second floor
                                        </div>
                                        <Forward className="!relative !w-[18px] !h-[18px]" />
                                    </div>
                                    <div className="inline-flex items-start gap-[10px] relative flex-[0_0_auto]">
                                        <div className="flex flex-col w-[216px] items-start gap-[8px] relative">
                                        <div className="inline-flex items-start gap-[4px] relative flex-[0_0_auto]">
                                            <div className="relative w-fit mt-[-1.00px] [font-family:'Dessau-DemiBold',Helvetica] font-bold text-black text-[16px] tracking-[0] leading-[20px] whitespace-nowrap">
                                            Rooms:
                                            </div>
                                            <div className="relative w-fit mt-[-1.00px] [font-family:'Dessau-Medium',Helvetica] font-medium text-body text-[16px] tracking-[0] leading-[20px] whitespace-nowrap">
                                            4
                                            </div>
                                        </div>
                                        </div>
                                        <div className="flex w-[216px] flex-col items-start gap-[4px] relative">
                                        <div className="inline-flex items-start gap-[8px] relative flex-[0_0_auto]">
                                            <div className="relative w-fit mt-[-1.00px] [font-family:'Dessau-DemiBold',Helvetica] font-bold text-black text-[16px] tracking-[0] leading-[20px] whitespace-nowrap">
                                            Baths:
                                            </div>
                                            <div className="relative w-fit mt-[-1.00px] [font-family:'Dessau-Medium',Helvetica] font-medium text-body text-[16px] tracking-[0] leading-[20px] whitespace-nowrap">
                                            2
                                            </div>
                                        </div>
                                        </div>
                                        <div className="flex w-[216px] flex-col items-start gap-[4px] relative">
                                        <div className="inline-flex items-start gap-[8px] relative flex-[0_0_auto]">
                                            <div className="relative w-fit mt-[-1.00px] [font-family:'Dessau-DemiBold',Helvetica] font-bold text-black text-[16px] tracking-[0] leading-[20px] whitespace-nowrap">
                                            Size:
                                            </div>
                                            <div className="w-fit mt-[-1.00px] text-body text-[16px] leading-[20px] whitespace-nowrap relative [font-family:'Dessau-Medium',Helvetica] font-medium tracking-[0]">
                                            150 SqFt
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                    <div className="relative self-stretch w-full h-px bg-line" />
                                </div>
                                {/* 3rd floor */}
                                <div className="flex flex-col gap-[16px] self-stretch w-full items-start relative flex-[0_0_auto]">
                                    <div className="flex flex-col gap-[6px] self-stretch w-full items-start relative flex-[0_0_auto]">
                                    <div className="flex items-center gap-[10px] relative self-stretch w-full flex-[0_0_auto]">
                                        <div className="flex-1 [font-family:'Dessau-Medium',Helvetica] font-medium text-[24px] leading-[26px] relative mt-[-1.00px] text-black tracking-[0]">
                                        Third floor
                                        </div>
                                        <Forward className="!relative !w-[18px] !h-[18px]" />
                                    </div>
                                    <div className="inline-flex items-start gap-[10px] relative flex-[0_0_auto]">
                                        <div className="flex flex-col w-[216px] items-start gap-[8px] relative">
                                        <div className="inline-flex items-start gap-[4px] relative flex-[0_0_auto]">
                                            <div className="relative w-fit mt-[-1.00px] [font-family:'Dessau-DemiBold',Helvetica] font-bold text-black text-[16px] tracking-[0] leading-[20px] whitespace-nowrap">
                                            Rooms:
                                            </div>
                                            <div className="relative w-fit mt-[-1.00px] [font-family:'Dessau-Medium',Helvetica] font-medium text-body text-[16px] tracking-[0] leading-[20px] whitespace-nowrap">
                                            4
                                            </div>
                                        </div>
                                        </div>
                                        <div className="flex w-[216px] flex-col items-start gap-[4px] relative">
                                        <div className="inline-flex items-start gap-[8px] relative flex-[0_0_auto]">
                                            <div className="relative w-fit mt-[-1.00px] [font-family:'Dessau-DemiBold',Helvetica] font-bold text-black text-[16px] tracking-[0] leading-[20px] whitespace-nowrap">
                                            Baths:
                                            </div>
                                            <div className="relative w-fit mt-[-1.00px] [font-family:'Dessau-Medium',Helvetica] font-medium text-body text-[16px] tracking-[0] leading-[20px] whitespace-nowrap">
                                            2
                                            </div>
                                        </div>
                                        </div>
                                        <div className="flex w-[216px] flex-col items-start gap-[4px] relative">
                                        <div className="inline-flex items-start gap-[8px] relative flex-[0_0_auto]">
                                            <div className="relative w-fit mt-[-1.00px] [font-family:'Dessau-DemiBold',Helvetica] font-bold text-black text-[16px] tracking-[0] leading-[20px] whitespace-nowrap">
                                            Size:
                                            </div>
                                            <div className="w-fit mt-[-1.00px] text-body text-[16px] leading-[20px] whitespace-nowrap relative [font-family:'Dessau-Medium',Helvetica] font-medium tracking-[0]">
                                            150 SqFt
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                    <div className="relative self-stretch w-full h-px bg-line" />
                                </div>
                                {/* 3rd floor ends */}
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-start gap-[24px] p-[24px] relative flex-1 grow bg-white rounded-[8px] border border-solid border-line">
                        <div className="flex flex-col items-start justify-center gap-[8px] p-[16px] relative self-stretch w-full flex-[0_0_auto] bg-blue-50 rounded-[8px]">
                        <div className="relative w-fit mt-[-1.00px] [font-family:'Dessau-Bold',Helvetica] font-bold text-blue-700 text-[24px] tracking-[0] leading-[28px] whitespace-nowrap">
                            Boney Mathew
                        </div>
                        <div className="inline-flex flex-col justify-center gap-[8px] items-start relative flex-[0_0_auto]">
                            <p className="relative w-fit mt-[-1.00px] [font-family:'Dessau-Bold',Helvetica] font-normal text-transparent text-[18px] tracking-[0] leading-[24px] whitespace-nowrap">
                            <span className="font-bold text-[#14132a]">Phone:</span>
                            <span className="[font-family:'Dessau-Medium',Helvetica] font-medium text-[#6e7191]">
                                {" "}
                                206-724-5577
                            </span>
                            </p>
                            <p className="relative w-fit [font-family:'Dessau-Bold',Helvetica] font-normal text-transparent text-[18px] tracking-[0] leading-[24px] whitespace-nowrap">
                            <span className="font-bold text-[#14132a]">Email:</span>
                            <span className="[font-family:'Dessau-Medium',Helvetica] font-medium text-[#6e7191]">
                                {" "}
                                Boneymathew@johnlscott.com
                            </span>
                            </p>
                        </div>
                        </div>
                        <div className="inline-flex flex-col justify-center gap-[8px] items-start relative flex-[0_0_auto]">
                        <div className="relative w-fit mt-[-1.00px] [font-family:'Dessau-Bold',Helvetica] font-bold text-black text-[24px] tracking-[0] leading-[28px] whitespace-nowrap">
                            Request More Information
                        </div>
                        <p className="relative w-fit [font-family:'Dessau-Bold',Helvetica] font-normal text-transparent text-[18px] tracking-[0] leading-[24px] whitespace-nowrap">
                            <span className="font-bold text-[#14132a]">Listing ID:</span>
                            <span className="[font-family:'Dessau-Medium',Helvetica] font-medium text-[#6e7191]"> 2182179</span>
                        </p>
                        </div>
                        <div className="flex flex-col gap-[16px] self-stretch w-full items-start relative flex-[0_0_auto]">
                        <div className="flex flex-col gap-[10px] self-stretch w-full items-start relative flex-[0_0_auto]">
                            <div className="relative w-fit mt-[-1.00px] [font-family:'Dessau-Medium',Helvetica] font-medium text-black text-[18px] tracking-[0] leading-[22px] whitespace-nowrap">
                            First name
                            </div>
                            <div className="flex flex-col items-start justify-center gap-[10px] p-[16px] relative self-stretch w-full flex-[0_0_auto] bg-gray-100 rounded-[8px] overflow-hidden">
                            <div className="relative w-fit mt-[-1.00px] [font-family:'Dessau-Medium',Helvetica] font-medium text-gray-400 text-[20px] tracking-[0] leading-[22px] whitespace-nowrap">
                                Enter your first name
                            </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-[10px] self-stretch w-full items-start relative flex-[0_0_auto]">
                            <div className="relative w-fit mt-[-1.00px] [font-family:'Dessau-Medium',Helvetica] font-medium text-black text-[18px] tracking-[0] leading-[22px] whitespace-nowrap">
                            Last name
                            </div>
                            <div className="flex flex-col items-start justify-center gap-[10px] p-[16px] relative self-stretch w-full flex-[0_0_auto] bg-gray-100 rounded-[8px] overflow-hidden">
                            <div className="relative w-fit mt-[-1.00px] [font-family:'Dessau-Medium',Helvetica] font-medium text-gray-400 text-[20px] tracking-[0] leading-[22px] whitespace-nowrap">
                                Enter your last name
                            </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-[10px] self-stretch w-full items-start relative flex-[0_0_auto]">
                            <div className="relative w-fit mt-[-1.00px] [font-family:'Dessau-Medium',Helvetica] font-medium text-black text-[18px] tracking-[0] leading-[22px] whitespace-nowrap">
                            Email
                            </div>
                            <div className="flex flex-col items-start justify-center gap-[10px] p-[16px] relative self-stretch w-full flex-[0_0_auto] bg-gray-100 rounded-[8px] overflow-hidden">
                            <div className="relative w-fit mt-[-1.00px] [font-family:'Dessau-Medium',Helvetica] font-medium text-gray-400 text-[20px] tracking-[0] leading-[22px] whitespace-nowrap">
                                Enter your email address
                            </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-[10px] self-stretch w-full items-start relative flex-[0_0_auto]">
                            <div className="text-black text-[18px] leading-[22px] relative w-fit mt-[-1.00px] [font-family:'Dessau-Medium',Helvetica] font-medium tracking-[0] whitespace-nowrap">
                            Phone number
                            </div>
                            <div className="flex flex-col items-start justify-center gap-[10px] p-[16px] relative self-stretch w-full flex-[0_0_auto] bg-gray-100 rounded-[8px] overflow-hidden">
                            <div className="relative w-fit mt-[-1.00px] [font-family:'Dessau-Medium',Helvetica] font-medium text-gray-400 text-[20px] tracking-[0] leading-[22px] whitespace-nowrap">
                                Enter your phone number
                            </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-[10px] self-stretch w-full items-start relative flex-[0_0_auto]">
                            <div className="relative w-fit mt-[-1.00px] [font-family:'Dessau-Medium',Helvetica] font-medium text-black text-[18px] tracking-[0] leading-[22px] whitespace-nowrap">
                            Message
                            </div>
                            <div className="flex flex-col h-[100px] items-start gap-[10px] p-[16px] relative self-stretch w-full bg-gray-100 rounded-[8px] overflow-hidden">
                            <div className="relative w-fit mt-[-1.00px] [font-family:'Dessau-Medium',Helvetica] font-medium text-gray-400 text-[20px] tracking-[0] leading-[22px] whitespace-nowrap">
                                Message
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="flex flex-col items-start justify-center gap-[10px] relative self-stretch w-full flex-[0_0_auto]">
                        <div className="inline-flex items-center justify-center gap-[10px] px-[24px] py-[14px] relative flex-[0_0_auto] bg-blue-400 rounded-[45px]">
                            <div className="items-center self-stretch inline-flex gap-[6px] relative flex-[0_0_auto]">
                            <div className="inline-flex items-center gap-[10px] pt-0 pb-[4px] px-0 relative flex-[0_0_auto]">
                                <div className="relative w-fit mt-[-1.00px] [font-family:'Dessau-Medium',Helvetica] font-medium text-yellow-50 text-[18px] tracking-[0] leading-[24px] whitespace-nowrap">
                                Send Request
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default OverView