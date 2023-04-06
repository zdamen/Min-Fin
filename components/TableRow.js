import React from 'react';

const TableRow = (props) => {
  const displayFoam = props.MinoxidilFoamPrice? `$${props.MinoxidilFoamPrice}`: 'N/A';
  const displaySolution = props.MinoxidilSolutionPrice? `$${props.MinoxidilSolutionPrice}`: 'N/A';
  const displayFin = props.FinasteridePrice? `$${props.FinasteridePrice}`: 'N/A';


  return (
    <div className="w-[1400px] h-[60px] m-14 ">
    <div className="w-10/12 pb-4 h-[60px] mb-10 items-center flex flex-row justify-between">
      <img src={props.imageurl} className="w-[150px] h-[60px] object-contain " alt={props.brand} />
      <a className="relative text-center right-[90px] text-4xl text-blue-500 productpricelink" href={props.MinoxidilFoamLink}>{displayFoam}</a>
      <a className="relative text-center right-10 text-4xl text-blue-500 productpricelink" href={props.MinoxidilSolutionLink}>{displaySolution}</a>
      <a className="relative text-center text-4xl  text-blue-500 productpricelink" href={props.FinasterideLink}>{displayFin}</a>
    </div>
    <div className="h-[4px] bg-[#D9D9D9]"></div>
  </div>
  
  )
};

export default TableRow;
