import React from 'react'
import BasicDetails from './BasicDetails'
import OverView from './OverView'

const BodyContents = () => {
  return (
    <div className="bg-[#ffffff] flex flex-row justify-center w-full">
        <div className="bg-[#ffffff] w-[1440px] relative mt-14">
            <BasicDetails/>
            <div >
                <div>
                    <OverView/>
                </div>
                
            </div>
        </div>
       
    </div>
  )
}

{/* <div className="w-[700px] h-[180px] px-4 py-6 flex-col justify-start items-start gap-4 inline-flex">
    <div className="text-slate-900 text-xl font-normal font-['Dessau'] leading-normal">Features</div>
    <div className="self-stretch h-[92px] flex-col justify-start items-start gap-4 flex">
        <div className="self-stretch h-5 flex-col justify-start items-start gap-4 flex">
            <div className="self-stretch justify-start items-start gap-2.5 inline-flex">
                <div className="grow shrink basis-0 h-5 justify-start items-center gap-2 flex">
                    <div className="w-2 h-2 bg-slate-900 rounded-full" />
                    <div className="text-gray-600 text-base font-normal font-['Dessau'] leading-tight">Air Conditioning</div>
                </div>
                <div className="grow shrink basis-0 h-5 justify-start items-center gap-2 flex">
                    <div className="w-2 h-2 bg-slate-900 rounded-full" />
                    <div className="text-gray-600 text-base font-normal font-['Dessau'] leading-tight">Gym</div>
                </div>
                <div className="grow shrink basis-0 h-5 justify-start items-center gap-2 flex">
                    <div className="w-2 h-2 bg-slate-900 rounded-full" />
                    <div className="text-gray-600 text-base font-normal font-['Dessau'] leading-tight">Lawn</div>
                </div>
            </div>
        </div>
        <div className="self-stretch h-5 flex-col justify-start items-start gap-4 flex">
            <div className="self-stretch justify-start items-start gap-2.5 inline-flex">
                <div className="grow shrink basis-0 h-5 justify-start items-center gap-2 flex">
                    <div className="w-2 h-2 bg-slate-900 rounded-full" />
                    <div className="text-gray-600 text-base font-normal font-['Dessau'] leading-tight">Microwave</div>
                </div>
                <div className="grow shrink basis-0 h-5 justify-start items-center gap-2 flex">
                    <div className="w-2 h-2 bg-slate-900 rounded-full" />
                    <div className="text-gray-600 text-base font-normal font-['Dessau'] leading-tight">Outdoor Shower</div>
                </div>
                <div className="grow shrink basis-0 h-5 justify-start items-center gap-2 flex">
                    <div className="w-2 h-2 bg-slate-900 rounded-full" />
                    <div className="text-gray-600 text-base font-normal font-['Dessau'] leading-tight">Refrigerator</div>
                </div>
            </div>
        </div>
        <div className="self-stretch h-5 flex-col justify-start items-start gap-4 flex">
            <div className="self-stretch justify-start items-start gap-2.5 inline-flex">
                <div className="grow shrink basis-0 h-5 justify-start items-center gap-2 flex">
                    <div className="w-2 h-2 bg-slate-900 rounded-full" />
                    <div className="text-gray-600 text-base font-normal font-['Dessau'] leading-tight">Swimming Pool</div>
                </div>
                <div className="grow shrink basis-0 h-5 justify-start items-center gap-2 flex">
                    <div className="w-2 h-2 bg-slate-900 rounded-full" />
                    <div className="text-gray-600 text-base font-normal font-['Dessau'] leading-tight">TV Cable</div>
                </div>
                <div className="grow shrink basis-0 h-5 justify-start items-center gap-2 flex">
                    <div className="w-2 h-2 bg-slate-900 rounded-full" />
                    <div className="text-gray-600 text-base font-normal font-['Dessau'] leading-tight">Washer</div>
                </div>
            </div>
        </div>
    </div>
</div> */}

export default BodyContents