import React, { useState } from 'react'

function Kirkland(props) {
  
  return (
    <div className="w-[1400px] h-[40px] pt-28 left-56 relative mt-6">
    <div className="w-10/12 mb-4 h-[40px] items-center flex flex-row justify-between ">
      <img src= {props.imageurl} className="w-[130px] h-[40px] object-contain" alt="keeps" />
      <a className="relative text-center right-16 text-4xl text-blue-500 productpricelink" href={props.foamlink}>${props.foamPrice}</a>
      <a className="relative text-center right-10 text-4xl text-blue-500 productpricelink" href={props.solutionlink}>${props.solutionPrice}</a>
      <a className="relative text-center right-2 text-4xl text-blue-500 productpricelink" href={props.finlink}>${props.finPrice}</a>
    </div>
    <div className="h-[4px] bg-[#D9D9D9]"></div>
  </div>
  )
}

export default Kirkland