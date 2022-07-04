import  { useState, useEffect } from 'react';

const Pagination = ({data, RenderComponent, dataLimit, currentPage}) => {
    

    const getPaginatedData = () => {
        const startIndex = currentPage * dataLimit - dataLimit;
        const endIndex = startIndex + dataLimit;
        return  data.slice(startIndex, endIndex);

    }
    
    
    
    return(
        <tbody>
            <>
                {getPaginatedData().map((d, idx) => (
                    <RenderComponent  key={idx} data={d} />
                ))}
            </>            
        </tbody>
    )
}

export default Pagination