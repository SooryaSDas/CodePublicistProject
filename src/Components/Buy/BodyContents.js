import React from 'react'
import BasicDetails from './BasicDetails'
import OverView from './OverView'
import RecentlyViewed from './RecentlyViewed'
import SimilarListing from './SimilarListing'
import DetailImage from './DetailImage'

const BodyContents = () => {
  return (
    <div className="bg-[#ffffff] flex flex-row justify-center w-full">
        <div className="bg-[#ffffff] w-[1440px] mt-12 relative">
          <BasicDetails/>
          <DetailImage/>  
          <OverView/> 
        </div>
        
       
    </div>
  )
}

export default BodyContents